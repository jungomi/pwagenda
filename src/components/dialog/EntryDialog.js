import React from 'react';
import { Dialog, Input } from 'react-toolbox';
import './entry_dialog.scss';

class EntryDialog extends React.Component {
  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired
  };

  initialState = {
    caption: '',
    legend: ''
  };

  state = this.initialState;

  cancel = () => {
    this.setState(this.initialState);
    this.props.toggle();
  };

  save = () => {
    this.props.save(this.state);
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
            onChange={this.handleChange.bind(this, 'caption')}
            maxLength={60}
            required
          />
          <Input type="text"
            label="Description"
            value={this.state.description}
            onChange={this.handleChange.bind(this, 'legend')}
            multiline
          />
        </section>
      </Dialog>
    );
  }
}

export default EntryDialog;
