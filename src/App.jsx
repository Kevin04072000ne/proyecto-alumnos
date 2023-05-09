import React, { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import uuid from 'react-uuid';
import Swal from 'sweetalert2';

const App = () => {

  // Definicion de hooks

  // Hoks de almacenamiento
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [file, setFile] = useState('');
  const [career, setCareer] = useState('');

  // Hooks de estados del sistema
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('')
  //Methods of the system
  function addPeople(newPeople) {
    setPeople([...people, newPeople]);

  }

  function getPeople() {
    return people;
  }

  function updatePeople(index, newPeople) {
    let newList = []
    people.map(user => {
      if (user.id === index) {
        user = newPeople
      }
      newList = [...newList, user]
    })
    setPeople(newList);
  }

  function deletePeople(index) {
    setPeople(people.filter(user => user.id !== index))
    console.log(people)
  }




  const clearAllInputs = () => {
    setName('');
    setAccount('');
    setFile('');
    setCareer('');
  }

  const fillHooks = user => {
    setName(user.name);
    setAccount(user.account);
    setFile(user.file);
    setCareer(user.career);
    setId(user.id)

  }


  // create
  const addNewPeople = () => {
    const data = {
      id: uuid(),
      name, 
      account,
      file,
      career,
    }
    addPeople(data);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Usuario guardado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  // update
  const updatePeopleById = (id) => {
    setEdit(false);
    const newPeople = {
      id,
      name,
      account,
      file,
      career,
    }
    updatePeople(id, newPeople);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Actualizado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    console.log('El objeto modificado es :', people)
  }
  // delete
  const deletePeopleById = (id) => {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "No podras desacer esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        deletePeople(id);
        Swal.fire(
          'Eliminado!',
          'Ya se borro :c',
          'success'
        )
        // setPeople(getPeople)
      }
    })
  }





  return (
    <div className='d-flex responsive-flex'>
      <section className=' responsive-width col-4 bg-dark d-flex align-items-center flex-column vh-100 me-4 rounded-end  shadow'>
        <h1 className='mb-5 text-light'>Registro</h1>
        <Form hooks={{ name, setName, account, setAccount, file, setFile, career, setCareer, edit, id, people }} methods={{ addNewPeople, updatePeopleById, clearAllInputs }} />
      </section>
      <section className='col-7 responsive-width mt-5'>
        <Table hooks={{ setEdit, setId, people }} methods={{ getPeople, deletePeopleById, fillHooks }} />
      </section>
    </div>
  )
}

export default App