import { ref, uploadBytes, getDownloadURL, deleteObject } from "@firebase/storage";
import { storage } from "./firebase";

import { format } from 'date-fns'

//bucket URL from storage in firebase console
const BUCKET_URL = 'gs://kenpaddleshop.firebasestorage.app'

//upload image and return the storage bucket
export const uploadCanoeImage = async (image) => {

    //generate bucket path
    const bucket = `${BUCKET_URL}/canoeImages/${image.name}.${format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")}`

    //upload image and return result object
    const result = uploadBytes(ref(storage, bucket), image)
    return result
}

//get the downloadable url from incoming path
export const getDownloadableURL = async (path) => {
    return await getDownloadURL(ref(storage, path))
}