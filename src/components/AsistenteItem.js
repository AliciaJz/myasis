import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AsistenteItem extends Component {
  render() {
    return (
      <div style={itemText} >
        <p>{ this.props.asistente.gafete }</p>
      </div>
    )
  }
}

// PropTypes
AsistenteItem.propTypes = {
  asistente: PropTypes.object.isRequired
}

const itemText = {
  width: '75%',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textTransform: 'uppercase',
  background: '#fff',
  border: '2px solid #ccc',
  borderRadius: '25px'
}

export default AsistenteItem
