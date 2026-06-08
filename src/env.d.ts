/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.yaml' {
  const data: any;
  export default data;
}
