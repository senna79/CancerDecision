import { NextResponse } from "next/server";
import {
  indexNowPriorityUrls,
  submitIndexNow,
} from "@/lib/seo/indexnow";

export const dynamic = "force-dynamic";

/**
 * POST /api/indexnow
 * Auth: Authorization: Bearer $INDEXNOW_SUBMIT_SECRET (or CRON_SECRET)
 * Optional JSON body: { "urls": ["https://www.cancernextstep.com/..."] }
 */
export async function POST(request: Request) {
  const secret =
    process.env.INDEXNOW_SUBMIT_SECRET || process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "INDEXNOW_SUBMIT_SECRET (or CRON_SECRET) is not configured" },
      { status: 503 }
    );
  }

  const auth = request.headers.get("authorization") ?? "";
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let urls = indexNowPriorityUrls();
  try {
    const body = (await request.json()) as { urls?: string[] };
    if (Array.isArray(body.urls) && body.urls.length > 0) {
      urls = body.urls;
    }
  } catch {
    // empty body → submit priority set
  }

  const result = await submitIndexNow(urls);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
