import React, { useState, useEffect } from 'react'
import { getOneByID } from '../../../commonjs/db';

const Item = ({action}) => {

  const [category, setCategory] = useState({});
  const getCategory = async() => { 

    //recuperer donnée cat a partir de id question
    const dataCategory = await getOneByID('category', action.category)

    setCategory(dataCategory) ; 
   }

    useEffect(() => {
      getCategory()
    
      
    }, [])
    
  return (
          
          <tr>
          <th>{category?.name}</th>
          <td>{action?.action}</td>

        </tr>
  )
}

export default Item