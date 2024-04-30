# 概要
異世界の創造者 Mod用 union.js 型定義パッケージ

インストールすることで`tWgm`や`tGameLog`等`union.js`で定義されているグローバルな変数・クラス等の型定義を使用できます。

# Install

異世界の創造者v1.1.10.0用型定義
```
npm install -D maginai-game-types@1.10
```

異世界の創造者v1.2.0.0用型定義
```
npm install -D maginai-game-types@2.0
```

※他バージョンも同様

インストールコマンド例の通り、本パッケージバージョンはmajorとminorのみゲームバージョンに沿います。

patchは本パッケージとして修正があった場合に上がります。  
（ゲーム側のrevision更新に伴い型も更新の必要が出てきた場合、ゲームバージョンと関係ないバグ修正…etc）

`npm install`後は、コードからパッケージ内のグローバルな変数・クラス型定義を参照するため、次のいずれかの手順で設定が必要です。

## (A) tsconfigで`types`をすでに使用している場合
既存の`types`配列に`maginai-game-types`を含めてください。

```json
  "types": [
    "node",
    "maginai-game-types"
  ]
```

## (B) tsconfigで`types`を使用していない場合
コードで以下のトリプルスラッシュディレクティブを使用してください。

```ts
/// <reference types="maginai-game-types"/>
```

構成例：

`types/global.d.ts`
```ts
/// <reference types="maginai-game-types"/>

// ...他にグローバルな型定義があれば記載、importやexportを使用するとモジュールスコープとなってしまうため×
```

`tsconfig.json`
```json
  "include": [
    "src",
    "types"
  ],
```

※  
tsconfigの`types`を使用すると、そこに書かれた`@types`スコープのパッケージのみグローバルに参照できるようになります。  
これまで`types`を使っていなかったパッケージに`types`を追加すると、型定義が意図せず参照できなくなる可能性があるため、上記スラッシュディレクティブを使用してください。

# 不具合・問い合わせ
本リポジトリのissueを立てるか、以下の連絡先までご連絡ください。

[https://whiteblackspace.hatenablog.com/contact-coaw](https://whiteblackspace.hatenablog.com/contact-coaw)

# 謝辞
本リポジトリはenzaki氏より提供いただいた型定義生成スクリプト（https://github.com/Spoonail-Iroiro/maginai/pull/16 ）にSpoonailがその他開発用ファイルを追加して作成されました。
