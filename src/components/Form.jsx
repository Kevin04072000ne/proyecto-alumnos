import React from 'react'
import { useState } from 'react'

const Form = ({ hooks, methods }) => {
  const submitEvent = (e) => {
    e.preventDefault();
    console.log(hooks.file)
    if (hooks.edit) {
      // si estamos en modo edicion
      methods.updatePeopleById(hooks.id)
    } else {
      // si estamos guardando uno nuevo
      methods.addNewPeople();
    }
    methods.clearAllInputs();
  }
  return (
    <form onSubmit={submitEvent} className='col-11 d-flex justify-content-center align-items-center flex-column mt-5 me-2'>
      <div className='mb-3 border-bottom input-group'>
        <span className="bi bi-person fs-5 text-light"></span>
        <input
          required
          className='form-control text-center bg-transparent border-0 p-0 pe-2 text-light'
          type="text"
          id='nombre'
          placeholder='Nombre del alumno'
          value={hooks.name}
          onChange={e => hooks.setName(e.target.value)} />
      </div>

      <div className='mb-3 border-bottom input-group'>
        <span className="bi bi-123 fs-5 text-light"></span>
        <input
          required
          className='form-control text-center bg-transparent border-0 p-0 pe-2 text-light'
          type="number"
          id='matricula'
          placeholder='Matricula'
          value={hooks.account}
          onChange={e => hooks.setAccount(e.target.value)} />
      </div>

      <div className=" mb-3 form-floating col-12" >
        <select
          className="form-select bg-transparent text-light text-center"
          id="carrera"
          required
          aria-label="Selecciona una carrera"
          value={hooks.career}
          onChange={e => hooks.setCareer(e.target.value)}>
          <option value=''>Selecciona una carrera</option>
          <option className="text-dark" value="Ingenieria en Sistemas Computacionales">Ingenieria en Sistemas Computacionales</option>
          <option className="text-dark" value="Ingenieria en TICS">Ingenieria en TICS</option>
          <option className="text-dark" value="Ingenieria Logistica">Ingenieria Logistica</option>
          <option className="text-dark" value="Licenciatura en Administracion">Licenciatura en Administracion</option>
          <option className="text-dark" value="Ingenieria Civil">Ingenieria Civil</option>
          <option className="text-dark" value="Ingenieria Mecatronica">Ingenieria Mecatronica</option>
          <option className="text-dark" value="Ingenieria Industrial">Ingenieria Industrial</option>
          <option className="text-dark" value="Ingenieria Quimica">Ingenieria Quimica</option>
          <option className="text-dark" value="Ingenieria Electrica">Ingenieria Electrica</option>
        </select>
      </div>
      <div className="mb-3 border-bottom text-center fs-6 col-12">
        <label htmlFor="formFile" className='text-light text-center mb-1' >Agregar foto</label>
        <input required className='form-control form-control-sm vh-2 fs-6 form-control-outline' type="file" name="imagen" accept="image/*" id="formFile" placeholder='Foto'  onChange={e => hooks.setFile(e.target.files[0])} />
      </div>
      <button className='btn btn-outline-light col-12'>Guardar</button>
    </form>
  )
}

export default Form