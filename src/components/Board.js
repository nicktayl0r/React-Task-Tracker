import React, { Component } from 'react';

import tasks from './../seeds';
import Lane from './Lane'
import AddTask from './AddTask'

class Board extends Component {
    constructor(){
        super();
        this.state = tasks;
    }
    handleNewTaskUpdate = (e) => {
        e.preventDefault();
        this.setState({
            newTaskTitle: e.target.value
        })
    };
    handleNewTaskDescription = (e) => {
        e.preventDefault();
        this.setState({
            newTaskDescription: e.target.value
        })
    };

    updateTitle = (e) => {
        e.preventDefault();
        this.setState({
            newTaskTitle: e.target.value
        })

    };
    updateDescription = (e) => {
        e.preventDefault();
        this.setState({
            newTaskDescription: e.target.value
        })
    };
    updateState = (taskID, currentState) => {
		let possibleStates = ["backlog","in-progress", "complete", "archived"];
		let taskArrayClone = this.state.tasks.slice();
		let updatedTask = {
			id: taskID,
			title: taskArrayClone[taskID].title,
			description: taskArrayClone[taskID].description,
			progressLevel: taskArrayClone[taskID].progressLevel = possibleStates[possibleStates.indexOf(currentState) + 1]
		}
		taskArrayClone[taskID] = updatedTask;
		this.setState({tasks: taskArrayClone});
	};
    handleNewTaskSubmission = (e) => {
        e.preventDefault();

        let newTask = {
            id: this.state.currentID++,
            title: this.state.newTaskTitle,
            description: this.state.newTaskDescription,
            progressLevel: 'backlog'
        }
        this.setState((currentState) => {
            return {
                tasks: [...currentState.tasks, newTask],
                currentID: currentState.currentID++,
                newTaskTitle: "",
                newTaskDescription: ""
            }
        });
    }
    render() {
        return (
            <div className="board"> 
                <AddTask    updateTask={this.handleNewTaskUpdate} 
                            updateDescription={this.handleNewTaskDescription}
                            newSubmission={this.handleNewTaskSubmission}
                            newTitle={this.state.newTaskTitle}
                            newDescription={this.state.newTaskDescription}
                            />
                <Lane   tasks={this.state.tasks } 
                        laneProgressLevel="backlog"
                        updateState={this.updateState} 
                        />
                <Lane   tasks={this.state.tasks } 
                        laneProgressLevel="in-progress"
                        updateState={this.updateState} 
                        />
                <Lane   tasks={this.state.tasks } 
                        laneProgressLevel="complete"
                        updateState={this.updateState} 
                        />
            </div>
        )
    }
};

export default Board;