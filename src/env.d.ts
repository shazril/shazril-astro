/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly UMAMI_URL: string;
  readonly UMAMI_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
