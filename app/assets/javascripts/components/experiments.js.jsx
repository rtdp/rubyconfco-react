var cities = [
  { name: 'Medellin', tagline: 'Beautiful mountainous city.', rainy: true },
  { name: 'Bogota', tagline: 'The capitol.', rainy: false },
  { name: 'Barranquilla', tagline: 'The costal city.', rainy: false }
];

var App = React.createClass({
  render: function() {
    var places = this.props.cities.map(function(city){
      var rainyState;
      if(city.rainy){
        rainyState = <span> And rainy too.</span>
      }else{
        rainyState = <span> Not rainy.</span>
      }

      return <div>
        <h1 className={city.rainy ? 'rainy' : ''}>{city.name}</h1>
        <span>{city.tagline}</span>
        {rainyState}
        <hr/>
      </div>
    });

    return <div>{places}</div>
  }
});

React.render(<App cities={cities}/>, document.body);

