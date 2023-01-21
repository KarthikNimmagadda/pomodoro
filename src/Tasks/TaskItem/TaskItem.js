import classes from './TaskItem.module.css'

const TaskItem = (props) => {

    return <li className={classes.task}>
                <h3>{props.task.name}</h3>
                <div className={classes.price}>{props.task.completionTime}</div>
        </li>
}

export default TaskItem