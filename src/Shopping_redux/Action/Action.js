import axios from 'axios';

let userdata=()=>{
    return(dispatch)=>{
        return axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((response)=>{dispatch(data(response.data))
        }) 
    }
}