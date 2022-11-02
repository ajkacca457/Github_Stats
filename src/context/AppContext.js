import { useState,createContext } from "react";
import {user,repos,followers} from "./MockData/mockData";


const AppContext= createContext();


const GithubProvider=({children})=>{

    const [gituser,setGitUser]= useState(user);
    const [gitrepos,setGitRepos]= useState(repos);
    const [gitfollowers,setGitFollowers]= useState(followers);
    const [requestlimit,setRequestLimit]= useState(0);
    const [isloading,setIsloading]=useState(false);
    const [error, setError]= useState({show:false,msg:""});



    return(
        <AppContext.Provider value={{gituser,gitrepos,gitfollowers}}>
            {children}
        </AppContext.Provider>
    )

}


export {GithubProvider,AppContext};

