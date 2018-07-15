// ref:
// AJAX and react: https://reactjs.org/docs/faq-ajax.html



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      myResults: {}
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=10')
      .then(function(response) {
        return response.json();
      })
      .then((myJson)=> {
        this.setState({isLoaded:true});
        console.log(myJson);
        console.log(myJson.results[0].name.first);

        console.log("1, myResults: " + this.state.myResults);
        this.setState({myResults: myJson.results});
        this.setState({items: myJson.results})
        console.log("2, myResults: " + this.state.myResults[0].name.first);

      });    
  }

  render() {
    const { error, isLoaded, items, myResults } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      //debugger;
      if(items.length > 0) {
        console.log(items[0].name.first); 
        //debugger;
        //return (
        //  <div>
        //  <p> {items[0].name.first} </p>
        //  </div>
        //  );
        
        return (
          <div>
          <p> Fetched data </p>
          <ul>
          {items.map( item => (
            <li key={item.name.first}> 
              {item.name.title} {item.name.first} {item.name.last} 
            </li>
          ))}
          </ul>
          </div>
        );

      }
      else {
        return <div> data is not ready yet. </div>;
      }
    }
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
