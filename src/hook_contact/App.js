import React, {useState,useEffect} from 'react'
import Axios from "axios";
import Contact from './contact/contact'
import Card from './card/card'

export default function App() {
    
    /*let [contact,setContact]=useState(null);
    let [select,setSelect]=useState(null);
    

    
    useEffect(()=>{
        getApi();
    },[]);

    const getApi=async()=>{
        const response= await fetch("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist");
        const data= await response.json();
        setContact(data);
    }*/
    
    let [contact,setContact]=useState({
        contact:null,
        selectContact:null,
        error:null
    })
    
    useEffect(()=>{
        let URL= "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(URL)
        .then((Response)=>{
            setContact({
                ...contact,contact:Response.data
            });
        })
        .catch((err)=>{
            setContact({
                ...contact,error:err
            });
        });
    },[]);

    let pulldata=(event)=>{
        setContact({...contact,selectContact:event})
    }
    
    return (
        <>
         <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    {contact!=null?
                    (
                    <>
                    <Contact
                    contact={contact.contact}
                    pulldata={pulldata}/>
                    </>)    
                    :null}
                </div>
                <div className='col-md-4'>
                    <Card selectContact={contact.selectContact}/>
                </div>
            </div>
        </div>
        </>
    )
}
