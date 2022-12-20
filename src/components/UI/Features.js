import img from "../images/image-computer.png";
import img2 from "../images/image-devices.png";
const Features = () => {
  return (
    <>
      <section aria-details="features">
        <div className="section-con my-15">
          <div className=" flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2 md:pt-32">
              <img src={img} alt="" className="" />
            </div>

            <div className="flex flex-col mt-16 mb-24 text-xl md:pl-16 space-y-12 md:mb-60 justify-center items-center">
              <div>
                <h5 className="font-semibold text-2xl mb-2">iCloude Sync</h5>
                <p className="max-w-lg text-lg text-grayishBlue ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis minus sint culpa libero id ad?
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-2xl mb-2">iOS</h5>
                <p className="max-w-lg text-lg text-grayishBlue ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis minus sint culpa libero id ad?
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-2xl mb-2">Free</h5>
                <p className="max-w-lg text-lg text-grayishBlue ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis minus sint culpa libero id ad?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-con my-20 space-y-4">
          <h3>Acess Clip Anywhere</h3>
          <p className=" max-w-md text-grayishBlue mx-auto ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            nesciunt modi nisi explicabo quae sit repudiandae nostrum deleniti
            cumque fugit!
          </p>
          <img src={img2} alt="" className="mx-auto" />
        </div>
      </section>
    </>
  );
};

export default Features;
