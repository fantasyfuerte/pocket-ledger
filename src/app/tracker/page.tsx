import TransitionPage from "@/components/transition-page";
import TrackerApp from "./tracker";

function TrackingPage() {
  return (
    <div className="bg-backgroundPrimary px-3 md:px-64 lg:px-80 xl:px-96">
      <TransitionPage />
      <TrackerApp />
    </div>
  );
}

export default TrackingPage;
