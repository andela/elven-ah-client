import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from '../../../shared/layouts/Navbar';
import TitleEditor from './TitleEditor';
import ArticleTag from './ArticleTag';
import MainEditor from './MainEditor';
import ArticleCategory from './ArticleCategory';
import fetchData from '../../../shared/utilities/fetchData';
import createArticle, { checkPlagiarism } from './createArticleActions';
import PlagiarismDisplay from './PlagiarismDisplay';

export class CreateArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      title: 'Title',
      body: 'Start typing...',
      tags: [],
      category: { label: 'Select a category' },
      isAttributed: false,
      scanResults: [],
    };
    const { auth, history } = this.props;
    const { isAuthenticated } = auth;
    if (!isAuthenticated) {
      history.push('/login');
    }
  }

  /**
   * @description Handles the title placeholder when focused
   */
  handleTitlePlaceholderTextFocusIn = () => {
    const { title } = this.state;
    if (title.trim() === 'Title') {
      this.setState({
        title: '',
      });
    }
  }

  /**
   * @description Handles the body placeholder when focused
   * @param {String} The title editor content
   */
  handleBodyPlaceholderTextFocusIn = () => {
    const { body } = this.state;
    if (body.trim() === 'Start typing...' || body.trim() === '<p>Start typing...</p>') {
      this.setState({
        body: '',
      });
    }
  }

  /**
   * @description Handles the title placeholder when unfocused
   * @param {String} The title editor content
   */
  handleTitlePlaceholderTextFocusOut = () => {
    const { title } = this.state;
    if (title.trim() === '') {
      this.setState({
        title: 'Title',
      });
    }
  }

  /**
   * @description Handles the body placeholder when focused
   * @param {String} The title editor content
   */
  handleBodyPlaceholderTextFocusOut = () => {
    const { body } = this.state;
    if (body.trim() === '') {
      this.setState({
        body: 'Start typing...',
      });
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
   * It runs a plagiarism check if the isAttributed button is not checked
   * If plagiarised contents are found it diplays it and prompts a user to take action
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
    const { create, history, plagiarismScan } = this.props;
    const article = {
      title,
      body,
      tags: tags.substring(0, tags.length - 1),
      isAttributed: 'true',
      categoryId: category.value,
      imageUrl,
    };
    if (!isAttributed) {
      const plagiarismScanResult = await plagiarismScan(body);
      if (plagiarismScanResult) {
        this.setState({
          scanResults: plagiarismScanResult,
        });
        return false;
      }
    }
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
    return false;
  };

  /**
   * @description Renders the component on a DOM node
   */
  render() {
    const {
      title, body, category, tags, isAttributed, scanResults,
    } = this.state;
    const { errors } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <br />
        <br />
        <div className="row mx-auto col-md-8">
          <div className="editors col-md-8">
            <div className="title-editor">
              <TitleEditor
                handleChange={this.handleTitleChange}
                handlePaste={this.handleTitlePaste}
                handleTitlePlaceholderTextFocusIn={this.handleTitlePlaceholderTextFocusIn}
                handleTitlePlaceholderTextFocusOut={this.handleTitlePlaceholderTextFocusOut}
                value={title}
              />
            </div>
            <div className="body-editor">
              <MainEditor
                handleChange={this.handleEditorChange}
                imageUploadHandler={this.imageUploadHandler}
                handleBodyPlaceholderTextFocusIn={this.handleBodyPlaceholderTextFocusIn}
                handleBodyPlaceholderTextFocusOut={this.handleBodyPlaceholderTextFocusOut}
                value={body}
              />
            </div>
          </div>
          <br />
          <div className="col-md-4 create-article-sidebar">
            <ArticleCategory
              category={category}
              handleChange={this.handleSelectChange}
            />
            {
              errors.categoryId
                ? <span className="invalid-feedback">You did not select a category</span>
                : ''
            }
            <br />
            <ArticleTag
              tags={tags}
              handleChange={this.handleTagChange}
            />
            <br />
            <input value={isAttributed} onChange={this.handleCheckBoxChange} type="checkbox" name="isAttributed" id="isAttributed" /> I have attributed all relevant sources <br /><br />
            <button onClick={this.handleSubmit} type="button" className="btn btn-primary col-md-12">Publish</button>
            {
              scanResults[0]
                ? <PlagiarismDisplay scanResults={scanResults} />
                : ''
            }
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
  plagiarismScan: htmlText => dispatch(checkPlagiarism(htmlText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticleContainer);
