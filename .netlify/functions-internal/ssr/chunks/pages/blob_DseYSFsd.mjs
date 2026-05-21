import { getStore } from '@netlify/blobs';

const prerender = false;
const GET = async (context) => {
  const urlParams = new URL(context.url);
  const key = urlParams.searchParams.get("key");
  if (!key) {
    return new Response("Bad Request", { status: 400 });
  }
  const blobStore = getStore("shapes");
  const blob = await blobStore.get(key, { type: "json" });
  return new Response(
    JSON.stringify({
      blob
    })
  );
};

export { GET, prerender };
