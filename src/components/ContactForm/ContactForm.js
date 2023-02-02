import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact } from 'redux/contacts-and-filtering/operations';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts-and-filtering/selectors';
import {
  ContactFormStyled,
  Input,
  MessageSpan,
  Button,
  Label,
} from './ContactForm.styled';
import { validationScheme } from 'utils/validationSchema';
import { isInContact } from 'utils/isInContact';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };

  const onSubmit = ({ name, number }, { resetForm }) => {
    if (isInContact(contacts, name).length > 0) {
      return toast.error(`${name} is already in the contact list`);
    }
    try {
      dispatch(addContact({ name, number }));
      toast.success(`New contact ${name} successfully added`);
      resetForm();
    } catch (e) {
      return e.message;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationScheme}
    >
      <ContactFormStyled autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <MessageSpan name="name" component={'span'} />
        </Label>

        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <MessageSpan name="number" component={'span'} />
        </Label>

        <Button type="submit" disabled={isLoading}>
          Add contact
        </Button>
      </ContactFormStyled>
    </Formik>
  );
};
