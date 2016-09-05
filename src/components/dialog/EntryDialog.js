import React from 'react';
import { Dialog, Input } from 'react-toolbox';
import './entry_dialog.scss';

class EntryDialog extends React.Component {
  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired
  };

  initialState = {
    title: '',
    description: ''
  };

  state = this.initialState;

  cancel = () => {
    this.setState(this.initialState);
    this.props.toggle();
  };

  actions = [{
    label: 'Cancel',
    onClick: this.cancel
  }, {
    label: 'Save',
    onClick: this.props.save
  }];

  handleChange = (name, value) => this.setState({ [name]: value });

  render() {
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
          />
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
