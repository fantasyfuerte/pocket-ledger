import Footer from "@/components/footer";
import TransitionPage from "@/components/transition-page";
import TrackerApp from "./tracker";
import { Suspense } from "react";

function TrackingPage() {
  return (
    <div className="bg-backgroundPrimary px-3 min-h-screen">
      <TransitionPage />
      <Suspense fallback={<div>Loading...</div>}>
        <TrackerApp />
      </Suspense>
      <div className="flex flex-col justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default TrackingPage;
