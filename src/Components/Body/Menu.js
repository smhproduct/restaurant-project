import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../../redux/actionCreators';
import Loading from './Loading';

const mapStateToProps = state => {//importing stuffs from redux store

    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {//Eta diye joto dispatching er function ase amra shob ekjaygay korte parbo
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes())//fetchdishes jehetu duita dispatch func niye kaaj korse, param lagenai, so ekhaneo dinai
        //ektu niche jeye compdidmount ar <Menuitem/> compo check koro must
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

    componentDidMount() {//er agey addcomment ke jemne amra CommentForm.js e handlesubmit e use korsi, ekhane submit bolte kichu nai, so fetch dishes ke deploy korte hole mount er por por korte hobe, ejonnoi eta use korsi
        this.props.fetchDishes();
    }

    render() {

        document.title = "Menu";

        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {//duibar keno dishes likhsi, janar jonno reducer.js e jao
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);