import { useRecoilValue } from 'recoil';
import totalSelector from '../recoil/selectors/totalSelector';

const Total = () => {
  const total = useRecoilValue(totalSelector);

  return (
    <div className="total">
      <div className="total_cost">
        <p>
          小計:{' '}
          <span className="total_cost_num">{total.subtotal}円（税込）</span>
        </p>
        <p>
          クーポン: <span className="totals_cost_num">{total.coupon}</span>
        </p>
        <p>
          合計: <span className="totals_cost_num">{total.total}円（税込）</span>
        </p>
      </div>
    </div>
  );
};

export default Total;
