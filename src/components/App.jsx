import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';

export function App() {
  return (
    <div
      style={{
        width: '370px',
        fontSize: 34,
        color: '#010101',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h1>
        Phone<span style={{ color: 'rgb(54, 96, 212)' }}>book</span>
      </h1>
      <ContactForm />
      <div
        style={{
          border: 'solid 2px rgb(11, 26, 68)',
          borderRadius: '24px',
          padding: '20px 16px',
          marginTop: '24px',
        }}
      >
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
