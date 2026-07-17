import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
const motion = await readFile(new URL("../components/motion-system.tsx", import.meta.url), "utf8");
const canvas = await readFile(new URL("../components/neural-canvas.tsx", import.meta.url), "utf8");

test("landing exposes one primary heading and core product claims", () => {
  assert.equal((page.match(/<h1/g) ?? []).length, 1);
  for (const claim of ["48", "9", "33", "20", "Agentic Company Operating System"]) assert.match(page, new RegExp(claim));
});

test("landing includes navigation landmarks and accessible interactions", () => {
  for (const landmark of ["<header", "<main", "<footer", "aria-label", "aria-hidden"]) assert.match(page, new RegExp(landmark));
  assert.match(css, /prefers-reduced-motion/);
});

test("visual system uses black and orange tokens and responsive rules", () => {
  assert.match(css, /--orange:/);
  assert.match(css, /--black:/);
  assert.match(css, /@media\s*\(max-width:/);
  assert.match(css, /prefers-reduced-motion/);
  assert.doesNotMatch(css, /https:\/\//);
  assert.match(css, /Sora Variable/);
  assert.match(layout, /@fontsource-variable\/sora/);
});

test("motion system combines GSAP, Anime.js and an accessible canvas renderer", () => {
  assert.match(motion, /ScrollTrigger/);
  assert.match(page, /animejs/);
  assert.match(canvas, /requestAnimationFrame/);
  assert.match(canvas, /prefers-reduced-motion/);
  assert.match(page, /NeuralCanvas/);
});
