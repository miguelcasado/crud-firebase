import React, { useState } from 'react';

const LinkForm = (props) => {
  const initialValues = {
    url: '',
    name: '',
    description: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

      <button className="btn btn-primary btn-block">Save</button>
    </form>
  );
};

export default LinkForm;
