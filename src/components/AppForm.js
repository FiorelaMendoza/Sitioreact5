import React from 'react'

const AppForm = () => {
  return (
    <div style={{background:"orange",
    padding:"10px", TextAlign:"center"}}>
      <h>AppForm.js</h>
      <input placeholder='Nombres...' /><br/>
      <input placeholder='Edad...' />   <br/>
      <input placeholder='Genero...' /> <br/>
      <button>Guardar</button>
    </div>
  )
}

export default AppForm
