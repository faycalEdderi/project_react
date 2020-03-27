import React from 'react';
import ReactDOM from 'react-dom';
import Client from "./Client";
import ClientForm from "./ClientForm"

class App extends React.Component{

  state = {
    clients : [
      {id : 1, nom: "Lior Chamla"},
      {id: 2, nom: "Magali Pernin"},
      {id: 3, nom: "Joseph Durand "},
      {id: 4, nom: "Victor Hugo "}
    ],
   
  }

  handleDelete = (id) =>{
    console.log(id)
    //copie du tableau
    //const clients = this.state.clients.slice();
    const clients = [...this.state.clients];
    //trouve la place du client qui possède l'id dans le tableau 
    const index = clients.findIndex((client) => client.id === id );
    //Suppression du client
    clients.splice(index, 1);

    // ancien tableau remplacé par la copie
    this.setState({ clients })
  }

  
  handleAdd = client => {

    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });

  }

  render(){
    const title ="Liste de clients";

    return(
    <div>
      <h1> {title} </h1>

      <ul>
        {
          this.state.clients.map(
            client => ( 
              <Client details={client} onDelete={this.handleDelete} />
            ))
        }
        <ClientForm onClientAdd = {this.handleAdd}  />
        
      </ul>
      
    </div>
    );
  } 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
