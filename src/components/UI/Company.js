import google from "../images/logo-google.png";
import microsoft from "../images/logo-microsoft.png";
import ibm from "../images/logo-ibm.png";
import hp from "../images/logo-hp.png";

const Company = () => {
  return (
    <section>
      <div className="section-con my-20 flex flex-col md:flex-row space-y-20 md:space-x-20 md:space-y-0 justify-center items-center">
        <img src={google} alt="" className="max-w-md" />
        <img src={microsoft} alt="" className="max-w-md" />
        <img src={ibm} alt="" className="max-w-md" />
        <img src={hp} alt="" className="max-w-md" />
      </div>
      <h3>Clipboard for iOS and MacOS</h3>
      <p className="text-xl text-grayishBlue mt-3 max-w-3xl text-center p-2 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque non
        consectetur quidem tempore voluptate, est consequuntur error adipisci
        nam magni repellat ipsa sequi tenetur, ipsum optio saepe, explicabo
        nostrum voluptas!
      </p>
      <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row w-full justify-center items-center mt-10">
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
    </section>
  );
};

export default Company;
