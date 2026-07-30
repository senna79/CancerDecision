/**
 * Submit priority URLs to IndexNow (Bing + participating engines).
 * Usage: npx tsx scripts/submit-indexnow.ts
 */

process.env.NEXT_PUBLIC_SITE_URL ??= "https://www.cancernextstep.com";

async function main() {
  const {
    INDEXNOW_KEY,
    indexNowKeyLocation,
    submitIndexNow,
  } = await import("../lib/seo/indexnow");

  console.log("IndexNow key:", INDEXNOW_KEY);
  console.log("Key location:", indexNowKeyLocation());

  const result = await submitIndexNow();
  console.log(result);
  if (!result.ok) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
