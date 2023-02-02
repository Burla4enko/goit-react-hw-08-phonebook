import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts-and-filtering/filterSlice';
import {
  selectContacts,
  selectFilter,
} from 'redux/contacts-and-filtering/selectors';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <>
      {contacts.length > 0 && (
        <FilterLabel>
          Find contacts by name
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
        </FilterLabel>
      )}
    </>
  );
};
