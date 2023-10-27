import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

export default class Path {
  path;
  root;
  basename;
  name;
  dirname;
  ext;
  stem;
  suffixes;
  constructor(...paths) {
    if (!paths || !paths.length || paths[0] === '') {
      throw new Error(
        'Cannot instantiate a new Path instance on an empty string, empty array, or falsy value'
      );
    }
    this.path = path.join(...paths);
    const { dir, root, base, ext } = path.parse(this.path);
    this.root = root;
    this.basename = base;
    this.name = base;
    this.dirname = dir;
    this.ext = ext;
    const _split = this.basename.split('.');
    this.stem = _split[0];
    this.suffixes = _split.slice(1).map((s) => `.${s}`);
  }
  toString() {
    return this.path.toString();
  }
  /**
   * Operator /
   */
  t(child) {
    return new Path(path.join(this.path, child));
  }
  parent() {
    return new Path(path.dirname(this.path));
  }
  /**
   * Shortcut for toString()
   */
  s() {
    return this.path;
  }
  withName(newName) {
    return new Path(this.parent().path, newName);
  }
  withSuffix(newSuffix) {
    if (!newSuffix.startsWith('.')) {
      throw new Error("New suffix should starts with '.'");
    }
    return this.withName(this.stem + newSuffix);
  }
  mvSync(dstPath) {
    fs.renameSync(this.path, dstPath.toString());
  }
  cpSync(dstPath, opts) {
    if (opts === undefined) opts = {};
    opts.recursive = true;
    return fs.cpSync(this.path, dstPath.toString(), opts);
  }
  mkdirSync(opts) {
    if (opts?.existOk === true) {
      if (this.existsSync()) return this;
    }
    if (opts !== undefined) {
      delete opts.existOk;
    }
    fs.mkdirSync(this.path, opts);
    return this;
  }
  readTextSync(opts) {
    if (opts === undefined) opts = {};
    if (opts.encoding == null) opts.encoding = 'utf-8';
    return fs.readFileSync(this.path, opts);
  }
  writeTextSync(data, opts) {
    if (opts == null) opts = {};
    if (typeof opts !== 'string' && opts.encoding == null) {
      opts.encoding = 'utf-8';
    }
    return fs.writeFileSync(this.path, data, opts);
  }
  existsSync() {
    return fs.existsSync(this.path);
  }
  resolve() {
    return new Path(path.resolve(this.path));
  }
  static dunderFilename() {
    const __filename = fileURLToPath(import.meta.url);
    return __filename;
  }
}
//# sourceMappingURL=pathlibx.js.map
