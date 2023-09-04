import { storage } from "../firebase";
import { ref, uploadBytes , getDownloadURL } from "firebase/storage";

export const upload = async(file) =>{
    try {
        
   

    console.log('upload/file:',file)

    //creation de la ref 
    const imageRef = ref(storage , `images/${file.name}`);


    //enregistrement fichier sur firestore

    const snapShot = await uploadBytes(imageRef,file);

    //recuperation url
    const url = await getDownloadURL(snapShot.ref);
    return url;

    } catch (error) {
        
        return null;
    }

}
