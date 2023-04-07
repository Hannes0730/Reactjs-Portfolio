import "./App.css";
import About from "./components/About";
import Certificates from "./components/Certificate";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ScrollToTopArrow from "./components/ScrollTop";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-col bg-gray-900 text-white justify-center md:px-20 py-10">
        <Home />
        <About />
        <Projects />
        <Certificates />
      </div>
      <ScrollToTopArrow />
    </div>
  );
}

export default App;
