import React from 'react';
import { PropTypes } from 'prop-types';


/* eslint-disable react/no-array-index-key */
const CommentForm = ({ formClass, type }) => (
  <React.Fragment>
    <div className="col-12 col-md-12">
      <div className="widget-area no-padding blank">
        <div className="status-upload">
          <form className={`${formClass}-form`}>
            <textarea placeholder={`Enter a ${type}`} />

            <button type="submit" className={`btn ${formClass}-button`}><i className="fa fa-share" /> Post {type}</button>
          </form>
        </div>

      </div>
    </div>
  </React.Fragment>
);
CommentForm.propTypes = {
  formClass: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CommentForm;
