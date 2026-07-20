import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PrepSheetFab } from "@/components/prep-sheet/prep-sheet-fab";
import { PrepSheetProvider } from "@/components/prep-sheet/prep-sheet-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationWebSiteJsonLd } from "@/lib/seo/json-ld";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrepSheetProvider>
      <JsonLd data={organizationWebSiteJsonLd()} />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <PrepSheetFab />
      <Analytics />
      <SpeedInsights />
    </PrepSheetProvider>
  );
}
