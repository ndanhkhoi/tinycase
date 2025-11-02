/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Output Mode - How to output the converted text */
  "outputMode": "paste" | "clipboard",
  /** Default Case - Default case type when opening the command */
  "defaultCase": "camel" | "pascal" | "snake" | "kebab" | "constant" | "title" | "sentence" | "lower" | "upper"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `command` command */
  export type Command = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `command` command */
  export type Command = {}
}

