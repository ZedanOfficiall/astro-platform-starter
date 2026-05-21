import { purgeCache } from '@netlify/functions';

const prerender = false;
const POST = async ({ request }) => {
  const { tags } = await request.json();
  if (!Array.isArray(tags)) {
    return new Response(`Bad Request: expected tags attribute with array of strings in the body, got ${typeof tags}`, { status: 400 });
  }
  await purgeCache({ tags });
  return new Response(
    JSON.stringify({
      invalidated: tags
    })
  );
};

export { POST, prerender };
