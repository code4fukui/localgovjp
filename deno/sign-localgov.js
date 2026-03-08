import { makeTrust } from "https://code4fukui.github.io/opendata-with-trust/makeTrust.js";

const prikey = Deno.env.get("PRIKEY");
console.log(prikey);
await makeTrust("../localgovjp-utf8.csv", prikey);
await makeTrust("../localgovjp.json", prikey);
