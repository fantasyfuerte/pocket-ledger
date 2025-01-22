"use client";

import TransitionPage from "@/components/transition-page";
import dynamic from "next/dynamic";

const TrackerApp = dynamic(() => import("./tracker"), { ssr: false });

function TrackingPage() {
  return (
    <div className="bg-backgroundPrimary px-3 pb-10 min-h-screen">
      <TransitionPage />
      <TrackerApp />
    </div>
  );
}

export default TrackingPage;
