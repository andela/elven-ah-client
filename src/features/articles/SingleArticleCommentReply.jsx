import React from 'react';
import { Link } from 'react-router-dom';


/* eslint-disable react/no-array-index-key */
const SingleArticleCommentReply = () => (
  <React.Fragment>
    <div className="col-md-12 single-article-comment-response">
      <div className="media g-mb-30 media-comment">
        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
          <div className="g-mb-15 single-article-name-container ">
            <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Description" />
            <h5 className="single-article-comment-name g-color-gray-dark-v1 mb-0"><b>John Doe</b></h5>
            <span className="single-article-comment-date g-color-gray-dark-v4 g-font-size-12">January 15, 2018</span>
          </div>
          <p>Cras sit amet nibh libero, in gravida nulla.
             Nulla vel metus scelerisque ante sollicitudin.
             Cras purus odio, vestibulum in vulputate at...
          </p>

          <ul className="list-inline d-sm-flex my-0">
            <li className="list-inline-item g-mr-20">
              <Link className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" to="a">
                <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3 single-article-like-unlike" />
                    0
              </Link>
            </li>
            <li className="list-inline-item g-mr-20">
              <Link className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" to="a">
                <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3 single-article-like-unlike" />
                    0
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </React.Fragment>
);

export default SingleArticleCommentReply;
