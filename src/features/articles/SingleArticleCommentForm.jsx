import React from 'react';


/* eslint-disable react/no-array-index-key */
const SingleArticleCommentForm = () => (
  <React.Fragment>
    <div className="col-12 col-md-12">
      <div className="widget-area no-padding blank">
        <div className="status-upload">
          <form className="single-article-comment-form">
            <textarea placeholder="Add a comment to this article..." />

            <button type="submit" className="btn single-article-comment-button"><i className="fa fa-share" /> Post Comment</button>
          </form>
        </div>

      </div>
    </div>
  </React.Fragment>
);

export default SingleArticleCommentForm;
