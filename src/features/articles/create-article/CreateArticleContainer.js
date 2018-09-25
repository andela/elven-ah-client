import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from '../../../shared/layouts/Navbar';
import TitleEditor from './TitleEditor';
import ArticleTag from './ArticleTag';
import MainEditor from './MainEditor';
import ArticleCategory from './ArticleCategory';
import fetchData from '../../../shared/utilities/fetchData';
import createArticle from './createArticleActions';

export class CreateArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      title: 'Title here',
      body: 'Body here',
      tags: [],
      category: { label: 'Select a category' },
      isAttributed: false,
    };
    const { auth, history } = this.props;
    const { isAuthenticated } = auth;
    if (!isAuthenticated) {
      history.push('/login');
    }
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
   * @description Handles the tag editor change
   * It prevents the user from having more than 5 tags
   * @param {Array} tags The tag editor content
   */
  handleTagChange = (tags) => {
    if (tags.length <= 5) {
      this.setState({
        tags,
      });
    }
  }

  /**
   * @description Handles the title editor change
   * @param {String} The title editor content
   */
  handleCheckBoxChange = (event) => {
    const { target } = event;
    this.setState({
      isAttributed: target.checked,
    });
  };

  /**
   * @description Handles submit event of the article
   * Dispatches to the create action to the create article thunk/middleware
   */
  handleSubmit = async () => {
    const {
      title, body, category, tags: tagsArray, isAttributed, imageUrl,
    } = this.state;
    let tags = '';
    tagsArray.forEach((tag) => {
      const { value } = tag;
      tags += `${value},`;
    });
    const { create, history } = this.props;
    const article = {
      title,
      body,
      tags: tags.substring(0, tags.length - 1),
      isAttributed: `${isAttributed}`,
      categoryId: category.value,
      imageUrl,
    };
    const response = await create(article);
    if (response) {
      switch (response.status) {
        case 201:
          // history.push(`/articles/${response.data.article.slug}`);
          history.push('/');
          break;
        case 401:
          history.push('/login');
          break;
        default:
          break;
      }
    }
  };

  /**
   * @description Renders the component on a DOM node
   */
  render() {
    const {
      title, body, category, tags, isAttributed,
    } = this.state;
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
                value={title}
              />
            </div>
            <div className="body-editor">
              {/* <span className="editor-placeholder">Body</span> */}
              <MainEditor
                handleChange={this.handleEditorChange}
                imageUploadHandler={this.imageUploadHandler}
                value={body}
              />
            </div>
          </div>
          <div className="col-md-4 navbar-fixed-right">
            {/* <span>Categories</span> */}
            <ArticleCategory
              category={category}
              handleChange={this.handleSelectChange}
            />
            <br />
            {/* <span>Tags</span> */}
            <ArticleTag
              tags={tags}
              handleChange={this.handleTagChange}
            />
            <br />
            <input value={isAttributed} onChange={this.handleCheckBoxChange} type="checkbox" name="isAttributed" id="isAttributed" /> I have attributed all relevant sources <br /><br />
            <button onClick={this.handleSubmit} type="button" className="btn btn-primary col-md-12">Publish</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CreateArticleContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  create: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  errors: state.articles.errors,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  create: article => dispatch(createArticle(article)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticleContainer);
