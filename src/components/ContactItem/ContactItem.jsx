import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'store/ContactSlice/ContactSlice';
export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handlerClick = () => {
    console.log('id :>> ', id);
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item} id={id}>
      <span>
        <p className={css.name}>{name}</p>
        <p className={css.tel}>{number}</p>
      </span>
      <button className={css.btn} onClick={handlerClick}>
        Delete 🗑
      </button>
    </li>
  );
}
