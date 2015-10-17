
var cities = [
  { name: 'Medellin', tagline: 'Beautiful mountainous city.', rainy: true },
  { name: 'Bogota', tagline: 'The capitol.', rainy: false },
  { name: 'Barranquilla', tagline: 'The costal city.', rainy: false }
];

var CityContainer = React.createClass({

  render: function(){
    var cities = this.props.cities.map(function(city){
      return <City name={city.name} tagline={city.tagline} />
    })
    return(<div>{cities}</div>)
  }

});

React.render(<CityContainer cities={cities}/>, document.body);

