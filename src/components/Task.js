import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`Task${task.reminder ? ' reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <button className="BtnIcon" onClick={() => onDelete(task.id)}><FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
        /></button>
        
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
