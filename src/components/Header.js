import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e.target);
  };

  return (
    <header className="Header">
      <h1>{title}</h1>
      <Button color="#ccc" text="Add" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header