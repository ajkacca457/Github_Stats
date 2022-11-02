import { useEffect } from "react";
import { useState,createContext } from "react";
import {user,repos,followers} from "./MockData/mockData";


const AppContext= createContext();
const rootUrl="https://api.github.com";


const GithubProvider=({children})=>{

    const [gituser,setGitUser]= useState(user);
    const [gitrepos,setGitRepos]= useState(repos);
    const [gitfollowers,setGitFollowers]= useState(followers);
    const [requestlimit,setRequestLimit]= useState(0);
    const [isloading,setIsloading]=useState(false);
    const [error, setError]= useState({show:false,msg:""});


    const toggleError= (show=false,msg="")=> {
        setError({show,msg});
    }

    const getRequestRate=async()=> {
        const response= await fetch(`${rootUrl}/rate_limit`)
        const data= await response.json();
        const {rate: {remaining}}= data;
        setRequestLimit(remaining);
        if(remaining===0) {
            toggleError(true,"It is not possible to make over 60 request in an hour. Please try again")
        }
    }

    const getGithubUser=async(user)=> {
        setIsloading(true);
        toggleError();
        try {
            const response= await fetch(`${rootUrl}/users/${user}`);
            console.log(response);
            if(response.ok) {
                const data= await response.json();
                setGitUser(data);
            }else {
                toggleError(true,"no user exists by this name");
             }
            setIsloading(false);                          
        } catch (error) {
            toggleError(true, error.message);
        }

    }

    useEffect(()=> {
        getRequestRate();
    },[])  

    return(
        <AppContext.Provider value={{gituser,gitrepos,gitfollowers,requestlimit, error,getGithubUser,isloading}}>
            {children}
        </AppContext.Provider>
    )

}


export {GithubProvider,AppContext};

