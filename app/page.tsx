import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="w-full px-5 mobile-l:px-6 sm:px-10 lg:px-24 xl:px-16">
      <Introduction />
      <AboutMe />
      <Projects/>
      <Contact/>
    </div>
  );
}
