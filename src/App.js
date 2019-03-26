import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';

// import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

import Amplify from '@aws-amplify/core';
// import Auth from '@aws-amplify/auth';
// import aws_exports from './aws-exports';

// import { withAuthenticator } from 'aws-amplify-react';

// import { API, graphqlOperation } from 'aws-amplify';

import Asistentes from './components/Asistentes';
import ListaClases from './components/pages/ListaClases';
import ListaAsistentes from './components/pages/ListaAsistentes';


Amplify.configure 
(awsmobile);

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
          <Header />
          <Route path="/" />
          <Route path="/clases" component={ListaClases} />
          <Route path="/asistentes" component={ListaAsistentes} />
        </div>
      </Router>
    );
  }
}

export default App
// export default withAuthenticator(App, true);