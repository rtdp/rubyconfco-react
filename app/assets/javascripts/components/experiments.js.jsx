var App = React.createClass({
  render: function() {
    return <div>
      <h1>Hello {this.props.city}</h1>
      <span>{this.props.tagline}</span>
    </div>
  }
});

React.render(<App city='Bogota' tagline='Beautiful mountainous city.'/>, document.body);

