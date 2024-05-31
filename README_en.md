[Japanese](README.md)

# CoAW `union.js` Type Definition Package

# Overview

By installing this package, you can use type definitions of global variables and classes defined in `union.js`, such as `tWgm` or `tGameLog`.

# Install

Type definitions for CoAW v1.1.10.0
```bash
npm install -D maginai-game-types@1.10
```

Type definitions for CoAW v1.2.0.0
```bash
npm install -D maginai-game-types@2.0
```

The same applies to other versions.

As shown in the installation command examples, the major and minor versions of this package follows the version of the game.  
The patch version will be incremented when we have independent fixes or updates to this package.  

After running `npm install`, you need to configure your project to reference the type definitions provided by this package. Follow one of the steps below.

## (A) If you have `types` in your tsconfig already
Include `maginai-game-types` in the existing `types` array.

```json
  "types": [
    "node",
    "maginai-game-types"
  ]
```

## (B) If you don't have `types` in tsconfig
Use the following triple-slash directive in your code.

```ts
/// <reference types="maginai-game-types"/>
```

Example configuration:

`types/global.d.ts`
```ts
/// <reference types="maginai-game-types"/>

// ...Include other global type definitions if needed. Avoid using import or export because they make this file module.
```

`tsconfig.json`
```json
  "include": [
    "src",
    "types"
  ],
```

Note:  
When your project has `types` in tsconfig, only the packages listed in the `types` will be allowed to be referenced globally.  
If you add `types` to your project that didn't have it before, you might unintentionally lose access to certain type definitions. It's why we recommend use the triple-slash directive in this case.

# Bug Reports and Inquiries
If you encounter any problems, please create an issue on this repository or contact Spoonail via [contact information provided here](https://whiteblackspace.hatenablog.com/contact-coaw)

# Acknowledgements
Type definition generation scripts in this repository was provided by Enzaki (https://github.com/Spoonail-Iroiro/maginai/pull/16).  

