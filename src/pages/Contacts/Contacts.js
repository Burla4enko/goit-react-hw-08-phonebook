import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { ContactSectionWrapper, ContactsTitle } from './Contacts.styled';

export default function Contacts() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    isLoggedIn && (
      <ContactSectionWrapper>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
        </div>
        <div>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          <ContactList />
        </div>
      </ContactSectionWrapper>
    )
  );
}
