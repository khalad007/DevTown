import banner from "../../assets/notes-flatline.svg";

const Banner = () => {
  return (
    <div className="bg-gray60 min-h-[calc(100vh-61.5px)] flex items-center">
      {/* banner */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-10 lg:p-0">
        {/* Banner moto */}
        <div className="space-y-5 p-2 lg:p-0">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor-placement="top-bottom"
              className="text-[#4F6F52] text-xl font-medium"
          >
            Buy Latest Mobile
          </p>
          <h2
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-anchor-placement="top-bottom"
            className="text-5xl font-bold leading-[80px]"
          >
            Empowering Your Mobile Experience,  <br />
            One Device at a Time! <br></br>
            <span className="text-[#4F6F52]">m Shop.</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
            className="text-[#4F6F52]"
          >
            Your mobile destination for cutting-edge tech and unbeatable deals.
           
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
            className="py-2 px-4 text-white bg-green-dark rounded-lg"
          >
            Let{"'"}s Explore
          </button>
        </div>
        {/* banner image */}
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
          className="max-w-2xl"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
