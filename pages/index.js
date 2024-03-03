import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
I am Min Naing Ko Ko, a Full Stack Web Developer in Myanmar. Pursuing a remote position, my drive stems from a love for technology, the appeal of high income, remote work flexibility, and a continuous commitment to learning. My ultimate goal is to positively impact lives globally.
</p>`;

const Index = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-1-colors.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/man5_big.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Min Naing Ko Ko</div>
          {/*<div className="subtitle">Web Designer</div>*/}
          <div className="subtitle subtitle-typed">
            <TypingAnimation />
          </div>
          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/minnaingkoko/">
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/minnaing.koko.3">
              <span className="fa fa-facebook" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/minnaingkoko">
              <span className="fa fa-github" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          <Pricing />
          <FunFact />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index;
