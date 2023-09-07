import React,{useState, useEffect} from 'react'
import {addDataToCollection, getAll} from '../../../commonjs/db'

const Ajouter = () => {

    //initialisation de mon state
    const [ask, setAsk] = useState("") ; 
    const[categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    //recuperation et mise a jour de la donnée de l'input
    const handleChangeAsk = (event) => { 

        setAsk(event.target.value);

     }

     //mise a jour champ select
     const handleDropCategory = (event) => { 
        
        setSelectedCategory(event.target.value ) ; 
      }

     //sauvegarde en base de donnée
    const save = async() => { 
        
        if (ask != "" && selectedCategory !='') {
            console.log('save'); 
            setAsk(""); 

            const data = {
                category : selectedCategory,
                question : ask}//formatage data du formulaire

            await addDataToCollection("questions", data) ;
        }else{
            console.log("no save") ;
        }
     }
     //gestion de categories

    

    
    const initData = async() => { 
        
        const dataTemp = await getAll('category');

        setCategories(dataTemp) ;

    }

    useEffect(() => {

    initData() ;

    }, []);

  return (
    <div className='flex flex-row gap-4 justify-center ' >

        <select value={selectedCategory} onChange={handleDropCategory} className="select select-bordered w-full max-w-xs">
        
        {/*  */}
        <option defaultValue={'' }>Selectionner une categorie</option>
            {categories?.map(data => <option value={data.id} key={data.id}>{data?.name}</option>)}
        </select>

        <input value={ask } onChange={handleChangeAsk} className='input input-bordered  w-full max-w-xs' type='text' />
        <button onClick={save} className="btn btn-outline border-blue-400 hover: bg-gradient-to-r from-blue-400 to-violet-400"> Ajouter </button>

    </div>
  )
}

export default Ajouter