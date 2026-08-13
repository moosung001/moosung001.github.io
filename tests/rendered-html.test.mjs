import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const packageUrl = new URL("../package.json", import.meta.url);

test("the research profile contains its essential public information", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /Moosung Kim/);
  assert.match(page, /RHINO 2026/);
  assert.match(page, /Grid Complexity Lab/);
  assert.match(page, /rlaan33@kentech\.ac\.kr/);
  assert.match(page, /0009-0008-3371-724X/);
});

test("metadata includes the social-preview card", async () => {
  const layout = await readFile(layoutUrl, "utf8");

  assert.match(layout, /moosung-kim-og\.png/);
  assert.match(layout, /summary_large_image/);
});

test("starter-only dependencies are absent", async () => {
  const packageJson = await readFile(packageUrl, "utf8");

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(packageJson, /site-creator-vinext-starter/);
});

