import { useDispatch } from 'react-redux';
import { appoitmentActions } from "../../../store/appointments/appointment-slice";

const Search = ({ title }) => {
  const dispatch = useDispatch();
  return (
    <div>
        <input
          type="text"
          className="input-search"
          placeholder={`Cerca un ${title}`}
          onChange={(e) => dispatch(appoitmentActions.handleTerm({term: e.target.value}))}
          name="query"
        />
    </div>
  );
};

export default Search;