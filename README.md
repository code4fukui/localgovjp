# localgovjp

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An open dataset of all local governments in Japan, including prefectures, cities, wards, towns, and villages.

## Sample Applications

- [Number of Cities in Japan](https://code4fukui.github.io/localgovjp/)
- [List of Prefecture and City Websites in Japan](https://code4fukui.github.io/localgovjp/list.html)
- [Map of City Halls in Japan](https://code4fukui.github.io/localgovjp/map.html)
- [Map of Prefectures in Japan](https://code4fukui.github.io/localgovjp/prefjp.html)

## Available Data

The data is available in both CSV and JSON formats, hosted via GitHub Pages for easy use in web applications.

### Municipalities (Cities, Wards, Towns, Villages)
- **CSV**: https://code4fukui.github.io/localgovjp/localgovjp-utf8.csv
- **JSON**: https://code4fukui.github.io/localgovjp/localgovjp.json

### Prefectures
- **CSV**: https://code4fukui.github.io/localgovjp/prefjp-utf8.csv
- **JSON**: https://code4fukui.github.io/localgovjp/prefjp.json

## Data Schema

### Municipalities (`localgovjp`)

| Field      | Description                      |
|------------|----------------------------------|
| `pid`      | Prefecture ID                    |
| `pref`     | Prefecture Name                  |
| `cid`      | City ID                          |
| `city`     | City Name                        |
| `citykana` | City Name (Kana)                 |
| `lat`      | Latitude                         |
| `lng`      | Longitude                        |
| `url`      | City Website URL                 |
| `phrase`   | Catchphrase                      |
| `lgcode`   | Local Government Code            |

### Prefectures (`prefjp`)

| Field         | Description                      |
|---------------|----------------------------------|
| `pid`         | Prefecture ID                    |
| `pref`        | Prefecture Name                  |
| `prefkana`    | Prefecture Name (Kana)           |
| `pref_en`     | Prefecture Name (English)        |
| `url`         | Prefecture Website URL           |
| `lgcode`      | Local Government Code            |
| `ISO3166-2`   | ISO 3166-2 Code (e.g., `JP-01`)  |

## How to Update Data

This project uses [Deno](https://deno.land/) for data processing and updates.

### Municipalities (`localgov`)
1.  Generate an intermediate file for review: `deno run -A deno/chk-localgov.js`
2.  Manually check for errors and edit the generated `deno/c-localgovjp-utf8.csv`.
3.  Generate the final data files (`.csv`, `.json`, `.js`): `deno run -A deno/make-localgov.js`
4.  Sign the data using [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/) (requires `PRIKEY` in `.env`): `deno run -A deno/sign-localgov.js`

### Prefectures (`pref`)
1.  Generate an intermediate file for review by running the appropriate check script.
2.  Manually check for errors and edit the generated `deno/c-prefjp-utf8.csv`.
3.  Generate the final data files (`.csv`, `.json`, `.js`) by adapting `deno/make.js`.
4.  Sign the data using [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/) (requires `PRIKEY` in `.env`): `deno run -A deno/sign-pref.js`

## How to Verify Data

You can verify the integrity of the data files using [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/).

```bash
deno run --allow-read --allow-net https://code4fukui.github.io/opendata-with-trust/verifyTrust.js localgovjp-utf8.csv
deno run --allow-read --allow-net https://code4fukui.github.io/opendata-with-trust/verifyTrust.js localgovjp.json
deno run --allow-read --allow-net https://code4fukui.github.io/opendata-with-trust/verifyTrust.js prefjp-utf8.csv
deno run --allow-read --allow-net https://code4fukui.github.io/opendata-with-trust/verifyTrust.js prefjp.json
```

## Data Sources

- [Geospatial Information Authority of Japan](https://github.com/gsi-cyberjapan/gsimaps)
- [Local Government