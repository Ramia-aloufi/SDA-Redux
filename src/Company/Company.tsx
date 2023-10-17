import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchData } from "./CompanySlice";
import { RootState, store } from "../Store";

const Company = () => {
   type AppDispatch = typeof store.dispatch
    const dispatch = useDispatch<AppDispatch>()

    const {data,isLoading,error} = useSelector((state:RootState)=> state.companyR)
 

    useEffect(() => {
        dispatch(fetchData());
      }, [dispatch]);

    if(isLoading){
        return <p>Loading Data</p>
    }
    if(error){
        return <p>{error}</p>
    }


  return (
    <>
    <h2>Company App</h2>
    <ul>
        {data.map((comp)=>{
            return <li key={comp.id}>{comp.login}</li>
        })}
        </ul>

    </>
    
  )
}

export default Company