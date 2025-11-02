import "@raycast/api";

declare module "react" {
  interface ReactNode {
    bigint?: never;
  }
}
