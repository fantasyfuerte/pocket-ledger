import Footer from "@/components/footer";
import TransitionPage from "@/components/transition-page";
import TrackerApp from "./tracker";

function TrackingPage() {
  return (
    <div className="bg-backgroundPrimary px-3 min-h-screen">
      <TransitionPage />
      <TrackerApp />
      <div className="flex flex-col justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default TrackingPage;
