import React, { useState,useEffect } from 'react'
import { getAll } from '../../../commonjs/db';
import Item from './Item';
import Loading from '../common/Loading';


const Lister = () => {

    const[categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false) ;

    
    const initData = async() => { 
        
      setLoading(true) ;
        const dataTemp = await getAll('category');

        setCategories(dataTemp) ;
        setLoading(false);

    }

    useEffect(() => {

    initData()

    }, []);
    
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Categories</th>
      </tr>
    </thead>
    <tbody>
    {loading?<Loading/>:categories?.map(data => <Item key={data.id} category={data}
    />) }

    </tbody>
  </table>
</div>
  )
}

export default Lister