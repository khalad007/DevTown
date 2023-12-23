import banner from "../../assets/checklist-flatline.svg";
import { IoMdArrowRoundForward } from "react-icons/io";

const PeopleFor = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row-reverse justify-around items-center my-24">
      {/* Banner moto */}
      <div className="space-y-5 p-2 lg:p-0">
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="text-green-medium text-xl font-medium"
        >
          For every one 
        </p>
        <h2
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          className="text-5xl font-bold leading-[80px]"
        >
          Our
          <span className="text-green-fade "> Brand</span>
        </h2>
        <div className="space-y-4">
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-anchor-placement="top-bottom"
            className="flex text-2xl gap-2"
          >
            <IoMdArrowRoundForward></IoMdArrowRoundForward>Samsung
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
            className="flex text-2xl gap-2"
          >
            <IoMdArrowRoundForward></IoMdArrowRoundForward>iPhone
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-anchor-placement="top-bottom"
            className="flex text-2xl gap-2"
          >
            <IoMdArrowRoundForward></IoMdArrowRoundForward>Vivo
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
            className="flex text-2xl gap-2"
          >
            <IoMdArrowRoundForward></IoMdArrowRoundForward>Oppo
          </p>
        </div>
      </div>
      {/* banner image */}
      <img
        data-aos="fade-up"
        data-aos-delay="450"
        data-aos-anchor-placement="top-bottom"
        className="max-w-2xl"
        src={banner}
        alt=""
      />
    </div>
  );
};

export default PeopleFor;
