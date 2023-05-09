import React from 'react'
import Swal from 'sweetalert2';
import TableRow from './TableRow';

const Table = ({ hooks, methods }) => {
    const onClickRow = user => {
        // eventos de editar y eliminar
        Swal.fire({
            title: 'Que accion quieres realizar?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Edit',
            denyButtonText: `Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                hooks.setEdit(true);
                methods.fillHooks(user)
            } else if (result.isDenied) {
                methods.deletePeopleById(user.id);
            }
        })

    }
    return (
        <table className='table table-dark rounded shadow'>
            <thead className=''>
                <tr>
                    <th className='col text-center'>Foto</th>
                    <th className='col text-center'>Nombre</th>
                    <th className='col text-center'>Matricula</th>
                    <th className='col text-center'>Carrera</th>
                    <th className='col text-center'>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {hooks.people ? (hooks.people.map((user, index) => {
                    return (
                        <TableRow key={index} user={user} onClickRow = {onClickRow}/>
                    )
                })) : null}

            </tbody>
        </table>
    )
}

export default Table