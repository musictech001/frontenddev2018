// ref:
// AJAX and react: https://reactjs.org/docs/faq-ajax.html

// fetch data from a server via AJAX, save data to state, and render the data once it's ready.


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
      .then(
        (myJson)=> {
          this.setState({items: myJson.results})
          this.setState({isLoaded:true});
        },
        (error) => {
          this.setState({error});          
        }
      );    
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
          <h3> Assignment 2: Fetch data using AJAX and React </h3>

          <ul>
          <li> fetch data from a server via AJAX </li>
          <li> save data to component's state </li>
          <li> render the data once it's ready </li>
          </ul>

          <h3> Results </h3>
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
