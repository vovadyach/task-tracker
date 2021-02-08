import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='Btn'
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
  text: 'Button',
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
