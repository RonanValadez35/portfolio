import { Bio } from "./components/Bio";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { WorkExperience } from "./components/WorkExperience";

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <Bio />
        <WorkExperience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
