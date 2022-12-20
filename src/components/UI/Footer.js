import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import insta from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <section>
      <div className="section-con my-20">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <img src={logo} alt="" className="mb-6 md:mb-0" />
          <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-8 justify-center items-center">
            <a
              href="adad"
              className="text-lg text-grayishBlue hover:text-cyan-300"
            >
              FAQ
            </a>
            <a
              href="adad"
              className="text-lg text-grayishBlue hover:text-cyan-300"
            >
              About Us
            </a>
          </div>
          <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-8">
            <a
              href="adad"
              className="text-lg text-grayishBlue hover:text-cyan-300"
            >
              Guide To install
            </a>
            <a
              href="adad"
              className="text-lg text-grayishBlue hover:text-cyan-300"
            >
              Source Code
            </a>
          </div>
          <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-8">
            <a
              href="adad"
              className="text-lg text-grayishBlue hover:text-cyan-300"
            >
              Help
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center my-10 gap-6">
          <a href="www.twitter.com/imakhlaqXD">
            <img src={twitter} alt="" />
          </a>
          <a href="www.instagram.com/imakhlaqXD">
            <img src={insta} alt="" />
          </a>
          <a href="www.facebook.com/imakhlaqXD">
            <img src={fb} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
