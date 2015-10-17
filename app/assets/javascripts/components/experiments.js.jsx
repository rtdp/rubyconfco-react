var App = React.createClass({
  render: function() {
    return <div>
      <h1 style={{color:'blue', fontStyle: 'italic'}}>Hello Medellin</h1>
      <span className='tagline'>Beautiful mountainous city.</span>
    </div>
  }
});

React.render(<App/>, document.body);

