import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../../css/loader.css";
import Loader from "react-loader-spinner";
export const Puff = () => {
  return (
    <Loader
      type="Puff"
      color="#20639b"
      height={90}
      width={90}
      className="puff-loader"
    />
  );
};

export const Dots = () => {
  return <Loader type="ThreeDots" color="#fff" height={10} width={40} />;
};
