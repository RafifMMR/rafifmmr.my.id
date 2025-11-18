import dynamic from "next/dynamic";

import BootLoader from "@/components/boot-loader";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <BootLoader>
      <ScrollProgress className="top-0 z-50" />
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
      <SiteFooter />
      <ScrollTop />
    </BootLoader>
  );
}
