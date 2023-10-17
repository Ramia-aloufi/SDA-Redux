import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface CompanyType {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description?: string | null;
  }

  export interface CompaniesStateType {
    data:CompanyType[];
    isLoading:boolean;
    error:string | null
  }
  

const initialState:CompaniesStateType ={
    data:[],
    isLoading:false,
    error:null
}

export const fetchData = createAsyncThunk('companies/fetchData', 
async()=>{
 
    const response = await fetch('https://api.github.com/organizations');
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
    const data:CompanyType[] = await response.json();
    return data
  

})


// fitch is a Promise return: pending - fulfilled - rejected

const CompaniesReducer = createSlice({
    name:'companies',
    initialState: initialState,
    reducers:{},
    extraReducers:builder =>{
        builder
        .addCase(fetchData.pending,(state)=>{state.isLoading = true})
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.isLoading = false 
            state.error = (action.payload as Error).message || 'An error occurred.';
        })
    }

});

export default CompaniesReducer.reducer
export const selectCompanies = (state: RootState) => state.companyR;

