var constants = require('../constants/constants');

module.exports = {
  addNote: function(note) {
    this.dispatch(constants.ADD_NOTE, note);
  },

  deleteNote: function(note) {
    this.dispatch(constants.REMOVE_NOTE, note);
  }
};
