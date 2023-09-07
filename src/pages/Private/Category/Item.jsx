import React from 'react'

const Item = ({category}) => {
  return (
          
          <tr>
          <th></th>
          <td className='text-violet-600	'>{category?.name}</td>
          <td></td>
          <td></td>
        </tr>
  )
}

export default Item