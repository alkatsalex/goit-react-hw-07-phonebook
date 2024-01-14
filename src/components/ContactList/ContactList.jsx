import ContactItem from 'components/ContactItem/ContactItem.jsx';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/ContactSlice/selectors';
import { selectFilter } from 'store/filterSlice/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'store/ContactSlice/thunk';

export default function ContactList() {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);
  console.log(items);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filteredContacts =
    items &&
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <h2 className={css.title}>Contacts:</h2>
      <ul>
        {filteredContacts &&
          filteredContacts.map(({ name, number, id }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
      </ul>
    </div>
  );
}
