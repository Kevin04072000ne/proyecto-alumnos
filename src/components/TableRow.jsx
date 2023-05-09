import React from 'react'

const TableRow = ({user, onClickRow}) => {
    return (
        <tr >
            <td className='text-center'>
                <img src={URL.createObjectURL(user.file)} width={'70px'} alt="Avatar" />
            </td>
            <td className="text-center">{user.name}</td>
            <td className="text-center">{user.account}</td>
            <td className="text-center">{user.career}</td>
            <td className='text-center' >
                <button className="btn btn-outline-warning" onClick={e => onClickRow(user)}>
                    <i class="bi bi-gear"></i>
                </button>

            </td>
        </tr>
    )
}

export default TableRow