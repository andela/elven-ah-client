import React from 'react';


/* eslint-disable react/no-array-index-key */
const CommentReplyForm = () => (
  <React.Fragment>
    <div className="col-12 col-md-12">
      <div className="widget-area no-padding blank">
        <div className="status-upload-reply">
          <form className="single-article-comment-reply-form">
            <textarea placeholder="Reply comment..." />

            <button type="submit" className="btn single-article-comment-button"><i className="fa fa-share" /> Reply</button>
          </form>
        </div>

      </div>
    </div>
  </React.Fragment>
);

export default CommentReplyForm;
