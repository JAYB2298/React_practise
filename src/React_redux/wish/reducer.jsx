import {Gmorning,Gnight} from './action'

let initialstate={
    message:'Hello,...'
}

let reducer=(state=initialstate,action)=>{
         switch(action.type){
             case Gmorning:
                 return{
                     message:'Good Morning'
                 };
            case Gnight:
                return{
                    message:'Good Night'
                }
            default:
                return state;

         }
}
export {reducer};

