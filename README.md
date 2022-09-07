# scraping_getHTML
指定したURLから任意の要素のHTMLを抽出してページごとにテキストファイルを生成するツール
サイトリニューアルのニュース記事一括移行時など「旧サイトの特定エリアのHTMLだけほしい」時に使う用

## Requirement
- node v15.14.0

## Usage
ページID（一意であれば何でもOK）とURLをカンマ区切りで記述したテキストファイルをlistディレクトリに設置して以下を実行
```
node getHTML.js
```
