import Path from './pathlibx.js';

const gameVersionJsonPath = new Path('game-version.json');

export function checkGameVersion() {
  /**
   * @type {string}
   */
  const gameVersion = JSON.parse(
    gameVersionJsonPath.readTextSync()
  ).gameVersion;
  const gameVersionInfo = gameVersion.split('.').map((d) => parseInt(d, 10));
  const packageVersion = JSON.parse(
    new Path('package.json').readTextSync()
  ).version;
  const packageVersionInfo = packageVersion
    .split('-')[0]
    .split('.')
    .map((d) => parseInt(d, 10));

  const isValidVersion =
    gameVersionInfo[1] === packageVersionInfo[0] &&
    gameVersionInfo[2] === packageVersionInfo[1];

  if (isValidVersion) {
    console.log(
      `version ${packageVersion} is valid for game version ${gameVersion}`
    );
  } else {
    throw new Error(
      `version ${packageVersion} is invalid for game version ${gameVersion}`
    );
  }
}

export function exportGameVersion() {
  const patchNotePath = new Path('game/★(日本語)Changelog.txt');

  const patchNote = patchNotePath.readTextSync();
  const matched = patchNote.match(/v\d+\.\d+\.\d+\.\d+/g);
  const newestVersion = matched[0].slice(1);

  const content = `{
  "gameVersion": "${newestVersion}"
}`;
  gameVersionJsonPath.writeTextSync(content);
  console.log(`Exported ${gameVersionJsonPath}`);
}
