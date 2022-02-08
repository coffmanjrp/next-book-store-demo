import { useRecoilState } from 'recoil';
import { couponsData } from '../data';
import { couponState } from '../recoil/atoms';

const Coupon = () => {
  const [coupon, setCoupon] = useRecoilState(couponState);

  const setCouponHandler = (n) => {
    setCoupon(n);
  };

  return (
    <div className="coupon_selector">
      {couponsData.map((coupon, index) => (
        <button key={index} onClick={() => setCouponHandler(index)}>
          {coupon.name}
        </button>
      ))}
    </div>
  );
};

export default Coupon;
