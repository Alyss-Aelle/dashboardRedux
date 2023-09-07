import React, { useState,useEffect } from 'react'
import { getAll } from '../../../commonjs/db';
import Loading from '../common/Loading';
import Item from './Item';


const Lister = () => {

    const[asks, setAsks] = useState([]);
    const [loading, setLoading] = useState(false) ;

    
    const initData = async() => { 
        
      setLoading(true) ;
        const dataTemp = await getAll('questions');

        setAsks(dataTemp) ;
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
        <th>Question</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {loading?<Loading/>:asks?.map(data => <Item key={data.id} question={data}
    />) }

    </tbody>
  </table>
</div>
  )
}

export default Lister