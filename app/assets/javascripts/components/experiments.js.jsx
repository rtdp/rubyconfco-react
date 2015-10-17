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

CityContainer.CityCheckbox = React.createClass({
  getInitialState: function(){
    return {
      checked: false
    }
  },

  handleChange: function(event){
    this.setState({checked: !this.state.checked});
    console.log(this.state.checked);
  },

  render: function(){
    return <span><input type='checkbox' value={this.state.checked} onChange={this.handleChange}/></span>
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
      <CityContainer.CityCheckbox/>
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


