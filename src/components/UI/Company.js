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
    </section>
  );
};

export default Company;
