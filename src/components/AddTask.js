import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setError(true);
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder('');
    setError(false);
  };

  return (
    <form className="AddForm" onSubmit={onSubmit}>
      <div className={`FormControl${error ? ' has-error' : ''}`}>
        <label htmlFor="task">Task</label>
        <input id="task" placeholder="Add Task" name="task" type="text" onChange={(e) => setText(e.target.value)} value={text} />
        {error && <small className="ErrorMessage">This field is required</small>}
      </div>

      <div className="FormControl">
        <label htmlFor="dayTime">Day & Time</label>
        <input id="dayTime" name="dayTime" onChange={(e) => setDay(e.target.value)} placeholder="Add Day & Time" type="text" value={day} />
      </div>

      <div className="FormControl FormControl--check">
        <label htmlFor="reminder">Reminder</label>
        <input id="reminder" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} name="reminder" type="checkbox" />
      </div>

      <input type="submit" className="Btn Btn--block" />
    </form>
  )
}

export default AddTask;
