import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray60">
      <footer className="flex justify-center gap-10 items-center container mx-auto p-10 ">
        <aside
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
          <a className="text-4xl font-bold">
            m
            <span className="text-[#4F6F52]">Shop.</span>
          </a>
        </aside>
        <nav
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <header className="footer-title">Social</header>
          <div className=" text-2xl flex gap-4">
            <a href="https://github.com/khalad007">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/khaladshifullah/">
              <FaLinkedin />
            </a>
            <a></a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by Md Khalad Shifullah</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
