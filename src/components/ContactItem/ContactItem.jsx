import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContactThunk } from 'store/ContactSlice/thunk';
export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const delele = id => {
    console.log(id);
    dispatch(deleteContactThunk(id));
  };

  const handlerClick = () => {
    delele(id);
  };

  return (
    <li className={css.item}>
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
