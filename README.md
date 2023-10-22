# 概要
異世界の創造者 Mod用 union.js 型定義パッケージ

インストールすることで`tWgm`や`tGameLog`等`union.js`で定義されているグローバルな変数・クラス等の型定義を使用できます。

# Install

異世界の創造者v1.1.7.0用型定義
```
npm install -D maginai-game-types@1.7
```

異世界の創造者v1.1.9.0用型定義
```
npm install -D maginai-game-types@1.9
```

※他バージョンも同様

つまり、本パッケージバージョンはmajorとminorのみゲームバージョンに沿います。

patchは本パッケージとして修正があった場合に上がります。  
（ゲーム側のrevision更新に伴い型も更新の必要が出てきた場合、ゲームバージョンと関係ないバグ修正…etc）

※`tsconfig`に`types`が存在している場合は`maginai-game-types`を含めて下さい

```json
// ...
  "types": [
    "maginai-game-types"
  ]
// ...
```
