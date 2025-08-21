# Simple Design System (alpha)

Figmaの[Code Connect](https://github.com/figma/code-connect)を使用しています。

Simple Design System (SDS) は、Figmaの変数、スタイル、コンポーネント、Code Connectを Reactコードベースと組み合わせて、レスポンシブWebデザインシステムの完全な全体像を示すベースデザインシステムです。

SDS は単なるFigmaの別のデザインシステムではありません。デザインと開発の間にはまだ多くのギャップがあり、SDSはそれらを埋めるためのベストプラクティスを提供します。SDSは、多くのコード優先コンポーネントライブラリに典型的なシンプルなテーマレイヤーを超えたデザインでのカスタマイズ性を提供しながら、コードでの意味についても正直であろうとしています。

SDSを使って新しいプロジェクトを始めようとしている場合でも、一般的なデザインシステムのベストプラクティスの例を探している場合でも、このコードベースとデザインファイル内のツールが正しい方向に導いてくれるでしょう。

## リソース

- [Storybook](https://figma.github.io/sds/storybook)
- [Figma Community File](https://www.figma.com/community/file/1380235722331273046/simple-design-system)

## セットアップ

- `npm i` で依存関係をインストール
- `npm run app:dev` で[localhost:8000](http://localhost:8000)でサーバーを起動し、[App.tsx](src/App.tsx)の内容をレンダリング
- `npm run storybook` で[localhost:6006](http://localhost:6006)でStorybookを起動

### Figma認証

- [Figma APIトークンを作成](https://www.figma.com/developers/api#authentication)
  - Code Connectスコープを追加
  - [scripts](./scripts/)で統合機能を使用したい場合は、File Read、Dev Resources Write、Variablesスコープを追加
  - [スコープの詳細](https://www.figma.com/developers/api#authentication-scopes)
- [.env-rename](./.env-rename)を複製
- `.env`にリネーム（gitから除外されます）
  - `.env`で`FIGMA_ACCESS_TOKEN=`にトークンを設定
  - `.env`で`FIGMA_FILE_KEY=`にファイルのキー（ファイルURLから取得）を設定

### Code Connect

SDSは完全にFigmaのCode Connectによってサポートされています。これには、デザインシステム用の[プリミティブ](./src/figma/primitives/)の接続方法の例と、それらのプリミティブの[コンポジション](./src/figma/compositions/)が含まれます。

このリポジトリは[figma.config.json](./figma.config.json)で`documentUrlSubstitutions`を使用しています。これにより、ドキュメントをFigmaファイルに依存しないようにし、すべてのFigmaファイル固有の情報を一箇所にまとめて、簡単にURL交換ができるようになります。ドキュメントURL置換は、リンクをクリックせずに関連コンポーネントを見つけられるように命名されています。キー`<FIGMA_INPUTS_CHECKBOX_GROUP>`は`<FIGMA_[ページ名]_[コンポーネント名]>`として分解されます。

```json
{
  "documentUrlSubstitutions": {
    "<FIGMA_INPUTS_CHECKBOX_GROUP>": "https://figma.com/design/whatever?node-id=123-456"
  }
}
```

Code Connectドキュメントでより表現力豊かなURLを使用できます：

```js
figma.connect(CheckboxGroup, "<FIGMA_INPUTS_CHECKBOX_GROUP>");
```

### このリポジトリを複製したFigmaファイルに接続する

上記を踏まえて、Simple Design System Figmaファイルの新しいクローンはすべてのnode-idを維持する必要があります。手順は以下の通りです：

- [Figma Community File](https://www.figma.com/community/file/1380235722331273046/simple-design-system)を複製
- このリポジトリをクローン
- [figma.config.json](./figma.config.json)のURLをあなたのFigmaファイルを指すように更新
  - 注：新しいコンポーネントを作成、切り離し、再作成しない限り、ファイルキー（例：`xuauf1WnNBmOwjkjaFq7P2`）のみがURLの変更箇所です。
- [Figma認証トークン](#figma認証)を作成・設定
- この時点で、`npx figma connect publish`が動作し、新しいファイルがCode Connectを持つはずです。

## 構造

すべてのコンポーネントとスタイルは[src/ui](./src/ui)にあります。そのディレクトリ内で、コードはいくつかのカテゴリに分類されています。

### [src/ui/compositions](./src/ui/compositions/)

SDSを使ってレスポンシブWebサイトを構築する方法を示すプリミティブコンポーネントの配置例。

### [src/ui/hooks](./src/ui/hooks/)

カスタムReactフック定義

### [src/ui/icons](./src/ui/icons/)

すべてのアイコンコンポーネント。[scripts/icons](./scripts/icons)によって自動生成されます。

### [src/ui/images](./src/ui/images/)

プレースホルダー画像。

### [src/ui/layout](./src/ui/layout/)

レイアウトコンポーネント。SDSレイアウトに不可欠ですが、Figmaに対応するコンポーネントはありません。

### [src/ui/primitives](./src/ui/primitives/)

メインコンポーネントライブラリ。SDSプリミティブはサブコンポーネントにさらに分解できません。

### [src/ui/providers](./src/ui/providers/)

カスタムReactプロバイダー定義

### [src/ui/utils](./src/ui/utils/)

カスタムユーティリティとユーティリティコンポーネント

### Code ConnectとStorybook

すべてのCode ConnectドキュメントとStorybookストーリーは同じカテゴリ分けに従い、[src/figma](./src/figma)と[src/stories](./src/stories)で定義されています。

## スクリプト

`scripts`ディレクトリにいくつかの統合例があります。これらには、あなたの組織がアクセスできる場合とできない場合がある追加のAPIスコープが必要な場合があります。可能な場合は、ギャップを埋めるのに役立つプラグイン例もあります。

### [scripts/component-metadata](./scripts/component-metadata)

- FigmaのJSコンソールで実行するスクリプト
- ファイル内のすべてのコンポーネントの説明を一括管理。複雑なプラグインを作る代わりに、JavaScriptコンソールから直接スクリプトを実行することで、より簡単にできます。
- [scripts/component-metadata/exportComponentJSON.js](./scripts/component-metadata/exportComponentJSON.js)の内容をコピーし、ファイルを開いた状態でコンソールで実行。
  - 結果を「オブジェクトとしてコピー」して[scripts/component-metadata/components.json](./scripts/component-metadata/components.json)に貼り付け。
- そこで説明をより簡単に変更できます。
- 説明を変更したら、JSONをコピーして[scripts/component-metadata/importComponentJSON.js](./scripts/component-metadata/importComponentJSON.js)の上部の`json`変数の値として貼り付け。
- インポートファイルのすべての内容をコピーしてコンソールで実行し、ファイル全体の説明を一括更新。
- **これは説明のみを更新します。** Dev Resourcesを更新するには、[scripts/dev-resources](#scriptsdev-resources)を使用できます。

### [scripts/dev-resources](./scripts/dev-resources)

- `npm run script:dev-resources`（REST APIのみ）
- [scripts/dev-resources/devResources.mjs](./scripts/dev-resources/devResources.mjs)で記述されたすべてのコンポーネントのdev resourcesを一致するように設定。
- URLを一括交換する際に便利。REST APIトークンに`Dev Resources: Write`スコープが必要。

### [scripts/icons](./scripts/icons)

- `npm run script:icons:rest`
- ファイルからすべてのアイコンを取得し、[src/ui/icons](./src/ui/icons)ディレクトリにコンポーネントを生成。
- Code Connect用に[src/figma/icons/Icons.figma.tsx](./src/figma/icons/Icons.figma.tsx)も生成。

### [scripts/tokens](./scripts/tokens)

- `npm run script:tokens:rest`
- Figmaからすべての変数とスタイルを取得し、[src/theme.css](./src/theme.css)に変換。
- [scripts/tokens/tokensCodeSyntaxes.js](./scripts/tokens/tokensCodeSyntaxes.js)を作成。これはFigmaのJSコンソールで実行して、このリポジトリに一致するCSSですべての変数の[codeSyntaxes](https://www.figma.com/plugin-docs/api/Variable/#codesyntax)を更新するスクリプト。
- Variables REST APIを使わずに同じデータを取得する方法のプラグイン例を含む。
  - Developmentで[プラグインをインストール](https://www.figma.com/plugin-docs/plugin-quickstart-guide/)
  - プラグインを実行し、プラグイン出力を[scripts/tokens/styles.json](./scripts/tokens/styles.json)と[scripts/tokens/tokens.json](./scripts/tokens/tokens.json)にコピー
  - `npm run script:tokens`（`:rest`なし）を実行すると、REST APIリクエストを行わずにJSONファイルを直接参照して更新
