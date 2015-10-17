var City = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    tagline: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Tagline: {this.props.tagline}</div>
      </div>
    );
  }
});
