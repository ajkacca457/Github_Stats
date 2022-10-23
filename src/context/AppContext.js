import { createContext } from "react";
import {user,repos,followers} from "./MockData/mockData";


const AppContext= createContext();


const GithubProvider=({children})=>{

    return(
        <AppContext.Provider value={{user,repos,followers}}>
            {children}
        </AppContext.Provider>
    )

}


export {GithubProvider,AppContext};

