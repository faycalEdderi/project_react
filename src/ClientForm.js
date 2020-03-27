import React, {Component} from "react";


class ClientForm extends Component {
    state = {
        nouveauClient : ''
      }
      handleSubmit = event => {
        event.preventDefault();
        let id = new Date().getTime();
        let nom = this.state.nouveauClient;
    
        this.props.onClientAdd({id, nom});
        this.setState({nouveauClient:""});
        
      };
    
      handleChange = event => {
        //console.log(event.currentTarget.value)
        //let inputValue = event.currentTarget.value;
    
        this.setState({nouveauClient : event.currentTarget.value })
      }
    render(){ 
     return (
     
            <form action="" onSubmit={this.handleSubmit}>
            <input value={ this.state.nouveauClient } onChange = { this.handleChange } type="text" placeholder="Ajouter un client" />
            <button>Confirmer</button>
            </form> 
         )

}}
export default ClientForm;