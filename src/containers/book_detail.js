import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.activeBook){
            return <div>Select a Book</div>
        }
        return(
            <div>
                <h3>Details of the Book</h3>
                <div>Name: {this.props.activeBook.title}</div>
                <div>No of Pages: {this.props.activeBook.pages}</div>
            </div>
            
        );
    }
}

function mapStateToProps(state){
    return{
        activeBook: state.activeBook
    }
}
export default connect(mapStateToProps)(BookDetail)

