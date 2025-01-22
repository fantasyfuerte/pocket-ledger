import TransitionPage from "@/components/transition-page";
import TrackerApp from "./tracker";

function TrackingPage() {
  return (
    <div className="bg-backgroundPrimary px-3 pb-10">
      <TransitionPage />
      <TrackerApp />
    </div>
  );
}

export default TrackingPage;
