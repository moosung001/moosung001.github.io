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
  assert.match(page, /Poster preview/);
  assert.match(page, /In progress/);
  assert.match(page, /Grid Complexity Lab/);
  assert.match(page, /Korean power grid/);
  assert.match(page, /Power Grid Swing Simulator/);
  assert.match(page, /rlaan33@kentech\.ac\.kr/);
  assert.match(page, /0009-0008-3371-724X/);
});

test("metadata is factual and does not use the old slogan", async () => {
  const layout = await readFile(layoutUrl, "utf8");

  assert.match(layout, /title: "Moosung Kim"/);
  assert.doesNotMatch(layout, /Finding what survives/);
});

test("starter-only dependencies are absent", async () => {
  const packageJson = await readFile(packageUrl, "utf8");

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(packageJson, /site-creator-vinext-starter/);
});
