import PropTypes from 'prop-types';

function Sign({ symbole, color, func }) {
  return <input onClick={(e) => func(e)} className={`signs ${color}`} type="button" value={symbole} />;
}

Sign.propTypes = {
  symbole: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
  func: PropTypes.node.isRequired,
};

export default Sign;
