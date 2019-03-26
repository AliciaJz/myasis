import React, { Component } from 'react';
// import AsistenteItem from './AsistenteItem';
import PropTypes from 'prop-types';

class Asistentes extends Component {
  render() {
    return (
      <div>
        <h4>Gafete</h4>
        <h5>Nombre en Certificado</h5>
      </div>
    )
  }
}
// PropTypes
Asistentes.propTypes = {
  asistentes: PropTypes.array.isRequired
}

export default Asistentes