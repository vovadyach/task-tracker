import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className='Header'>
      <h1>{title}</h1>
      <Button
        color={showAddTask ? '#ff0800' : '#008000'}
        text={showAddTask ? 'Hide Form' : 'Show Form'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
