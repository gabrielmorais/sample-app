import { Template } from 'meteor/templating';

import { Tasks } from './api/connect.js';

import './api/tasks.js';

import './tasklist.html';

Template.tasklist.rendered = function() {
        // $('ul.tabs').tabs();
}
Template.tasklist.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});
Template.tasklist.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  }

});