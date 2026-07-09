import { CSV } from "https://code4sabae.github.io/js/CSV.js";
//import { CSV } from "./CSV.js";
import { fetchCurl } from "./fetchCurl.js";

const fetchWithTimeout = async (url, timeoutmsec) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => { controller.abort() }, timeoutmsec || 5 * 1000);
    try {
        //return await fetch(url, { signal: controller.signal });
        return await fetch(url, { signal: controller.signal, redirect: "manual" });
        //return await fetchCurl(url);
    } finally {
        clearTimeout(timeout);
    }
    return null;
};
const chkHeader = async (url) => {
    const res = await fetchWithTimeout(url, 5000);
    //console.log(res.headers);
    const status = res.status;
    return status;
};

const chk = async (fn) => {
    //const srcfn = fn;
    const srcfn = "../" + fn;
    console.log(srcfn);
    const data = CSV.toJSON(CSV.decode(await Deno.readTextFile(srcfn)));
    console.log(data);
    for (const d of data) {
        /*
        if (d.url.startsWith("https:////")) {
            d.url = "https://" + d.url.substring(10);
        }
        */
        /*
        if (d.status || d.err) {
            continue; // skip
        }
        */
        console.log(d.url);
        if (d.url.startsWith("http://")) {
            const url = "https:" + d.url.substring(5);
            console.log(url);
            //const url = d.url;
            try {
                const res = await fetchWithTimeout(url);
                console.log(res);
                if (res.status.toString().startsWith("3")) {
                //if (res) {
                    console.log(res);
                    d.url = res.headers.get("location");
                    d.modified = true;
                }
                d.status = res.status;
                d.err = "";
                d.url = url;
            } catch (e) {
                console.log("err", e);
                console.log("err", e.name, e.message);
                d.err = e.message;
            }
        } else {
            /*
            try {
                const st = await chkHeader(d.url);
                d.status = st;
                //const text = await (await fetch(d.url)).text();
                //console.log(text.substring(0, 40));
            } catch (e) {
                console.log("err", e.name, e.message);
                d.err = e.message;
            }
            */
        }
        //Deno.exit(0);
        await Deno.writeTextFile("c-" + fn, CSV.encode(CSV.fromJSON(data)));
   }
};

export { chk };
