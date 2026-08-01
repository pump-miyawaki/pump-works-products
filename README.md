# PUMP WORKS PRODUCTS サイト

ポンプ宮脇さんの個人サイトです。トップページ（`index.html`）と、事業ごとの詳細ページ4つで構成されています。

```
index.html       … トップページ
coffee.html      … JOURNEY SIP COFFEE
coaching.html    … 個人コーチングセッション
community.html   … コミュニティ
weeding.html     … 草むしり事業
styles.css       … 全ページ共通のデザイン
script.js        … 全ページ共通の挙動（メニュー開閉・スクロールで表示など）
```

全ページとも `styles.css` と `script.js` を共有しているので、この2ファイルを直すと全ページに反映されます。トップページの「事業一覧」から各詳細ページへのリンクは設定済みです。

## 各事業ページで編集してほしい箇所

- **MENU/PLAN/PRICEセクション**：`¥ --` や「商品名を入力」はすべてプレースホルダーです。実際の商品・プラン・料金に差し替えてください
- **FLOWセクション**：申込みから利用開始までの流れです。実際の手順に合わせて文言を調整してください
- **FAQセクション**：「質問文を入力してください」を、実際によくある質問と回答に差し替えてください

## 公開前に編集してほしい箇所

1. **公式LINEのURL**（各ページのCONTACTセクション、右下の常時表示ボタン）
   `href="https://lin.ee/your-line-id"` を、実際のLINE公式アカウントの登録URLに書き換えてください。

2. **トップページのファーストビュー写真**
   `images` フォルダに `hero.jpg` という名前で写真を追加してください（コード側はすでに `images/hero.jpg` を参照しています）。横長・高解像度の写真が綺麗に収まります。暗いオーバーレイがかかる仕様なので、多少暗めの写真でも文字は読みやすいままです。

3. **プロフィール文章と写真**（`id="profile"` セクション）
   プレースホルダーの文章を、実際の経歴・想いに差し替えてください。
   写真は `images` フォルダを作り、その中に `profile.jpg` という名前で追加してください（コード側はすでに `images/profile.jpg` を参照する設定になっています）。正方形にトリミングした画像がきれいに収まります。
   ```
   サイトのフォルダ/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── images/
       └── profile.jpg
   ```
   GitHubにアップロードする際は、`images` フォルダごとドラッグ&ドロップすればOKです。

3. **プロフィール文章と写真**（`id="profile"` セクション）
   プレースホルダーの文章を、実際の経歴・想いに差し替えてください。
   写真は `images` フォルダを作り、その中に `profile.jpg` という名前で追加してください（コード側はすでに `images/profile.jpg` を参照する設定になっています）。正方形にトリミングした画像がきれいに収まります。
   ```
   サイトのフォルダ/
   ├── index.html
   ├── coffee.html / coaching.html / community.html / weeding.html
   ├── styles.css
   ├── script.js
   └── images/
       ├── hero.jpg
       └── profile.jpg
   ```
   GitHubにアップロードする際は、`images` フォルダごとドラッグ&ドロップすればOKです。

4. **実績セクション**（`id="achievements"`）
   `[ 00 ]` や「実績タイトルを入力」はすべてダミーです。実際の実績・数字・お客様の声に差し替えてください。

5. **説明文（コピー）**
   ABOUTセクションや各事業の紹介文はドラフトです。実際のサービス内容に合わせて自由に書き換えてください。

## GitHub Pages で公開する場合

1. GitHubで新しいリポジトリを作成（Public）
2. `index.html` / `coffee.html` / `coaching.html` / `community.html` / `weeding.html` / `styles.css` / `script.js` と、`images` フォルダをまとめてアップロード（ドラッグ&ドロップでOK）
3. リポジトリの **Settings → Pages** で Branch を `main` に設定して保存
4. 数分後、`https://ユーザー名.github.io/リポジトリ名/` で公開されます

## Cloudflare Pages で公開する場合

1. Cloudflareダッシュボード → **Workers & Pages → Pages → アップロードして配置**
2. これらのファイル・フォルダが入ったフォルダをそのままドラッグ&ドロップ
3. 発行された `https://プロジェクト名.pages.dev` で公開されます

## 独自ドメインを使いたい場合

GitHub Pages・Cloudflare Pagesともに、公開後の設定画面から独自ドメインを無料で接続できます（ドメイン自体の取得費用は別途必要です）。
