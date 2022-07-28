import { db } from "../firebase";
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore'

const productCollectionRef = collection(db, 'products')
const currentEventsRef = collection(db, 'current_events')
const coinsRef = collection(db, 'coins')

class ProductDataService {
    getAllProducts = () => {
        return getDocs(productCollectionRef)
    }
    getAllCurrentEvents = () => {
        return getDocs(currentEventsRef)
    }
    getCoins = () => {
        return getDocs(coinsRef)
    }


    // getProduct = (id) => {
    //     const productDoc = doc(db, 'products', id)
    //     return getDocs(productDoc)
    // }
}

export default new ProductDataService()