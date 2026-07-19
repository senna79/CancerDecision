import { resetStore } from "../lib/db/store";

async function main() {
  const store = await resetStore();
  const q = store.questions.find(
    (x) =>
      x.slug === "what-are-my-options-if-lung-cancer-spreads-to-the-brain"
  );
  console.log(q ? `OK ${q.slug}` : "MISSING");
  console.log("questions", store.questions.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
