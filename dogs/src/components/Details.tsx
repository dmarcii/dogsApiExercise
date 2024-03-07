import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const Details = () => {
  const dogbreed = useSelector((state: RootState) => state.dogApi.value);

  return (
    <div className="container-details">
      <div className="info">
        <h1 className="title">{dogbreed.name}</h1>
        <div className="spacer"></div>
        <p className="info-text">
          {" "}
          <span className="bold">Good for:</span> {dogbreed.bred_for}
        </p>
        <p className="info-text">
          <span className="bold">Life span:</span> {dogbreed.life_span}
        </p>
        <p className="info-text">
          <span className="bold">Temperament:</span> {dogbreed.temperament}
        </p>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <Link className="button-back" to={`/`}>
          Back
        </Link>
      </div>
      <div className="photo-container">
        <img className="photo" src={dogbreed.url} alt={dogbreed.name} />
      </div>
    </div>
  );
};

export default Details;
