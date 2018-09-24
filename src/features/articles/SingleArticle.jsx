import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FacebookShareButton, TwitterShareButton } from 'react-simple-share';
import SingleArticleComment from './SingleArticleComment';
import SingleArticleCommentForm from './SingleArticleCommentForm';

/* eslint-disable react/no-array-index-key */
const SingleArticle = () => (
  <React.Fragment>

    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="col-md-12 blog-main border-top">
            <div className="blog-post">
              <h5 className="blog-post-title single-article-blog-post-title">Article Title Goes here.....</h5>
              <hr className="" />
              <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam, quasi velit ipsum
            consequuntur laborum inventore iure, at voluptatibus reiciendis magnam. Eveniet eaque error
            corrupti deleniti ut rem possimus facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda asperiores cupiditate. Eaque perspiciatis perferendis et aliquam cupiditate animi numquam facere, non nihil repudiandae quo enim sapiente, dolore quaerat quos sit voluptatem aperiam unde alias sint optio. Officiis nemo ipsum cum accusamus obcaecati culpa quae porro rerum aperiam. Vero atque deserunt numquam deleniti adipisci error dolores distinctio blanditiis explicabo quia praesentium aut, minima odit ipsam accusamus iste repellendus consequuntur nobis recusandae? Inventore quod quibusdam debitis, facilis quia id sapiente, et magni aliquid, odit dolores suscipit exercitationem. Ex nam perspiciatis rerum vel deserunt, qui eum deleniti obcaecati repellat non at ab error, corrupti numquam earum quae doloribus nihil iste officiis! Ipsum fuga debitis quod assumenda, minus ullam quam harum, similique quis dolore saepe facere commodi eos? Odit dolores architecto rem sint ut quisquam illum vitae voluptas quia ad tempora nobis optio, saepe illo unde similique necessitatibus voluptatibus assumenda porro, culpa omnis corrupti temporibus ipsum? Maiores quod aspernatur nulla. Delectus asperiores non reiciendis ratione iure debitis, neque facilis tenetur at ipsum, ullam quidem blanditiis ipsam vero atque velit quos soluta eius. Itaque commodi nulla harum nobis error odit amet quam porro dolore facere molestias consequuntur, voluptas rerum fuga sequi dicta qui maiores vero! Aut fuga animi at nam voluptatem molestias, asperiores, ipsa reprehenderit corporis, aliquid a placeat. Suscipit eos quo optio vel eaque ipsam eum, possimus veritatis magnam asperiores fugiat incidunt sint laborum voluptas repellendus voluptate vero laboriosam. Porro soluta animi doloribus vitae deleniti quasi, a ipsa libero nostrum corrupti sed accusamus ipsam dignissimos quam laboriosam ut alias illo quis. Deserunt, sint sapiente! Commodi illo cumque ex quia illum, magni quidem! Ipsa sapiente, explicabo totam voluptatum ipsam quos, laborum, quia in odio nesciunt dicta. Fugiat perferendis omnis a sequi officia itaque. Recusandae nam deleniti veritatis culpa ut pariatur vitae nostrum exercitationem facilis voluptatum. Placeat pariatur tempora ea excepturi! Numquam iusto voluptatem culpa molestias similique qui non pariatur cumque accusamus nostrum. Laboriosam illum quam distinctio iste ea itaque aut voluptatem quod. Dolorem doloribus eveniet non perferendis omnis neque tempora consequuntur quisquam voluptatem! Quis, inventore nihil,
              </p>
              <div className="single-article-chip">
            tag1
              </div>
              <div className="single-article-chip">
            tag2
              </div>
              <div className="single-article-chip">
            tag3
              </div>
            </div>
            <hr />
            <div className="row col-md-12">
              <div className="col-md-8 col-6 col-sm-6 single-article-rate">
                <i className="fas fa-star single-article-star" />
                <i className="fas fa-star single-article-star" />
                <i className="fas fa-star single-article-star" />
                <i className="far fa-star single-article-star" />
              </div>
              <div className="col-md-4 col-6 col-sm-6 single-article-share">
                <FacebookShareButton
                    url="https://github.com/swozniak/react-simple-share/"
                    color="#3B5998"
                    size="30px"
                  />
                <TwitterShareButton
                    url="https://github.com/swozniak/react-simple-share/"
                    color="#1DA1F2"
                    size="30px"
                    text="Add social media sharing buttons to your React app with react-sample-share by @stephanwozniak!"
                    via="Authors' Haven"
                  />
              </div>
            </div>
            <hr />
          </div>
        </div>

        <aside className="col-md-4 blog-sidebar">
          <div className="p-3 mb-3 bg-light rounded">
            <h5 className="single-article-author-name">
              <img src="https://i.imgur.com/oW1dGDI.jpg" className="rounded-circle single-article-profile-photo border border-info" alt="profile" />

              <b>Author name</b>
            </h5>
            <p className="mb-0">
          Biography of the author here.....
            </p>
          </div>
        </aside>

      </div>
      <div className="col-md-8">
        <div className="row">
          <SingleArticleCommentForm />
        </div>

        <div className="row">
          <SingleArticleComment />
          <SingleArticleComment />
        </div>
      </div>

    </main>

  </React.Fragment>

);

SingleArticle.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  article: PropTypes.shape({}).isRequired,
};

export default SingleArticle;
