import React from 'react'
const Lane = (props) => {
    //filtering tasks for specific progress level
    let filteredTasks = props.tasks.filter((task) => task.progressLevel === props.laneProgressLevel);
    // mapping over filterd tasks to create an array of jsx dom nodes
    let taskList = filteredTasks.map(task => {
        return (
            <div className="task" key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => props.updateState(task.id, task.progressLevel)}>Promote</button>
            </div>
        )
    })

    return (
        <div className="lane">
            <h2 className="lane-header">{props.laneProgressLevel.toUpperCase()}</h2>
            {taskList}
        </div>
    )    
}

export default Lane;