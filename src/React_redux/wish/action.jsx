let Gmorning='Hello GM'
let Gnight='Hello GN'

let sayGMaction=()=>{
       return{
           type:Gmorning
       };
}

let sayGNaction=()=>{
       return{
           type:Gnight
       };
}

export {sayGMaction,sayGNaction,Gmorning,Gnight}