import Footer from "@/components/footer";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <section className="flex flex-col items-center justify-center p-5 h-[85vh] gap-7 bg-gradient-principal">
        <h2 className="text-3xl font-semibold text-center text-primary">
          Track Your Finances with Ease, Empower Your Future.
        </h2>
        <Link
          href="tracker"
          className="bg-cta font-semibold text-backgroundPrimary px-4 py-2 rounded-3xl text-lg active:bg-cta/65"
        >
          Get Started
        </Link>
      </section>
      <section className="flex flex-col items-center justify-center p-5 h-[90vh] gap-7 bg-middleColor"></section>
      <div className="bg-middleColor py-4 px-2">
        <Footer />
      </div>
    </main>
  );
}
