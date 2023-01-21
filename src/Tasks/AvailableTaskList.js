import Card from '../UI/Card';
import classes from './AvailableTaskList.module.css';
import TaskItem from './TaskItem/TaskItem';

const AvailableTaskList = (props) => {
    const taskList = props.tasks.map(task => <TaskItem key={task.id} task={task}>{task}</TaskItem>);

    return <section className={classes.tasks}>
        <ul>
            {taskList}
        </ul>
    </section>
}

export default AvailableTaskList