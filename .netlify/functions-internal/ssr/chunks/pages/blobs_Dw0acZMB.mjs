import { getStore } from '@netlify/blobs';
import blobshape from 'blobshape';
import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';

function getNetlifyContext() {
  return process.env.CONTEXT;
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function uniqueName() {
  const config = {
    dictionaries: [adjectives, animals],
    separator: "-",
    length: 2
  };
  return uniqueNamesGenerator(config) + "-" + randomInt(100, 999);
}
function generateBlob(parameters) {
  const gradientColors = [
    ["#2E3192", "#1BFFFF"],
    ["#93A5CF", "#E4EfE9"],
    ["#BFF098", "#6FD6FF"],
    ["#A1C4FD", "#C2E9FB"],
    ["#11998E", "#38EF7D"],
    ["#D8B5FF", "#1EAE98"]
  ];
  parameters = {
    seed: null,
    size: 512,
    edges: randomInt(3, 20),
    growth: randomInt(2, 9),
    name: uniqueName(),
    colors: gradientColors[randomInt(0, gradientColors.length - 1)],
    ...parameters
  };
  const { path: svgPath, seedValue: seed } = blobshape(parameters);
  return { parameters: { ...parameters, seed }, svgPath };
}
function cacheHeaders(maxAgeDays = 365, cacheTags) {
  const headers = {
    "Cache-Control": "public, max-age=0, must-revalidate",
    // Tell browsers to always revalidate
    "Netlify-CDN-Cache-Control": `public, max-age=${maxAgeDays * 86400}, must-revalidate`
    // Tells Netlify CDN the max allwed cache duration
  };
  if (cacheTags?.length > 0)
    headers["Cache-Tag"] = cacheTags.join(",");
  return headers;
}
const uploadDisabled = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.PUBLIC_DISABLE_UPLOADS?.toLowerCase() === "true";

const prerender = false;
const POST = async ({ request }) => {
  if (uploadDisabled)
    throw new Error("Sorry, uploads are disabled");
  const parameters = await request.json();
  const blobStore = getStore("shapes");
  const key = parameters.name;
  await blobStore.setJSON(key, parameters);
  return new Response(
    JSON.stringify({
      message: `Stored shape "${key}"`
    })
  );
};
const GET = async ({ request }) => {
  try {
    const blobStore = getStore({ name: "shapes", consistency: "strong" });
    const data = await blobStore.list();
    const keys = data.blobs.map(({ key }) => key);
    return new Response(
      JSON.stringify({
        keys
      })
    );
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        keys: [],
        error: "Failed listing blobs"
      })
    );
  }
};

const blobs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { getNetlifyContext as a, blobs as b, cacheHeaders as c, generateBlob as g, randomInt as r, uploadDisabled as u };
