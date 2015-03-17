'use strict';

var React = require('react');
var flux = require('./flux/flux');

var NotesApp = require('./components/note-controller-view.jsx');

React.render(<NotesApp flux={flux}/>, document.body);
