import axios from 'axios';
import { Alert } from 'reactstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control, Errors, Form, actions } from 'react-redux-form';
import { Button, FormGroup, Label, Col } from 'reactstrap';
/* import { resetFeedbackForm } from '../../redux/actionCreators'; */
import * as actionTypes from '../../redux/actionTypes';
import { baseUrl } from '../../redux/baseUrl';


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

/* const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => dispatch(resetFeedbackForm)
    }
} */

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    state = {
        contactdisable: true,
        alertShow: false,
        alertText: null,
        alertType: null
    }
    handleSubmit = values => {
        axios.post(baseUrl + 'feedback', values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertText: "Submitted Successfully!",
                        alertType: 'success'
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false,
                        })
                    }, 2000)
                }
            })
            .catch(error => {
                this.setState({
                    alertShow: true,
                    alertText: error.message,
                    alertType: "danger"
                });
                setTimeout(() => {
                    this.setState({
                        alertShow: false,
                    })
                }, 2000)
            })
        this.props.resetFeedbackForm();

    }

    render() {

        document.title = "Contact";
        return (
            <div className='container'>
                <div className='row row-content' style={{ paddingLeft: "20px", textAlign: 'left' }}>

                    <div className='col-12'>
                        <h3>Send us your feedback!</h3>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                    </div>
                    <div className='col-12 col-md-7'>
                        <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>{/* WAIT BONDHU, ami kintu ekhane Form agey likhinai, agey LocalForm lekha lagsilo redux form creation er shomoy. But jehetu ami ekhon form ta REDUX STORE e dhukate chachhi, amar abar Form lekha lagse, jeta imported from redux-react-form, not reactstrap*/}
                            <FormGroup row>{/* ebhabe row ta lekha hoise mane row hochhe Formgroup er ekta prop, and eta bool value accept korbe */}
                                <Label htmlFor='firstname' md={2}>First Name:</Label>
                                <Col md={10}>
                                    <Control.text
                                        className='form-control'
                                        model='.firstname'
                                        name='firstname'
                                        placeholder='First Name'
                                        validators={{ required }} />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>{/* ebhabe row ta lekha hoise mane row hochhe Formgroup er ekta prop, and eta bool value accept korbe */}
                                <Label htmlFor='lastname' md={2}>Last Name:</Label>
                                <Col md={10}>
                                    <Control.text
                                        className='form-control'
                                        model='.lastname'
                                        name='lastname'
                                        placeholder='Last Name'
                                        validators={{ required }} />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>{/* ebhabe row ta lekha hoise mane row hochhe Formgroup er ekta prop, and eta bool value accept korbe */}
                                <Label htmlFor='telnum' md={2}>Contact Tel:</Label>
                                <Col md={10}>
                                    <Control.text
                                        className='form-control'
                                        model='.telnum'
                                        name='telnum'
                                        placeholder='Tel. Number'
                                        validators={{ required, isNumber }} />
                                    <Errors
                                        className='text-danger'
                                        model='.telnum'
                                        show='touched'
                                        messages={{ required: 'Required,', isNumber: ' Invalid Number!' }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>{/* ebhabe row ta lekha hoise mane row hochhe Formgroup er ekta prop, and eta bool value accept korbe */}
                                <Label htmlFor='email' md={2}>Email:</Label>
                                <Col md={10}>
                                    <Control.text
                                        className='form-control'
                                        model='.email'
                                        name='email'
                                        placeholder='Email'
                                        validators={{ required, validEmail }} />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required, ",
                                                validEmail: "Invalid Email!"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>{/* ebhabe row ta lekha hoise mane row hochhe Formgroup er ekta prop, and eta bool value accept korbe */}
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                onClick={() => { this.setState({ contactdisable: !this.state.contactdisable }) }}
                                                className='form-check-input'
                                                model='.agree'
                                                name='agree' /><strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        className='form-control'
                                        model='.contactType'
                                        name='contactType'
                                        disabled={{ valid: this.state.contactdisable }} /* disabled={!this.state.agree} */>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback:</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        className='form-control'
                                        model='.message'
                                        name='message'
                                        validators={{ required }} />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />

                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>Send FeedBack</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Contact);