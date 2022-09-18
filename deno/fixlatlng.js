import { CSV } from "https://js.sabae.cc/CSV.js";

const list = (await Deno.readTextFile("ll-fix.txt")).trim().split("\n");
console.log(list);

const data = CSV.toJSON(await CSV.fetch("c-localgovjp-utf8.csv"));
for (const l of list) {
  // 02387:青森県中泊町（40.960427, 140.434122）
  const cid = parseInt(l, 10);
  const lg = data.find(d => d.cid == cid);
  if (!lg) {
    throw new Error(l);
  }
  const ll = l.match(/（(\d+\.\d+), (\d+\.\d+)）/);
  lg.lat = ll[1];
  lg.lng = ll[2];
}
await Deno.writeTextFile("c-localgovjp-utf8.csv", CSV.stringify(data));
