import { useRecoilState } from 'recoil';
import cartState from '../recoil/atoms/cartState';

const Book = ({ id, data }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const addBookHandler = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  return (
    <div className="book">
      <div className="book_title">{data.title}</div>
      <div className="book_content">
        <div className="book_image_wrap">
          <img src={data.image} alt={data.title} />
        </div>
        <div>
          <p>{data.price}円（税抜）</p>
          <button onClick={() => addBookHandler(id)}>カートに追加</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
