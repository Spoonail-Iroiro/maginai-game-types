# Release

- `npm run build`
- `types/`と`game-version.json`をコミット
- `npm run npver -- minor`等でversion更新 
- `develop`->`master`へ[release PR](https://github.com/spoonail-iroiro/maginai-game-types/compare/master...develop?quick_pull=1&template=release.md&title=Release:+vX.Y.Z)を作成
  - タイトルは`Release: vX.Y.Z`
  - Actionsによりゲームバージョンとパッケージバージョンの整合性チェック
- PRの各種チェックに合格したら`master`へmerge
  - Actionsによりrelease draftの作成
- 作成されたdraftを確認、changelogの生成と必要なら変更
  - バージョン番号タグは自動
- releaseを確定
  - Actionsにより`npm publish`
