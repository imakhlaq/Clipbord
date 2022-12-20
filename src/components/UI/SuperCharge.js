import blacklist from "../images/icon-blacklist.svg";

const SuperCharge = () => {
  return (
    <section>
      <div className="section-con my-20 space-y-4">
        <h3>Supercahrge your workflow</h3>
        <p className="max-w-lg text-xl text-grayishBlue mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row space-y-16 md:space-y-0 md:space-x-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-5">
          <img src={blacklist} alt="" className="mb-6" />
        </div>
      </div>
    </section>
  );
};

export default SuperCharge;
