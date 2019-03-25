import React, { Component } from 'react';
import logo from './simbolo_LBP.jpg';
import './App.css';

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react';

import { API, graphqlOperation } from 'aws-amplify';

Amplify.configure(awsmobile);

const listClases = `query listClases {
  listClases{
    items{
      id
      nombreClase
      Ponente
    }
  }
}`

const createAsitente = `mutation CreateAsitente($input: CreateAsitenteInput!) {
  createAsitente(input: $input) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ZILA
          </p>
        </header>
      </div>
    );
  }
}

export default App
// export default withAuthenticator(App, true);