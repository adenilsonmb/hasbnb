import { SearchForm } from "./SearchForm";

const Hero = () => {
  return (
    <div className="mx-auto">
      <div className="sm:absolute z-50 left-6 top-4">
        <SearchForm  />

      </div>
      
      <img
        className="hidden sm:block  z-0 mb-4 rounded-3xl "
        src="https://a0.muscache.com/im/pictures/hosting/Hosting-1802966532496625368/original/2d8491f7-9f17-4ee7-9c4f-8375874f733d.png?im_w=720"
        alt=""
      />
    </div>
  );
};

export default Hero;
