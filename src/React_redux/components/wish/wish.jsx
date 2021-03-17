import React from 'react'
import {sayGMaction,sayGNaction} from '../../wish/action'
import {useSelector,useDispatch} from 'react-redux';


let Wishmessage=()=>{
    let dispatch=useDispatch();
    let message=useSelector((state)=>{
        return state.message;
    });
    
    let sayGm=()=>{
        dispatch(sayGMaction());
    }
    let sayGn=()=>{
        dispatch(sayGNaction());
    }


    return <>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <pre>{JSON.stringify(message)}</pre>
                        <h4>Message:{message.message}</h4>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-primary mr-2" onClick={sayGm}>Good Morning</button>
                        <button className="btn btn-success" onClick={sayGn}>Good Night</button>

                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
}

export  {Wishmessage};