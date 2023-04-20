import * as FileSystem from 'expo-file-system';
import { readAsStringAsync } from 'expo-file-system';
// import * as MailComposer from 'expo-mail-composer';
import * as MailComposer from 'expo-mail-composer'





export const WriteFile = async (data) => {
    
    //verifier le contenue de data


    try {
        
        
            // verifier si le fichier est vide
    const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')

    if (fileInfo.exists) {
        /// si oui lire le fichier et recup les donner
        const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
       // conbiner le deja la avec le nouveaux
       const newfile = fileContent + " " + data
       // et l'ecrire
       await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', newfile)
        
        console.log('file content if file exists: ', fileContent)
    } else {
        //si non recup les donner
        await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
    }

    } catch (error) {
         console.log('erreur non catche writefile util.js; :', error)
    }
    
}





export const mail = async (fileUri) => {

    const Urlfile = {
        attachments: [fileUri],
    }

    await MailComposer.composeAsync(Urlfile)
}