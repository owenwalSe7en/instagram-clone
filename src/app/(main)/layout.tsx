import { BottomNav } from "@/components/bottom-nav";
import { TopHeader } from "@/components/top-header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-white">
      <TopHeader />
      <main className="mx-auto max-w-lg pb-20">{children}</main>
      <BottomNav />
    </div>
  );
}
