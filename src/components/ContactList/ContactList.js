import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { ContactListLi, ContactListUl } from './ContactList.styled';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts-and-filtering/selectors';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts-and-filtering/operations';
// import { toast } from 'react-hot-toast';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactListUl>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactListLi key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              disabled={isLoading}
            >
              Delete
            </Button>
          </ContactListLi>
        );
      })}
    </ContactListUl>
  );
};
