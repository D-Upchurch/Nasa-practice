import { Photo } from './Photo.js'
import { getPhotos, usePhotos } from '../data/DataManager.js'

const target = document.querySelector(".target-flex")

export const photoList = () => {
    getPhotos()
    .then(() => {
        let singleObj = usePhotos()
        console.log(singleObj)
        let photoHTML = "";
        photoHTML += Photo(singleObj)
        
        target.innerHTML += photoHTML;
        
    })
}
