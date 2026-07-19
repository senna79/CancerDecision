import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PrepSheetProvider } from "@/components/prep-sheet/prep-sheet-provider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrepSheetProvider>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </PrepSheetProvider>
  );
}
