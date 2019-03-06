import React from 'react';
import {Link} from 'react-router-dom';

function FormHeader(){
  return (
    <header style={headerStyle}>
     <Link style={linkStyle} to="/login">Logga in</Link> | <Link style={linkStyle} to="/register">Registrera</Link>
    </header>
  )
}

const linkStyle = {
  color: "#000",
  textDecoration: "none",
  fontSize: "18px",
}

const headerStyle = {
  textAlign: 'center',
  padding: '10px'
}

export default FormHeader;