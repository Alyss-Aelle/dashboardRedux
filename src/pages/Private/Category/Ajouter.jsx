import React,{useState} from 'react'
import {addDataToCollection} from '../../../commonjs/db'

const Ajouter = () => {

    //initialisation de mon state
    const [catName, setCatName] = useState("") ; 

    //recuperation et mise a jour de la donnée de l'input
    const handleChangeCategory = (event) => { 

        setCatName(event.target.value)

     }

     //sauvegarde en base de donnée
    const save = async() => { 
        
        if (catName != "") {
            console.log('save')
            setCatName("")

            const data = {name : catName}//formatage data du formulaire

            await addDataToCollection("category", data) ;
        }else{
            console.log("no save")
        }
     }

  return (
    <div className='flex flex-row gap-4 justify-center ' >

        <input value={catName } onChange={handleChangeCategory} className='input input-bordered input-primary w-full max-w-xs' name='formCategory' type='text' />
        <button onClick={save} className="btn btn-outline btn-primary"> Ajouter </button>

    </div>
  )
}

export default Ajouter