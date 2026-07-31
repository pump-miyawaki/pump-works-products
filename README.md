# PUMP WORKS PRODUCTS サイト

ポンプ宮脇さんの個人サイト（1ページ構成）です。`index.html` / `styles.css` / `script.js` の3ファイルだけで動きます。

## 公開前に編集してほしい箇所

1. **公式LINEのURL**（2箇所）
   `index.html` 内の `href="https://lin.ee/your-line-id"` を、実際のLINE公式アカウントの登録URLに書き換えてください。
   （ヘッダーの「公式LINE」ボタン、CONTACTセクション、右下の常時表示ボタン）

2. **プロフィール文章と写真**（`id="profile"` セクション）
   プレースホルダーの文章を、実際の経歴・想いに差し替えてください。
   円形の枠内はアイコンのプレースホルダーです。写真を使う場合は次のように置き換えられます。
   ```html
   <div class="profile__figure">
     <img src="profile.jpg" alt="ポンプ宮脇">
   </div>
   ```

3. **実績セクション**（`id="achievements"`）
   `[ 数字 ]` や「実績タイトルを入力」はすべてダミーです。実際の実績・数字・お客様の声に差し替えてください。

4. **事業一覧の各リンク**（`id="business"`）
   「詳しく見る」の `href="#"` は仮リンクです。各事業に個別サイトがあれば外部URLに、なければ紹介ページを追加してリンク先を作成してください。

5. **説明文（コピー）**
   各事業カードや ABOUT セクションの文章はドラフトです。実際のサービス内容に合わせて自由に書き換えてください。

## GitHub Pages で公開する場合

1. GitHubで新しいリポジトリを作成（Public）
2. `index.html` / `styles.css` / `script.js` をアップロード（ドラッグ&ドロップでOK）
3. リポジトリの **Settings → Pages** で Branch を `main` に設定して保存
4. 数分後、`https://ユーザー名.github.io/リポジトリ名/` で公開されます

## Cloudflare Pages で公開する場合

1. Cloudflareダッシュボード → **Workers & Pages → Pages → アップロードして配置**
2. この3ファイルが入ったフォルダをそのままドラッグ&ドロップ
3. 発行された `https://プロジェクト名.pages.dev` で公開されます

## 独自ドメインを使いたい場合

GitHub Pages・Cloudflare Pagesともに、公開後の設定画面から独自ドメインを無料で接続できます（ドメイン自体の取得費用は別途必要です）。
