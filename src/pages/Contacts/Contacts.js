import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  AddContactWrapper,
  ContactsListWrapper,
  ContactSectionWrapper,
} from './Contacts.styled';

export default function Contacts() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    isLoggedIn && (
      <ContactSectionWrapper>
        <AddContactWrapper>
          <h1>Phonebook</h1>
          <ContactForm />
        </AddContactWrapper>
        <ContactsListWrapper>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </ContactsListWrapper>
      </ContactSectionWrapper>
    )
  );
}
