var cities = [
  { name: 'Medellin', tagline: 'Beautiful mountainous city.', rainy: true },
  { name: 'Bogota', tagline: 'The capitol.', rainy: false },
  { name: 'Barranquilla', tagline: 'The costal city.', rainy: false }
];

var CityContainer = React.createClass({
  render: function(){
    return <div>{this.props.children}</div>
  }
});

CityContainer.City = React.createClass({
  render: function(){
    var rainyState;
    if(this.props.city.rainy){
      rainyState = <span> And rainy too.</span>
    }else{
      rainyState = <span> Not rainy.</span>
    }

    return <div>
      <h1 className={this.props.city.rainy ? 'rainy' : ''}>{this.props.city.name}</h1>
      <span>{this.props.city.tagline}</span>
      {rainyState}
      <hr/>
    </div>
  }
});

var App = React.createClass({
  render: function() {
    var places = this.props.cities.map(function(city){
      return <CityContainer.City city={city}/>
    });

    return <CityContainer>{places}</CityContainer>
  }
});

React.render(<App cities={cities}/>, document.body);

