# localgovjp 日本の地方自治体一覧オープンデータ

list of local government in Japan

## format

- pid,pref,cid,city,citykana,lat,lng,url,phrase,lgcode
    - （都道府県ID, 都道府県名, 市区町村ID, 市区町村名, 市区町村名よみ, 緯度, 経度, 自治体ホームページURL, キャッチフレーズ, 全国地方公共団体コード）

## for web app

- CSV
   - https://code4fukui.github.io/localgovjp/localgovjp-utf8.csv  
   - https://code4fukui.github.io/localgovjp/prefjp-utf8.csv  
- JSON  
   - https://code4fukui.github.io/localgovjp/localgovjp.json  
   - https://code4fukui.github.io/localgovjp/prefjp.json  

## how to update

with [Deno](https://deno.land/)

1. make [deno/c-localgovjp-utf8.csv](deno/c-localgovjp-utf8.csv)
```bash
deno -A chk-localgov.js
```
1. check err and edit [deno/c-localgovjp-utf8.csv](deno/c-localgovjp-utf8.csv)
2. run make.js
```bash
cd deno
deno -A make.js
```

## how to verify

verify by [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/)
```bash
deno run -A https://code4fukui.github.io/opendata-with-trust/verifyTrust.js localgovjp-utf8.csv
```

## sample app

- [日本の都市数](https://code4fukui.github.io/localgovjp/)
- [日本の都道府県と市区町村のサイト一覧](https://code4fukui.github.io/localgovjp/list.html)
- [全国役場マップ](https://code4fukui.github.io/localgovjp/map.html)

## data

- [国土地理院](https://github.com/gsi-cyberjapan/gsimaps)
- [地方公共団体情報システム機構 全国自治体マップ検索](https://www.j-lis.go.jp/spd/map-search/cms_1069.html)

## update

- 2016-11-29 全Webサイトチェックし更新
- 2017-02-18 泊村の重複を削除
- 2019-01-01 更新
- 2020-01-04 更新
- 2020-04-17 更新
- 2021-01-20 更新
- 2021-06-02 福岡県那珂川町→福岡県那珂川市
- 2021-06-30 三重県北牟婁郡紀北町役場の位置情報誤り修正
- 2021-07-19 広島県江田島市 場所修正
- 2021-10-31 都道府県URL更新、ISO3155-2追加
- 2021-11-01 市区町村URL更新、全国地方公共団体コード(lgcode)追加
- 2023-03-09 市区町村URL更新
- 2026-01-01 市区町村URL更新

## license

- [CC0](https://creativecommons.org/publicdomain/zero/1.0/)
