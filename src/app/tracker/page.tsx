import Footer from "@/components/footer";
import TransitionPage from "@/components/transition-page";
import TrackerApp from "./tracker";

function TrackingPage() {
  return (
    <div className="bg-backgroundPrimary px-3 min-h-screen">
      <TransitionPage />
      <TrackerApp />
      <div className="h-[150px] mt-10 flex flex-col justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default TrackingPage;
