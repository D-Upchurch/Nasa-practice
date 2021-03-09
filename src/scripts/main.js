import { getPhotos } from './data/DataManager.js'
import { photoList } from './Feed/photoList.js'

// const showPhotoList = () => {
//     const photoElement = document.querySelector(".target-flex");
//         getPhotos().then((photoObj) => {
//             photoElement.innerHTML = photoList(photoObj);
//         })
// };
getPhotos().then(photoList());

