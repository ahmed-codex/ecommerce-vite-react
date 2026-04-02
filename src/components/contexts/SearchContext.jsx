import React, { createContext, useEffect, useState } from 'react'


export const searchContext = createContext()

const SearchProvider = ({children}) => {
    const [SearchTirm , setSearchTirm] = useState("");
        const [SearchItem , setSearchItem] = useState([]);
    
        useEffect(()=>{
    
            if(!SearchTirm.trim()){
                setSearchItem([])
                return
            }
    
            const controller = new AbortController()
            const delay = setTimeout(()=>{
                const fetchItem = async()=>{
    
                    try{
                        const res = await fetch(`https://dummyjson.com/products/search?q=${SearchTirm}`)
                        const data = await res.json();
                        setSearchItem(data.products)
                    }
                    catch(error){
                        console.error("Error Search",error)
                        setSearchItem([])
                    }
                }
                fetchItem()
            },400);
    
            return () => {
                clearTimeout(delay),
                controller.abort()
            }
    
        },[SearchTirm])
    
        
  return (
    <searchContext.Provider value={{
        setSearchTirm,
        SearchTirm,
        setSearchItem,
        SearchItem
    }}
    >
    {children}
    </searchContext.Provider>
  )
}

export default SearchProvider
