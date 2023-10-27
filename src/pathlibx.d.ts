/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import fs from 'node:fs';
export default class Path {
  path: string;
  root: string;
  basename: string;
  name: string;
  dirname: string;
  ext: string;
  stem: string;
  suffixes: string[];
  constructor(...paths: string[]);
  toString(): string;
  /**
   * Operator /
   */
  t(child: string): Path;
  parent(): Path;
  /**
   * Shortcut for toString()
   */
  s(): string;
  withName(newName: string): Path;
  withSuffix(newSuffix: string): Path;
  mvSync(dstPath: string | Path): void;
  cpSync(dstPath: string | Path, opts?: fs.CopySyncOptions): void;
  mkdirSync(
    opts?: fs.MakeDirectoryOptions & {
      recursive: true;
    } & {
      existOk?: boolean;
    }
  ): this;
  readTextSync(opts?: {
    encoding?: BufferEncoding | null | undefined;
    flag?: undefined | string;
  }): string;
  writeTextSync(
    data: string | NodeJS.ArrayBufferView,
    opts?: fs.WriteFileOptions
  ): void;
  existsSync(): boolean;
  resolve(): Path;
  static dunderFilename(): string;
}
