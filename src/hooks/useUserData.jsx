import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export function useUserData(userId) {
    const [userData, setUserData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (!userId) return; // null or undefined is passed, so just do nothing
  
      const unsubscribe = onSnapshot(doc(db, "users", userId), (doc) => {
        setIsLoading(false);
        if (doc.exists()) {
          setUserData(doc.data()); // found and setting a user
        } else {
          setUserData(null); // null means user not found in users collection
        }
      });
  
      return () => unsubscribe();
    }, [userId]);
  
    return { userData, isLoading };
  }