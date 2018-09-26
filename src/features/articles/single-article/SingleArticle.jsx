import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FacebookShareButton, TwitterShareButton } from 'react-simple-share';
import moment from 'moment';
import Ratings from '../rating/RatingContainer';
import readTime from '../../../shared/utilities/readingTime';
import advertImage from '../../../shared/assets/img/adverts.png';
import Comments from '../comments/Comments';
import CommentForm from '../comments/CommentForm';

/* eslint-disable react/no-array-index-key */
const SingleArticle = ({ article }) => {
  const replies = article.comments.filter(comment => (comment.parentId !== null));
  const comments = article.comments.filter(comment => (!comment.parentId));
  const host = window && window.location && window.location.host;
  const protocol = window && window.location && window.location.protocol;

  return (
    article.title ? (
      <React.Fragment>
        <main role="main" className="container">
          <div className="article-container row">
            <React.Fragment>
              <div className="col-md-8">
                <React.Fragment>
                  <div className="article-head">
                    <img
                      className="column rounded-circle border border-info author-image"
                      src={article.author.image || 'https://res.cloudinary.com/authorshaven/image/upload/v1537220880/garqpt79lrm3dpyfvob9.jpg'}
                      alt="author"
                    />
                    <div className="column">
                      <div className="article-author columns">
                        <Link className="column" to={`/users/${article.author.username}`}>
                          <span>
                            {article.author.firstName}  {article.author.lastName}
                          </span>
                        </Link>
                        {<button className="column btn btn-sm btn-outline-primary" type="button">follow</button>}
                      </div>
                      <div className="columns text-muted">
                        <div className="column">{moment(article.createdAt).fromNow()}</div>
                        <span className="column read-time">{readTime(article.body)}</span>
                      </div>
                      <Ratings article={article} selectable />
                    </div>
                  </div>
                  <h2 className="article-title" dangerouslySetInnerHTML={{ __html: article.title }} />
                  <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />
                  <div className="columns">
                    <div className="column">
                      <Ratings article={article} selectable />
                    </div>
                    <div className="column">
                      <FacebookShareButton
                        url={`${protocol}//${host}/articles/${article.slug}`}
                        color="#3B5998"
                        size="30px"
                      />
                      <TwitterShareButton
                        url={`${protocol}//${host}/articles/${article.slug}`}
                        color="#1DA1F2"
                        size="30px"
                        text="Check out this awesome article"
                        via="Authors' Haven"
                      />
                    </div>
                  </div>
                  <aside className="blog-sidebar">
                    <div className="p-3 mb-3 bg-light rounded">
                      <h5 className="single-article-author-name">
                        <img src={article.author.image} className="rounded-circle single-article-profile-photo border border-info" alt="profile" />
                        <b>{article.author.firstName} {article.author.lastName}</b>
                      </h5>
                      <p className="mb-0">
                        {article.author.bio}
                      </p>
                    </div>
                  </aside>
                </React.Fragment>
              </div>
              <div className="col-md-4 advert-bar">
                <div className="advert-item">
                  <h5><b>First Advert</b></h5>
                  <img src={advertImage} alt="profile" />
                </div>
                <div className="advert-item">
                  <h5><b>Second Advert</b></h5>
                  <img src={advertImage} alt="profile" />
                </div>
                <div className="advert-item">
                  <h5><b>Third Advert</b></h5>
                  <img src={advertImage} alt="profile" />
                </div>
              </div>
            </React.Fragment>
          </div>
        </main>
        <main id="comment-section" className="container-fluid">
          <main className="container">
            <div className="article-container row">
              <div className="col-md-8">
                <h2 className="text-center">
                  Responses
                </h2>
                <CommentForm
                  formClass="single-article-comment"
                  type="comment"
                />
                {comments.map(comment => (
                  <Comments
                    key={comment.id}
                    comment={comment}
                    replies={replies}
                  />
                ))}
              </div>
            </div>
          </main>
        </main>
      </React.Fragment>
    ) : false
  );
};

SingleArticle.propTypes = {
  article: PropTypes.shape({}).isRequired,
};

export default SingleArticle;
