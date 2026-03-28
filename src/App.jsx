import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}

export default App;
