import TransitionPage from "@/components/transition-page";
import TrackerApp from "./tracker";

function TrackingPage() {
  return (
    <div className="bg-backgroundPrimary h-screen p-3">
      <TransitionPage />
      <TrackerApp />
    </div>
  );
}

export default TrackingPage;
