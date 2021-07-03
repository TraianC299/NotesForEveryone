import {useState, useEffect} from "react"
import {database} from "../config"


const useDatabaseGlobally = (collection, subSubTopic) => {
    const [docs, setDocs] = useState(null)

    useEffect(()=>{
        const unsubscribe=
        database.collection(collection)

        .onSnapshot((snap)=>{let documents=[]
            //this snap is the collection at a moment in time, it is an array of documents, you can use the forEach function on it and store the documents inside the docimets variable
            snap.forEach(doc=>{
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })
        return ()=>unsubscribe()
    }, [collection])


    return (docs)
}

export {useDatabaseGlobally}




const useDatabase = (collection, subSubTopic) => {
    const [docs, setDocs] = useState(null)

    useEffect(()=>{
        const unsubscribe=
        database.collection(collection)
        .where("subSubTopic", "==", subSubTopic)
        .onSnapshot((snap)=>{let documents=[]
            //this snap is the collection at a moment in time, it is an array of documents, you can use the forEach function on it and store the documents inside the docimets variable
            snap.forEach(doc=>{
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })
        return ()=>unsubscribe()
    }, [collection])


    return (docs)
}

export default useDatabase

 
