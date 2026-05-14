# localgovjp

都道府県、市、区、町、村を含む、日本の全地方自治体のオープンデータセットです。

## サンプルアプリケーション

- [日本の市区町村数](https://code4fukui.github.io/localgovjp/)
- [日本の都道府県・市区町村ウェブサイト一覧](https://code4fukui.github.io/localgovjp/list.html)
- [日本の市役所マップ](https://code4fukui.github.io/localgovjp/map.html)
- [日本の都道府県マップ](https://code4fukui.github.io/localgovjp/prefjp.html)

## 利用可能なデータ

データはCSVおよびJSON形式で提供されており、GitHub Pagesを通じてウェブアプリケーションで簡単に利用できます。

### 市区町村（市、区、町、村）
- **CSV**: https://code4fukui.github.io/localgovjp/localgovjp-utf8.csv
- **JSON**: https://code4fukui.github.io/localgovjp/localgovjp.json

### 都道府県
- **CSV**: https://code4fukui.github.io/localgovjp/prefjp-utf8.csv
- **JSON**: https://code4fukui.github.io/localgovjp/prefjp.json

## データスキーマ

### 市区町村（`localgovjp`）

| フィールド      | 説明                      |
|------------|----------------------------------|
| `pid`      | 都道府県ID                    |
| `pref`     | 都道府県名                  |
| `cid`      | 市区町村ID                          |
| `city`     | 市区町村名                        |
| `citykana` | 市区町村名（カナ）                 |
| `lat`      | 緯度                         |
| `lng`      | 経度                        |
| `url`      | 市区町村ウェブサイトURL                 |
| `phrase`   | キャッチフレーズ                      |
| `lgcode`   | 地方公共団体コード            |

### 都道府県（`prefjp`）

| フィールド         | 説明                      |
|---------------|----------------------------------|
| `pid`         | 都道府県ID                    |
| `pref`        | 都道府県名                  |
| `prefkana`    | 都道府県名（カナ）           |
| `pref_en`     | 都道府県名（英語）        |
| `url`         | 都道府県ウェブサイトURL           |
| `lgcode`      | 地方公共団体コード            |
| `ISO3166-2`   | ISO 3166-2コード（例: `JP-01`）  |

## データの更新方法

このプロジェクトでは、データの処理と更新に[Deno](https://deno.land/)を使用しています。

### 市区町村（`localgov`）
1.  確認用の中間ファイルを生成します: `deno run -A deno/chk-localgov.js`
2.  エラーを手動で確認し、生成された `deno/c-localgovjp-utf8.csv` を編集します。
3.  最終的なデータファイル（`.csv`, `.json`, `.js`）を生成します: `deno run -A deno/make-localgov.js`
4.  [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/) を使用してデータに署名します（`.env` に `PRIKEY` が必要です）: `deno run -A deno/sign-localgov.js`

### 都道府県（`pref`）
1.  適切なチェックスクリプトを実行して、確認用の中間ファイルを生成します。
2.  エラーを手動で確認し、生成された `deno/c-prefjp-utf8.csv` を編集します。
3.  `deno/make.js` を調整して、最終的なデータファイル（`.csv`, `.json`, `.js`）を生成します。
4.  [OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/) を使用してデータに署名します（`.env` に `PRIKEY` が必要です）: `deno run -A deno/sign-pref.js`

## データの検証方法

[OpendataWithTrust](https://github.com/code4fukui/opendata-with-trust/) を使用して、データファイルの完全性を検証できます。

```bash
deno run --allow-read --allow-net https://code4fukui.github.io/opendata-with-trust/verifyTrust.js localgovjp-utf8.csv
deno run --allow-read --allow-net https://code4fukui.github.io/opendata-with-trust/verifyTrust.js localgovjp.json
deno run --allow-read --allow-net https://code4fukui.github.io/opendata-with-trust/verifyTrust.js prefjp-utf8.csv
deno run --allow-read --allow-net https://code4fukui.github.io/opendata-with-trust/verifyTrust.js prefjp.json
```

## データソース

- [国土地理院](https://github.com/gsi-cyberjapan/gsimaps)
- [地方公共団体
