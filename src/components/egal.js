import PropTypes from 'prop-types';

function Egal({ symbole, color }) {
  return <button className={`egals ${color}`} type="button">{symbole}</button>;
}

Egal.propTypes = {
  symbole: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
};

export default Egal;
