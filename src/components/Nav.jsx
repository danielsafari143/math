import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nave">
    <h1>Math Magicians</h1>
    <nav>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="calculator">Calculator</Link>
      <Link className="link" to="quote">Quote</Link>
    </nav>
  </div>
);

export default Nav;
