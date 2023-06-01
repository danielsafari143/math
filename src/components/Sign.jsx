import PropTypes from 'prop-types';

function Sign({ symbole, color }) {
  return <button className={`signs ${color}`} type="button">{symbole}</button>;
}

Sign.propTypes = {
  symbole: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
};

export default Sign;
