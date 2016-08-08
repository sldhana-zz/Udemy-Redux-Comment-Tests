import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

//controlled input
class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      comment: ''
    });
  }

  render() {
    return(
      <form className="commentBox"
        onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}>
        </textarea>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(null, mapDispatchToProps)(CommentBox);
//similar to
//export default connect(null, actions)(CommentBox);
