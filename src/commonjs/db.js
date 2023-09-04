import { dbFirestore } from "../firebase";
import { doc, getDoc, query,collection, getDocs, addDoc} from "firebase/firestore";

//       Created by : AA
//       selectionner un element a partir de son ID
/*       PARAMS:
 *        collectionName = "nom de la collection"
 *        id = "id de la collection"
 **/

export const getOneByID = async (collectionName, id) => {
        console.log("lancement chargement");

        const rq = doc(dbFirestore, collectionName, id);
        const snapShot = await getDoc(rq);

        return snapShot.exists ? snapShot.data() : null;

  //   if (snapShot.exists) {
  //     return snapShot.data();
  //   }else{
  //     return null;
  //   }
};


//selectionner tous les items pour les afficher
/*       PARAMS:
 *        collectionName = "nom de la collection"
 *        
 **/

export const getAll = async(collectionName) => { 
    

    //preparation de la requete sur 
    const rq = query(collection(dbFirestore,collectionName ));
    //lance la requete
    const snapShot = await getDocs(rq);
    //tester que le tableau n'est pas vide
    if (!snapShot.empty) {

      const dataTemp = snapShot.docs.map(item => {

        return {id:item.id, ...item.data() };
      })
      
      //mise a jour 
      return dataTemp;
    }else{
        return [];
    }

   }

   export const addDataToCollection = async (collectionName, data) => {


    //ajouter en base
    return await addDoc(collection(dbFirestore, collectionName), data);
   }