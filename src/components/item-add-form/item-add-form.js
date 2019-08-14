import React, {Component} from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component{

    constructor() {

        super();

        this.state = {
            label: ''
        };

        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            })
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            });
        }

    }



    render(){

        return (

            <form className="item-add-form"
                  onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control d-flex"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary"
                >
                    Add item
                </button>
            </form>

        )
    }
};
