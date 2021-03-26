import React,{useState,useEffect} from 'react'
import {Recipe} from './Recipe'
let App=()=> {
    
    let [Recipee,setRecipe]=useState([]);
    let [Search,setSearch]=useState("");
    let [Query,setQuery]=useState("chicken");

    let APP_ID='b43b3d12'
    let APP_kEY='8a047a93fc41231ae8138ef096ec14e4'
    
    useEffect(()=>{
        getRecipe();
    },[Query]);

    const getRecipe=async()=>{
        const response= await fetch(`https://api.edamam.com/search?q=${Query}&app_id=${APP_ID}&app_key=${APP_kEY}`);
        const data= await response.json();
        setRecipe(data.hits);
        console.log(data);
    }

    const udpateSearch=(event)=>{
        setSearch(event.target.value)
        console.log(Search)
    }

    const getSearch=(event)=>{
        event.preventDefault();
        setQuery(Search);
        setSearch("")
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <form onSubmit={getSearch} className='Search-form'>
                        <input classNAme='search-bar' type='text' value={Search} onChange={udpateSearch}/>
                         <button classNAme='seacrch-button' type='submit'>Search</button>
                    </form>

                    {Recipee.map(recipe=>(
                        <Recipe
                        classNAme='col-md-3' 
                        key={recipe.recipe.label}
                        Title={recipe.recipe.label}
                        Calorie={recipe.recipe.calories}
                        Image={recipe.recipe.image}
                        />))
                    }
                </div>
            </div>
        </div>    
    )
}

export default App;