import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getBoardState} from '../actions/index';

import CheckSquare from './check-square';


class CheckBoard extends Component{
  handleClick(){
    this.props.getBoardState();
  }
  render(){
    return(
      <div className='checkBoard'>
        <h1 className='appHeader'>Checkboard</h1>
        <table className='checkTable'>
          <tbody>
            <tr>
              <td><CheckSquare num='0' /></td>
              <td><CheckSquare num='1'/></td>
              <td><CheckSquare num='2'/></td>
            </tr>
            <tr>
              <td><CheckSquare num='3'/></td>
              <td><CheckSquare num='4'/></td>
              <td><CheckSquare num='5'/></td>
            </tr>
            <tr>
              <td><CheckSquare num='6'/></td>
              <td><CheckSquare num='7'/></td>
              <td><CheckSquare num='8'/></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {board : state.board};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getBoardState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoard);
