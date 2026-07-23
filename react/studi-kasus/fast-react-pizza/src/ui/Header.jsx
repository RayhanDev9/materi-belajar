import { Link } from 'react-router-dom';
import SerchOrder from '../features/order/SerchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-3 py-4 uppercase">
      <Link to="/" className="tracking-widest">
        React Fast Pizza Co.
      </Link>
      <SerchOrder />
      <Username />
    </header>
  );
}

export default Header;
