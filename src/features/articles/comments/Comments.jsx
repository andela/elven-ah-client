import React from 'react';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import CommentReplies from './CommentReplies';
import CommentForm from './CommentForm';

/* eslint-disable react/no-array-index-key */
const Comments = ({ comment, replies }) => {
  const ownReplies = replies.filter(reply => (reply.parentId === comment.id));
  return (
    <React.Fragment>
      <div className="col-md-12 single-article-comment">
        <div className="media g-mb-30 media-comment">
          <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
            <div className="g-mb-15 single-article-name-container ">
              <img
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                src={comment.commenter.image}
                alt="Description"
              />
              <h5 className="single-article-comment-name g-color-gray-dark-v1 mb-0">
                <b>{comment.commenter.firstName} {comment.commenter.lastName}</b>
              </h5>
              <span className="single-article-comment-date g-color-gray-dark-v4 g-font-size-12">{moment(comment.createdAt).fromNow()}</span>
            </div>
            {!comment.parentId
              ? (
                <p>
                  {comment.body}
                </p>
              ) : false
            }
            <div className="row">
              <CommentForm
                formClass="single-article-comment"
                type="reply"
              />
            </div>
            {ownReplies.map(reply => (
              <CommentReplies
                key={reply.id}
                reply={reply}
              />
            ))}
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

Comments.propTypes = {
  comment: PropTypes.shape({}).isRequired,
  replies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Comments;
