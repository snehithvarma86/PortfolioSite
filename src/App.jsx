import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      <Header />
    </div>
  );
}

export default App;
