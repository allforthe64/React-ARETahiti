import { query, collection, getDocs, getDoc} from 'firebase/firestore'
import { db } from "./firebase";

//query all the canoes in the canoe collection
export const getAllCanoes = async () => {
    const canoesQuery = query(collection(db, 'canoes'))
    const querySnapshot = await getDocs(canoesQuery)
    let data = []
    querySnapshot.forEach(doc => data.push({...doc.data(), id: doc.id}))
    return data
}

//query all the canoes in the canoe collection
export const getAllPaddles = async () => {
    const paddlesQuery = query(collection(db, 'paddles'))
    const querySnapshot = await getDocs(paddlesQuery)
    let data = []
    querySnapshot.forEach(doc => data.push({...doc.data(), id: doc.id}))
    return data
}

//query all apparel in the apparel collection
export const getAllApparel = async () => {
    const apparelQuery = query(collection(db, 'apparel'))
    const querySnapshot = await getDocs(apparelQuery)
    let data = []
    querySnapshot.forEach(doc => data.push({...doc.data(), id: doc.id}))
    return data
}

//query all parts and accessories in the partsAndAccessories collection
export const getAllPartsAndAccessories = async () => {
    const partsAndAccessoriesQuery = query(collection(db, 'partsAndAccessories'))
    const querySnapshot = query(collection(partsAndAccessoriesQuery))
    let data = []
    querySnapshot.forEach(doc => data.push({...doc.data(), id: doc.id}))
    return data
}