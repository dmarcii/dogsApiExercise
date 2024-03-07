import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { getDogBreeds } from "../state/api/breedSlice";
import { getDogBreedById } from "../state/api/dogSlice";
import { useNavigate } from "react-router-dom";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  useEffect,
  useState,
} from "react";

const List = () => {
  const breeds = useSelector((state: RootState) => state.breedApi.value);
  const dispatch = useDispatch<AppDispatch>();
  const [filteredBreed, setFilteredBreed] = useState("1");
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDogBreeds([]));
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredBreed(target.value);
  };

  const filterBreed = async () => {
    await dispatch(getDogBreedById(Number(filteredBreed)));
    navigate(`/details/${filteredBreed}`);
  };

  const goToDetails = async (id: any) => {
    await dispatch(getDogBreedById(Number(id)));
    navigate(`/details/${id}`);
  };

  return (
    <div className="container">
      <h1 className="title">Find your breed</h1>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="filter">
        <select name="breedsSelector" id="" onChange={handleChange}>
          {breeds.map((breed: { id: number; name: string }) => {
            return <option value={breed.id}>{breed.name}</option>;
          })}
        </select>
        <button onClick={filterBreed} className="button-filter">
          Find
        </button>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <h1 className="title-m">Common Breeds</h1>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <ul className="breeds-ul">
        {breeds
          .slice(0, 50)
          .map(
            (breed: {
              id: Key | null | undefined;
              name: ReactElement<any, string | JSXElementConstructor<any>>;
            }) => (
              <li key={breed.id}>
                <button
                  onClick={() => goToDetails(breed.id)}
                  className="breeds"
                >
                  {breed.name}
                </button>
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default List;
