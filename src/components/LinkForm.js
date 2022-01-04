import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { db } from 'services/firebase';

const LinkForm = (props) => {
  const initialValues = {
    url: '',
    name: '',
    description: '',
  };
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    if (props.currentId === '') {
      setValues({ ...initialValues });
    } else {
      getLinkById(props.currentId);
    }
  }, [props.currentId]);

  const getLinkById = async (id) => {
    const doc = await db.collection('links').doc(id).get();
    setValues({ ...doc.data() });
  };

  const validateUrl = (str) => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      str
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateUrl(values.url)) {
      return toast('Invalid url', { type: 'warning' });
    }

    props.addOrEdit(values);
    setValues({ ...initialValues });
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group mb-3">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://someurl.com"
          name="url"
          onChange={handleChange}
          value={values.url}
        />
      </div>
      <div className="form-group input-group mb-3">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Website name"
          onChange={handleChange}
          value={values.name}
        />
      </div>

      <div className="form-group mb-3">
        <textarea
          name="description"
          rows="3"
          className="form-control"
          placeholder="Write a description"
          onChange={handleChange}
          value={values.description}
        ></textarea>
      </div>

      <button className="btn btn-primary btn-block">
        {props.currentId === '' ? 'Save' : 'Update'}
      </button>
    </form>
  );
};

export default LinkForm;
