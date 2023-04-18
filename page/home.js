import * as FileSystem from 'expo-file-system';
import { readAsStringAsync } from 'expo-file-system';
import { writeAsStringAsync } from 'expo-file-system';


// const data = [
//     {
//      test
//     },
// ]


export const WriteFile = async (data) => {
    //verifier le contenue de data


    try {
            // verifier si le fichier est vide
    const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')

    if (fileInfo.exists) {
        /// si oui lire le fichier et recup les donner
        const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
       // trouver un moyent pour ajouter le contenu passe en param au contenue existan
       // await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt' , fileContent + data)
    } else {
        //si non recup les donner
        await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
    }

    } catch (error) {
         console.log('erreur non catche writefile util.js; :', error)
    }

}


