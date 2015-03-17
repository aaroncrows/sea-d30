var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var NoteStore = require('../stores/note-store')

var NoteForm = require('./note-form.jsx');
var NoteList = require('./note-list.jsx');

module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('NoteStore')],

  getStateFromFlux: function() {
    return this.getFlux().store('NoteStore').getState();
  },
  render: function() {
    return (
      <main>
        <NoteForm />
        <NoteList data={this.state.notes} />
      </main>
    )
  }
});
