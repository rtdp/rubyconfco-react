var App = React.createClass({
  render: function() {
    return React.createElement('div',
      null,
      React.createElement('h1', null, 'Hello Medellin'),
      React.createElement('span', null, 'Beautiful mountainous city.'))
  }
});

React.render(React.createElement(App, null), document.body);
