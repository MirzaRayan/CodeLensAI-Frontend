import logo from '../assets/CodeLensAI-icon.svg';

const LogoLoader = ({ size = "w-12 h-12" }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logo}
        alt="loading"
        className={`${size} animate-pulse scale-110`}
      />
    </div>
  );
};

export default LogoLoader;