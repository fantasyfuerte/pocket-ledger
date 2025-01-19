import TransitionPage from "@/components/transition-page";
import TrackerApp from "./tracker";

function TrackingPage() {
  return (
    <div className="bg-backgroundPrimary h-screen">
      <TransitionPage />
      <TrackerApp />
    </div>
  );
}

export default TrackingPage;
