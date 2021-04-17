import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {//importing stuffs from redux store
    //console.log(state);
    return {
        dishes: state.dishes,
        comments: state.comments,
        sample: state.sample
    }
}

class Home extends Component {
    componentDidMount() {
        console.log("Home Props: ", this.props);
        this.props.dispatch(
            {
                type: "TEST",
                str: "Not Home"

            }
        )
    }
    componentDidUpdate() {
        console.log("Home Props Updated: ", this.props);
    }
    render() {

        document.title = "Bohubrihi Restaurant";
        return (
            <div>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);