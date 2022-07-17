import { db } from "../firebase";
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore'

const productCollectionRef = collection(db, 'products')
const currentEventsRef = collection(db, 'current_events')
class ProductDataService {
    getAllProducts = () => {
        return getDocs(productCollectionRef)
    }
    getAllCurrentEvents = () => {
        return getDocs(currentEventsRef)
    }

    // getProduct = (id) => {
    //     const productDoc = doc(db, 'products', id)
    //     return getDocs(productDoc)
    // }
}

export default new ProductDataService()