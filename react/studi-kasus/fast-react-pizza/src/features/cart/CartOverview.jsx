import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-stone-900 text-stone-200 uppercase">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="btn-pizza">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
