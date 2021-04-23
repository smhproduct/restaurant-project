import React, { Component } from "react";
import { Form, Button, Input } from 'reactstrap';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }


    handleSubmit = event => {
        //console.log(this.state);
        this.props.addComment(this.props.dishId, this.state.rating, this.state.author, this.state.comment);

        this.setState({
            author: '',
            rating: '',
            comment: ''
        });

        event.preventDefault();
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h4 style={{ margin: '20px 0px' }}>Share Your Experience:</h4>
                    <Input type='text' name='author' value={this.state.author} placeholder='Your Name' onChange={this.handleInputChange} required /><br />
                    <Input type='select' name='rating' onChange={this.handleInputChange} value={this.state.rating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input><br />
                    <Input type='textarea' name='comment' value={this.state.comment} onChange={this.handleInputChange} placeholder='Your Comment' required>
                    </Input><br />
                    <Button type='submit'>Submit Comment</Button>

                </Form>
            </div>
        );
    }
}

export default CommentForm;