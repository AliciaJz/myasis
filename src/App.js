import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import logo from './simbolo_LBP.jpg';
import './App.css';

// import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

import Amplify from '@aws-amplify/core';
// import Auth from '@aws-amplify/auth';
import aws_exports from './aws-exports';

// import { withAuthenticator } from 'aws-amplify-react';

import { API, graphqlOperation } from 'aws-amplify';

import Clases from './components/Clases'
import Asistentes from './components/Asistentes'

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
  state = {
    asistentes: [
      {
        id: 1,
        gafete: 'Zila1',
        certificado: 'Aliz1'
      },
      {
        id: 3,
        gafete: 'Zila3',
        certificado: 'Aliz3'
      },
      {
        id: 5,
        gafete: 'Zila5',
        certificado: 'Aliz5'
      }
    ]
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Header />
          <Clases />
          <Asistentes asistentes={this.state.asistentes}/>
        </div>
      </Router>
    );
  }
}

export default App
// export default withAuthenticator(App, true);