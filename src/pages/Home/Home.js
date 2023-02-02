import { HomeParagraph, HomeSectionWrapper } from './Home.styled';
import { SlNotebook } from 'react-icons/sl';
import { FaUserPlus, FaUserEdit, FaUserMinus } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
// BiSearchAlt

export default function Home() {
  return (
    <HomeSectionWrapper>
      <h1>Welcome to Phonebook!</h1>

      <HomeParagraph>
        Everything you need to manage your contacts <SlNotebook size="32" />
      </HomeParagraph>
      <HomeParagraph>
        The application will help you quickly find <BiSearchAlt size="32" />
        the right contact and keep your address book in order.
      </HomeParagraph>
      <HomeParagraph>
        Contact management: creation <FaUserPlus size="32" />, modification{' '}
        <FaUserEdit size="32" />, deletion <FaUserMinus size="32" />
      </HomeParagraph>
    </HomeSectionWrapper>
  );
}
