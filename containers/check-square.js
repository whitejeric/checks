import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBoardState, getSquareIndex} from '../actions/index';

class CheckSquare extends React.Component {
  handleClick(){
    this.props.getSquareIndex(this.props.num);
  }

  render(){
    return(
      <div className='checkSquare' onClick={this.handleClick.bind(this)}>
        {this.props.num}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getSquareIndex, getBoardState}, dispatch);
}

export default connect(null, mapDispatchToProps)(CheckSquare);
