import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';

import NavBar from '../../../shared/layouts/Navbar';
import TitleEditor from '../create-article/TitleEditor';
import MainEditor from '../create-article/MainEditor';
import ArticleCategory from '../create-article/ArticleCategory';
import fetchData from '../../../shared/utilities/fetchData';
import { fetchArticle } from '../single-article/singleArticleAction';
import categoryOptions from '../create-article/categoryOptions';
import updateArticle from './updateArticleActions';

export class UpdateArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      title: '',
      body: '',
      category: '',
    };
    const {
      auth, history, getArticle, match,
    } = this.props;
    const { isAuthenticated } = auth;
    if (!isAuthenticated) {
      history.push('/login');
    }
    const { slug } = match.params;
    getArticle(slug);
  }

  /**
   * @description Uploads images added to the editor to cloudinary
   * It then returns the location of the image
   * Add replaces the src in the img tags with the image location
   * @param {Object} blobInfo The file object uploaded to the editor
   * @param {Object} success The callback which handles the success of the imgage upload
   * It handles the src replacement in the img tag
   * @param {Object} error The callback which handles a failure
   */
  imageUploadHandler = async (blobInfo, success, error) => {
    try {
      const { imageUrl } = this.state;
      const formData = new FormData();
      formData.append('file', blobInfo.blob());
      formData.append('upload_preset', 'g5jchagm');
      const result = await fetchData({
        url: 'https://api.cloudinary.com/v1_1/cj-odina/image/upload',
        method: 'POST',
        headers: { 'Content-Type': 'Application/x-www-form-urlencoded' },
        data: formData,
      });
      this.setState({
        imageUrl: imageUrl || result.data.secure_url,
      });
      success(result.data.secure_url);
    } catch (err) {
      error('Unable to upload file. Ensure you\'re uploading an image file.');
    }
  }

  /**
   * @description Handles the title editor change
   * @param {String} The title editor content
   */
  handleTitleChange = (titleContent) => {
    this.setState({
      title: titleContent,
    });
  }

  /**
   * @description Handles the main editor change
   * @param {String} The main editor content
   */
  handleEditorChange = (editorContent) => {
    this.setState({
      body: editorContent,
    });
  }

  /**
   * @description Handles the category dropdown change
   * @param {Object} The category selected
   */
  handleSelectChange = (category) => {
    this.setState({
      category,
    });
  }

  /**
   * @description Handles the title editor paste
   * It prevents images from being pasted from the title editor
   * @param {Object} event The event object
   */
  handleTitlePaste = (event) => {
    event.preventDefault();
    const clipContent = navigator.clipboard.readText();
    if (typeof clipContent !== 'string') return;
    this.setState({ title: clipContent });
  }

  /**
   * @description Handles submit event of the article
   * Dispatches to the create action to the update article thunk/middleware
   */
  handleSubmit = async () => {
    const {
      title, body, category, imageUrl,
    } = this.state;
    const { article: previousArticle } = this.props;
    const { update, history } = this.props;
    const article = {
      title,
      body,
      categoryId: category ? category.value : previousArticle.categoryId,
      imageUrl,
      slug: previousArticle.slug,
      isAttributed: true,
    };
    const response = await update(article);
    if (response) {
      switch (response.status) {
        case 200:
          history.push(`/articles/${response.data.article.slug}`);
          toastr.success('Your article has been updated successful.');
          break;
        case 403:
          history.push('/profile');
          toastr.warning('You can not update this article because it doesn\'t belong to you.');
          break;
        case 401:
          history.push('/login');
          break;
        default:
          break;
      }
      history.push('/Profile');
    }
  };

  /**
   * @description Renders the component on a DOM node
   */
  render() {
    const { article, auth, history } = this.props;
    const { title, body, category } = this.state;
    if (article && auth) {
      if (article.userId !== auth.user.id) {
        toastr.warning('The article you want to update belongs to another author.');
        history.push('/profile');
      }
    }
    return (
      <React.Fragment>
        <NavBar />
        <br />
        <br />
        <div className="row mx-auto col-md-8">
          <div className="editors col-md-8">
            <div className="title-editor">
              {/* <span className="editor-placeholder">Title</span> */}
              <TitleEditor
                handleChange={this.handleTitleChange}
                handlePaste={this.handleTitlePaste}
                value={title || article.title}
              />
            </div>
            <div className="body-editor">
              {/* <span className="editor-placeholder">Body</span> */}
              <MainEditor
                handleChange={this.handleEditorChange}
                imageUploadHandler={this.imageUploadHandler}
                value={body || article.body}
              />
            </div>
          </div>
          <div className="col-md-4 navbar-fixed-right">
            {/* <span>Categories</span> */}
            <ArticleCategory
              category={category || categoryOptions
                .find(option => option.value === Number.parseInt(article.categoryId, 10))}
              handleChange={this.handleSelectChange}
            />
            <br />
            <button onClick={this.handleSubmit} type="button" className="btn btn-primary col-md-12">Update article</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

UpdateArticleContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  update: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  getArticle: PropTypes.func.isRequired,
  article: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  errors: state.articles.errors,
  auth: state.auth,
  article: state.articles.currentArticle,
});

const mapDispatchToProps = dispatch => ({
  update: article => dispatch(updateArticle(article)),
  getArticle: slug => dispatch(fetchArticle(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateArticleContainer);
