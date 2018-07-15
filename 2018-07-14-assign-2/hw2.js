// ref:
// AJAX and react: https://reactjs.org/docs/faq-ajax.html



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=10')
      .then(function(response) {
        return response.json();
      })
      .then((myJson)=> {
        this.setState({items: myJson.results})
        this.setState({isLoaded:true});
      });    
  }

  render() {
    const { error, isLoaded, items, myResults } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log("items.length = " + items.length);
      if(items.length > 0) {        
        return (
          <div>
          <p> Fetched data </p>
          <ol>
          {items.map( item => (
            <li key={item.name.first+item.name.last}> 
              {item.name.title} {item.name.first} {item.name.last} 
            </li>
          ))}
          </ol>
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
