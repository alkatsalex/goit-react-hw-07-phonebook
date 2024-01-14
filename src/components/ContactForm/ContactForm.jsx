import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from 'store/ContactSlice/ContactSlice';
import { selectContacts } from 'store/selectors';

function ContactForm() {
  const { contacts } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const number = e.target.number.value;
    const name = e.target.name.value;
    const contact = {
      name,
      number,
    };
    const isDublicated = contacts.find(
      e => e.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isDublicated) {
      alert('This contact is already added');
      return;
    } else {
      dispatch(addContact(contact));
    }

    e.target.number.value = '';
    e.target.name.value = '';
  };
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">
            <h3 className={css.title}>Name</h3>
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            // value={name}
            required
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telInput">
            <h3 className={css.title}>Number</h3>
          </label>
          <input
            className={css.input}
            type="tel"
            name="number"
            // value={number}
            required
            // onChange={handleChange}
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact 📲
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
