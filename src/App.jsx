import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const skills = [
    "Python",
    "Machine Learning",
    "Data Structures",
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "HTML",
    "CSS"
  ];

  return (
    <>
      <Header name="Rudra Patel" />

      <div className="container">
        <About college="CHARUSAT University" />
        <Skills skills={skills} />
      </div>

      <Footer name="Rudra Patel" />
    </>
  );
}

export default App;