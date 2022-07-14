import { db } from "../firebase";
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore'

const productCollectionRef = collection(db, 'products')

class ProductDataService {
    getAllProducts = () => {
        return getDocs(productCollectionRef)
    }

    getProduct = (id) => {
        const productDoc = doc(db, 'products', id)
        return getDocs(productDoc)
    }
}

export default new ProductDataService()