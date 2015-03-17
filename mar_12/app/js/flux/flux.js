var NoteStore = require('../stores/note-store');
var actions = require('../actions/note-actions');
var Fluxxor = require('fluxxor');

var stores = {
  NoteStore: new NoteStore()
};

module.exports = new Fluxxor.Flux(stores, actions);
