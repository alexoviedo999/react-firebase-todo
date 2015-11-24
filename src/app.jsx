var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://react-firebase-todos.firebaseio.com/';


var App = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    return <div className="row panel panel-default">
    <h2 className="text-center">
      To-do List
    </h2>
    <Header itemsStore={this.firebaseRefs.items} />
    </div>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
