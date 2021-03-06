import { useRecoilValue } from 'recoil';
import { booksData } from '../data';
import { cartState } from '../recoil/atoms';
import { Coupon, Total } from './';

const Cart = () => {
  const cart = useRecoilValue(cartState);

  return (
    <div className="cart_container">
      {Object.keys(cart).length === 0 ? (
        <p>カートに商品が入っていません</p>
      ) : (
        <>
          <ul className="cart_items">
            {Object.entries(cart).map(([id, quantity]) => (
              <li key={id}>
                {booksData[id].title} x{' '}
                <span className="cart_quantity">{quantity}</span>
              </li>
            ))}
          </ul>
          <Coupon />
          <Total />
        </>
      )}
    </div>
  );
};

export default Cart;
