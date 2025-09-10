import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import BackgroundFX from "@/components/site/BackgroundFX";

export default function SiteLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="relative">
        <BackgroundFX />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
