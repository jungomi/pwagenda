import React, { PropTypes } from 'react';
import { Dialog, Input } from 'react-toolbox';
import dialogTheme from './entry_dialog.scss';

class EntryDialog extends React.Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    error: PropTypes.object.isRequired,
    setDescription: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
    visible: PropTypes.bool
  };

  cancel = () => {
    this.props.reset();
    this.props.toggle();
  };

  save = () => {
    const trimmedTitle = this.props.title.trim();
    if (!trimmedTitle) {
      this.props.setError({
        field: 'caption',
        reason: 'Title cannot be empty'
      });
      return;
    }
    this.props.save(trimmedTitle, this.props.description.trim());
    this.props.reset();
    this.props.toggle();
  };

  actions = [{
    label: 'Cancel',
    onClick: this.cancel
  }, {
    label: 'Save',
    onClick: this.save
  }];

  render() {
    let titleError;
    if (this.props.error.field === 'caption') {
      titleError = (<span className={dialogTheme['error-form']}>
        * Cannot be empty
      </span>);
    }
    return (
      <Dialog
        title="Create new entry"
        active={this.props.visible}
        actions={this.actions}
        onEscKeyDown={this.props.toggle}
        onOverlayClick={this.props.toggle}
      >
        <section>
          <Input type="text"
            label="Title"
            value={this.props.title}
            onChange={this.props.setTitle}
            maxLength={60}
            required>
            {titleError}
          </Input>
          <Input type="text"
            label="Description"
            value={this.props.description}
            onChange={this.props.setDescription}
            multiline
          />
        </section>
      </Dialog>
    );
  }
}

export default EntryDialog;
