import React, { Component, PropTypes } from 'react';

import { Tasks } from '../api/tasks.js';

//Task component - represents a single to do item
export default class Task extends Component {
    toggleChecked() {
        Tasks.update(this.props.task._id, {
           $set: { checked: !this.props.task.checked }
        });
    }

    deleteTask() {
        Tasks.remove(this.props.task._id);
    }

    render() {
        const taskClassName = this.props.task.checked ? 'checked' : '';

        return (
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteTask.bind(this)}>
                    &times;
                </button>

                <input type="checkbox" checked={this.props.task.checked} onClick={this.toggleChecked.bind(this)}/>
                <span className="text">{this.props.task.text}</span>
            </li>
        );
    }
}

Task.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: PropTypes.object.isRequired,
};