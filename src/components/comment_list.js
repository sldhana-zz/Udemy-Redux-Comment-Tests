import React from 'react';
import { connect } from 'react-redux';

//container comment - doesn't mean it has to be extended from React component

const CommentList = (props) => {
  const list = props.comments.map(comment => {
    return <li key={comment}>{comment}</li>;
  });

  return (
    <ul className="commentList">
      {list}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
}


export default connect(mapStateToProps)(CommentList);
