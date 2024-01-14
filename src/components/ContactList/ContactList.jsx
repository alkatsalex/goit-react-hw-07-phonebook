import ContactItem from 'components/ContactItem/ContactItem.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selectors';

export default function ContactList() {
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2 className={css.title}>Contacts:</h2>
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </div>
  );
}
