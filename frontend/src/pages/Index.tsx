import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Library from "@/components/Library";
import Goals from "@/components/Goals";
import Rewards from "@/components/Rewards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="dashboard">
          <Dashboard />
        </section>
        <section id="library">
          <Library />
        </section>
        <section id="goals">
          <Goals />
        </section>
        <section id="rewards">
          <Rewards />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
