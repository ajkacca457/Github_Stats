import { createContext } from "react";


const AppContext= createContext();


const GithubProvider=({children})=>{

    return(
        <AppContext.Provider value={{name:"robin",age:20}}>
            {children}
        </AppContext.Provider>
    )

}


export {GithubProvider,AppContext};

