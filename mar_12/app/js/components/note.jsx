var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

module.exports = React.createClass({
  mixins: [FluxMixin],
  handleDelete: function() {
    this.getFlux().actions.deleteNote(this.props.data);
  },
  render: function() {
    return (
      <li>
        <span>{this.props.data.author + ': '}</span>
        {this.props.data.noteBody}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
});
