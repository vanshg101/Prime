import { createContext, useState } from "react";

export const GlobalContext = createContext('');

export default function GlobalState({children}){
 const[savedList,setSavedList]=useState([])


function handleAddToMyStuff(getCurrentItem){
    console.log(getCurrentItem)
    let cpySavedList = [...savedList]
    const index = cpySavedList.findIndex(item=>item.id === getCurrentItem.id)

    if(index === -1) {
        cpySavedList.push(getCurrentItem)
      } else {
        cpySavedList.splice(index,1)
      }
  
      setSavedList(cpySavedList)
    }
  
    console.log(savedList, 'savedList');
   
    return (
        <GlobalContext.Provider
          value={{
            savedList,
            handleAddToMyStuff,
            setSavedList
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    }

