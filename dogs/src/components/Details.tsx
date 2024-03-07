import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { getDogBreedById } from "../state/api/dogSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Details = () => {
  const dogbreed = useSelector((state: RootState) => state.dogApi.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h1>{dogbreed.name}</h1>
      <p>good for: {dogbreed.bred_for}</p>
      <p>life span: {dogbreed.life_span}</p>
      <p>Temperament: {dogbreed.temperament}</p>
      <img src={dogbreed.url} alt={dogbreed.name} />
    </div>
  );
};

export default Details;
