import React, {Component} from 'react';

class AddTask extends Component {

    render() {
        return (
            <div className="lane" >
                <h2 className="lane-header">ADD TASK</h2>
                <form onSubmit={ (e) => {this.props.newSubmission(e)}}>
                    <label>
                        Title
                        <input  type="text" 
                                value={this.props.newTitle} 
                                onChange={(e) => {this.props.updateTask(e)}} />
                    </label>
                    <br/>
                    <label>
                        Description
                        <input  type="text" 
                                value={this.props.newDescription} 
                                onChange={(e) => {this.props.updateDescription(e)}} />
                  
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
};
export default AddTask;