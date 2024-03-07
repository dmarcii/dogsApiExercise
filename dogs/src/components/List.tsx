import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { getDogBreeds } from "../state/api/breedSlice";
import { getDogBreedById } from "../state/api/dogSlice";
import { useNavigate } from "react-router-dom";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";

const List = () => {
  const breeds = useSelector((state: RootState) => state.breedApi.value);
  const dispatch = useDispatch<AppDispatch>();
  const [filteredBreed, setFilteredBreed] = useState("");
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
    <div>
      <div>
        <select name="breedsSelector" id="" onChange={handleChange}>
          {breeds.map((breed: { id: number; name: string }) => {
            return <option value={breed.id}>{breed.name}</option>;
          })}
        </select>
        <button onClick={filterBreed}>Filter</button>
      </div>
      <ul>
        {breeds
          .slice(0, 10)
          .map(
            (breed: {
              id: Key | null | undefined;
              name: ReactElement<any, string | JSXElementConstructor<any>>;
            }) => (
              <li key={breed.id}>
                <button onClick={() => goToDetails(breed.id)}>
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
