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
      <section id="how-to-use" className="flex flex-col items-center justify-center pt-4 p-3 h-screen gap-7 bg-middleColor">
        <h4 className="text-backgroundPrimary font-bold text-xl">How to use</h4>
        <div className="text-center text-backgroundPrimary/90 flex flex-col gap-3 text-lg font-semibold">
          <p>Add your incomes and expenses to track your finances</p>
          <p>
            Incomes should be positive numbers and expenses should be negative
          </p>
          <p>You could see the history of transactions below the chart</p>
          <p>So now...</p>
          <Link
            href="tracker"
            className="bg-cta font-semibold text-backgroundPrimary px-4 py-2 rounded-3xl text-lg active:bg-cta/65 w-fit self-center shadow-xl shadow-backgroundPrimary/45 mt-2"
          >
            Get Started
          </Link>
        </div>
      </section>
      <div className="bg-middleColor py-4 px-2">
        <Footer />
      </div>
    </main>
  );
}
