import { query, collection, getDocs, getDoc, setDoc, doc, onSnapshot, deleteDoc, updateDoc} from 'firebase/firestore'
import { db } from "./firebase";

//firebase uuidv4 import
import {v4 as uuidv4} from 'uuid'

//query all the canoes in the canoe collection
export const getAllCanoes = async (setCanoeData) => {
    const q = query(collection(db, 'canoes'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const raceData = []
        querySnapshot.forEach(snapDoc => raceData.push({...snapDoc.data(), id: snapDoc.id}))
        setCanoeData(raceData)
    })

    return unsubscribe
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

//add the canoe data into inventory
export const addCanoe = async (canoeData) => {

    //generate a customId
    const customId = uuidv4().replace(/-/g, '').substring(0, 20);

    const canoeObj = {
        ...canoeData,
        id: customId
    }

    //add the canoe into the database
    setDoc(doc(db, 'canoes', customId), canoeObj)
}

//update the canoe data in inventory
export const updateCanoe = async (canoeData) => {
    await updateDoc(doc(db, 'canoes', canoeData.id), {...canoeData})
}

//delete the canoe from the inventory
export const deleteCanoe = async (docId) => {
    await deleteDoc(doc(db, 'canoes', docId))
}