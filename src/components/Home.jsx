import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";

function Home() {
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

export default Home;
