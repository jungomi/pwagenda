import React from 'react';
import { Dialog, Input } from 'react-toolbox';
import dialogTheme from './entry_dialog.scss';

class EntryDialog extends React.Component {
  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired
  };

  initialState = {
    errors: {},
    title: '',
    description: ''
  };

  state = this.initialState;

  cancel = () => {
    this.setState(this.initialState);
    this.props.toggle();
  };

  save = () => {
    const trimmedTitle = this.state.title.trim();
    if (!trimmedTitle) {
      this.setState({
        errors: {
          field: 'caption',
          reason: 'Title cannot be empty'
        }
      });
      return;
    }
    this.props.save({
      caption: trimmedTitle,
      legend: this.state.description.trim()
    });
    this.setState(this.initialState);
    this.props.toggle();
  };

  actions = [{
    label: 'Cancel',
    onClick: this.cancel
  }, {
    label: 'Save',
    onClick: this.save
  }];

  handleChange = (name, value) => this.setState({ [name]: value });

  render() {
    let titleError;
    if (this.state.errors.field === 'caption') {
      titleError = (<span className={dialogTheme['error-form']}>
        * Cannot be empty
      </span>);
    }
    return (
      <Dialog {...this.props}
        actions={this.actions}
        onEscKeyDown={this.props.toggle}
        onOverlayClick={this.props.toggle}
      >
        <section>
          <Input type="text"
            label="Title"
            value={this.state.title}
            onChange={this.handleChange.bind(this, 'title')}
            maxLength={60}
            required>
            {titleError}
          </Input>
          <Input type="text"
            label="Description"
            value={this.state.description}
            onChange={this.handleChange.bind(this, 'description')}
            multiline
          />
        </section>
      </Dialog>
    );
  }
}

export default EntryDialog;
