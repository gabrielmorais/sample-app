Router.configure({
  // the default layout
  layoutTemplate: 'myTemplate'
});

Router.route('/', function () {
  this.render('home');
  this.layout('myTemplate');
});

Router.route('/tarefas', function () {
  this.render('tasklist');
  this.layout('myTemplate');
});

Router.route('/map', function () {
  this.render('map');
  this.layout('myTemplate');
});
