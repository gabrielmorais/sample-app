import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './views/tasklist/tasklist.js';
//import './main.html';

Template.myTemplate.rendered = function() {
    $(".button-collapse").sideNav();
    Session.set('currentRouteName', Router.current().route.name)

}

Template.nav.helpers({
    isCurrentPage: function(pageName){
         console.log('checking');
        return Session.equals('currentRouteName', pageName);
    }
})
// Template.nav.events({
//     'click .flow-nav a' : function(){
//         alert("ok")
//     }
// })