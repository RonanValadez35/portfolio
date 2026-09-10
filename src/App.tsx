import { useState } from "react";
import { Bio } from "./components/Bio";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Roulette } from "./components/Roulette";
import { WorkExperience } from "./components/WorkExperience";

export default function App() {
  const [bankroll, setBankroll] = useState(12_450);

  return (
    <div className="site-shell">
      <Header bankroll={bankroll} />
      <main id="top">
        <Bio />
        <Roulette bankroll={bankroll} setBankroll={setBankroll} />
        <WorkExperience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
