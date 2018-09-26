import React from 'react';
import moment from 'moment';
import { PropTypes } from 'prop-types';


/* eslint-disable react/no-array-index-key */
const CommentReplies = ({ reply }) => (
  <React.Fragment>
    <div className="col-md-12 single-article-comment-response">
      <div className="media g-mb-30 media-comment">
        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
          <div className="g-mb-15 single-article-name-container ">
            <img
              className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
              src={reply.commenter.image}
              alt="commenter"
            />
            <h5 className="single-article-comment-name g-color-gray-dark-v1 mb-0">
              <b>{reply.commenter.firstName} {reply.commenter.lastName}</b>
            </h5>
            <span className="single-article-comment-date g-color-gray-dark-v4 g-font-size-12">{moment(reply.createdAt).fromNow()}</span>
          </div>
          <p>
            {reply.body}
          </p>
        </div>

      </div>
    </div>
  </React.Fragment>
);
CommentReplies.propTypes = {
  reply: PropTypes.shape({}).isRequired,
};

export default CommentReplies;
