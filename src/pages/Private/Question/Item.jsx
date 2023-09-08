import React, { useState, useEffect } from 'react'
import { getOneByID } from '../../../commonjs/db';

const Item = ({question}) => {

  const [category, setCategory] = useState({});
  const getCategory = async() => { 

    if (question.category!= undefined ) {

      //recuperer donnée cat a partir de id question
    const dataCategory = await getOneByID('category', question.category)

    setCategory(dataCategory) ; 
      
    }

   }

    useEffect(() => {
      getCategory()
    
      
    }, [])
    
  return (
          
          <tr>
          <th>{category?.name}</th>
          <td>{question?.question}</td>

        </tr>
  )
}

export default Item