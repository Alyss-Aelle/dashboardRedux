import React, { useState,useEffect } from 'react'
import { getAll } from '../../../commonjs/db';
import Loading from '../common/Loading';
import Item from './Item';


const Lister = () => {

    const[actions, setActions] = useState([]);
    const [loading, setLoading] = useState(false) ;

    
    const initData = async() => { 
        
      setLoading(true) ;
        const dataTemp = await getAll('actions');

        setActions(dataTemp) ;
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
        <th>Cat.</th>
        <th>Actions</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {loading?<Loading/>:actions?.map(data => <Item key={data.id} action={data}
    />) }

    </tbody>
  </table>
</div>
  )
}

export default Lister