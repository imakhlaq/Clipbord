import logo from "../images/logo.svg";
const Hero = (props) => {
  return (
    <section aria-details="HeroSection">
      <div className="section-con mb-40 px-10 pt-16">
        <img src={logo} alt="logo" className="mx-auto my-16" />
        <h3>A history of everything you copy</h3>
        <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          consequatur corrupti? Nostrum eaque deleniti
        </p>
        <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row w-full justify-center items-center">
          <a
            href="google"
            className="text-xl text-white bg-strongCyan px-20 py-4 rounded-full duration-200 hover:opacity-80 "
          >
            Download for iOS
          </a>
          <a
            href="google"
            className="text-xl text-white bg-lightBlue px-20 py-4 rounded-full duration-200 hover:opacity-80 "
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
