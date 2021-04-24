import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actionCreators';

const mapStateToProps = state => {//importing stuffs from redux store

    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {//Eta diye joto dispatching er function ase amra shob ekjaygay korte parbo
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        console.log(dish);
        this.setState(
            {
                selectedDish: dish,
                modalOpen: !this.state.modalOpen
            }
        );
    }

    toggleModal = () => {
        this.setState(
            {
                modalOpen: !this.state.modalOpen
            }
        )
    }

    render() {

        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    onDishSelect={() => this.onDishSelect(item)} />
            );
        })

        let dishdetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id)//Arrow function benefits: return korar thakle kichu return likha lagena, emne boshay dilei hoi
            dishdetail = <DishDetail dish={this.state.selectedDish} comments={comments} addComment={this.props.addComment} />
        }
        return (
            <div className='container'>
                <div className='row'>
                    <CardColumns>{menu}</CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalBody>
                            <Button color='secondary' onClick={this.toggleModal} close /><br />
                            {dishdetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color='secondary' onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);