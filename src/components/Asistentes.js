import React, { Component } from 'react';
import AsistenteItem from './AsistenteItem';
import PropTypes from 'prop-types';

class Asistentes extends Component {
  render() {
    console.log(this.props.asistentes);
    return this.props.asistentes.map((asistente) => (
      <AsistenteItem key={asistente.id} asistente={asistente} />
    ));
  }
}
// PropTypes
Asistentes.propTypes = {
  asistentes: PropTypes.array.isRequired
}

export default Asistentes