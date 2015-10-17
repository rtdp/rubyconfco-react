var cities = [
  { name: 'Medellin', tagline: 'Beautiful mountainous city.' },
  { name: 'Bogota', tagline: 'The capitol.' },
  { name: 'Barranquilla', tagline: 'The costal city.' }
];

var App = React.createClass({
  render: function() {
    var places = this.props.cities.map(function(city){
      return <div>
        <h1>{city.name}</h1>
        <span>{city.tagline}</span>
        <hr/>
      </div>
    });

    return <div>{places}</div>
  }
});

React.render(<App cities={cities}/>, document.body);

