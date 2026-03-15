# localgovjp

list of local government in Japan

## Format

- pid,pref,cid,city,citykana,lat,lng,url,phrase,lgcode
    - (Prefecture ID, Prefecture Name, City ID, City Name, City Name Kana, Latitude, Longitude, City Website URL, Catchphrase, Local Government Code)

## For Web App

- CSV
   - https://code4fukui.github.io/localgovjp/localgovjp-utf8.csv  
   - https://code4fukui.github.io/localgovjp/prefjp-utf8.csv  
- JSON  
   - https://code4fukui.github.io/localgovjp/localgovjp.json  
   - https://code4fukui.github.io/localgovjp/prefjp.json  

## How to Update

with [Deno](https://deno.land/)

### localgov

1. make [deno/c-localgovjp-utf8.csv](deno/c-localgovjp-utf8.csv)
2. check err and edit [deno/c-localgovjp-utf8.csv](deno/c-localgovjp-utf8.csv)
3. make [localgovjp-utf8.csv](localgovjp-utf8.csv) / [localgovjp.json](localgovjp.json) / [localgovjp.js](localgovjp.js)
4. make trust by [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/) (needs PRIKEY on .env)

### pref

1. make [deno/c-prefjp-utf8.csv](deno/c-prefjp-utf8.csv)
2. check err and edit [deno/c-prefjp-utf8.csv](deno/c-pref-utf8.csv)
3. make [prefjp-utf8.csv](prefjp-utf8.csv) / [prefjp.json](prefjp.json) / [prefjp.js](prefjp.js)
4. make trust by [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/) (needs PRIKEY on .env)

## How to Verify

verify by [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/)
```
deno --allow-import=code4fukui.github.io --allow-read=./ https://code4fukui.github.io/opendata-with-trust/verifyTrust.js localgovjp-utf8.csv
deno --allow-import=code4fukui.github.io --allow-read=./ https://code4fukui.github.io/opendata-with-trust/verifyTrust.js localgovjp.json
deno --allow-import=code4fukui.github.io --allow-read=./ https://code4fukui.github.io/opendata-with-trust/verifyTrust.js prefjp-utf8.csv
deno --allow-import=code4fukui.github.io --allow-read=./ https://code4fukui.github.io/opendata-with-trust/verifyTrust.js prefjp.json
```

## Sample App

- [Number of Cities in Japan](https://code4fukui.github.io/localgovjp/)
- [List of Prefecture and City Websites in Japan](https://code4fukui.github.io/localgovjp/list.html)
- [Map of City Halls in Japan](https://code4fukui.github.io/localgovjp/map.html)
- [Map of Prefectures in Japan](https://code4fukui.github.io/localgovjp/prefjp.html)

## Data Sources

- [Geospatial Information Authority of Japan](https://github.com/gsi-cyberjapan/gsimaps)
- [Local Government Information System Organization - Map Search](https://www.j-lis.go.jp/spd/map-search/cms_1069.html)

## Updates

- 2016-11-29 Checked all websites and updated
- 2017-02-18 Removed duplicate for Tomakoma village
- 2019-01-01 Updated
- 2020-01-04 Updated
- 2020-04-17 Updated
- 2021-01-20 Updated
- 2021-06-02 Fukuoka Nakagawa Town -> Fukuoka Nakagawa City
- 2021-06-30 Corrected location information for Kiho Town, Mie
- 2021-07-19 Corrected location for Etajima City, Hiroshima
- 2021-10-31 Updated prefecture URLs, added ISO3155-2
- 2021-11-01 Updated city URLs, added Local Government Code (lgcode)
- 2023-03-09 Updated city URLs
- 2026-01-01 Updated city URLs
- 2026-03-09 Updated city URLs

## License

- [CC0](https://creativecommons.org/publicdomain/zero/1.0/)