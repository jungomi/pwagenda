import React, { PropTypes } from 'react';
import { Dialog } from 'react-toolbox';
import { Field, reduxForm } from 'redux-form';
import InputField from '../forms/InputField';

const validate = ({ title }) => {
  const error = {};
  if (!title || !title.trim()) {
    error.title = 'Title cannot be empty';
  }
  return error;
};

const EntryDialog = ({ visible, save, toggle, reset, handleSubmit }) => {
  const actions = [{
    label: 'Cancel',
    onClick: () => {
      reset();
      toggle();
    }
  }, {
    label: 'Save',
    onClick: handleSubmit(({ title, description }) => {
      reset();
      save(title, description);
    })
  }];

  return (
    <Dialog
      title="Create new entry"
      active={visible}
      actions={actions}
      onEscKeyDown={toggle}
      onOverlayClick={toggle}
    >
      <section>
        <Field
          component={InputField}
          type="text"
          name="title"
          label="Title"
          maxLength={60}
          required
        />
        <Field
          component={InputField}
          type="text"
          name="description"
          label="Description"
          multiline
        />
      </section>
    </Dialog>
  );
};

EntryDialog.propTypes = {
  visible: PropTypes.bool,
  save: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'entry-dialog',
  validate
})(EntryDialog);
