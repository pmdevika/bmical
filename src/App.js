import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Bmilist from './Components/Bmilist';
import Bmiscore from './Components/Bmiscore';

function App() {
 
  const [show,setshow]=useState(false);
  const[changeweight,setchangeweight]=useState({weight:"", type:""});
  const [bmi,setbmi] =useState("00")
  const [bmitype,setbmitype] =useState("Not Calculated")
  const[bmirange,setbmirange]=useState({
    underweight:{low: "" },
    normal:{ low: "", high: "" },
    overweight:{ low: "", high: "" },
    obesity1:{ low: "", high: "" },
    obesity2:{ low: "", high: "" },
    obesity3:{ high: "" },
  });
const onFormSub =(w,h) =>{
  let b=calbmi(w,h);
  setbmi(b);
  
   setbmitype(weighttype(b))
  console.log(w,h);
  const range={
    underweight:{low:calweight(18.5,h)},
    normal:{low:calweight(18.5,h),high:calweight(24.9,h)},
    overweight:{low:calweight(25,h),high:calweight(29.9,h)},
    obesity1:{low:calweight(30,h),high:calweight(34.9,h)},
    obesity2:{low:calweight(35,h),high:calweight(39.9,h)},
    obesity3:{high:calweight(40,h)},
  }
  setbmirange(range);
  setchangeweight(weightchange(b,w,range));
  setshow(true)
}
 const calbmi =(w,h) =>(w/(h*h)).toFixed(2);

 const calweight =(b,h) =>(b*h*h).toFixed(2);

const weightchange=(b,w,range)=>{
  let changeobj;
  if(b>24.9){
    changeobj={
      weight:(w-range.normal.high).toFixed(2),
      type:"positive"
    };
    return changeobj;
  
  }else if(b<18.5){
    changeobj={
      weight:(range.normal.low-w).toFixed(2),
      type:"negative",
    }
    return changeobj;
  }
  else{
    changeobj={weight: 0,type:"normal"};
    return changeobj;
  }
}

 const weighttype=(bmi)=>{
    if(bmi<18.5){
      return 'underweight';
    }else if(18.5<bmi && bmi<24.9){
      return "normal";
    }else if(24.9<bmi && bmi<29.9){
      return 'overweight';
    }else if (29.9<bmi && bmi<34.9){
    return 'obesity class1';
    }else if(34.9<bmi && bmi<39.9){
      return 'obesity class2';
    }else if(bmi>39.9){
      return 'obesity class3';
    }
 }
 
 let bmitypeColor;
switch(bmitype) {
  case 'underweight':
    bmitypeColor = 'blue';
    break;
  case 'normal':
    bmitypeColor = 'green';
    break;
  case 'overweight':
    bmitypeColor = 'orange';
    break;
  case 'obesity class1':
    bmitypeColor = 'red';
    break;
  case 'obesity class2':
    bmitypeColor = 'purple';
    break;
  case 'obesity class3':
    bmitypeColor = 'black';
    break;
  default:
    bmitypeColor = 'gray';
}


  return (
    <div className='container'>
    <div className='row justify-content-center mt-5 mx-2'>

  <Form getData={onFormSub} />
  </div>
  {show &&(
  <div className='row justify-conent-center mt-5'>
  <div className='col-12 col-sm-6 mb-5'>
  
  <Bmiscore bmino={bmi} bminame={bmitype} changeweight={changeweight} bmitypeColor={bmitypeColor} />

  </div>
  <div className='col-12 col-sm-6'>
  <Bmilist range={bmirange} bmi={bmi}/>
    </div>
    </div>
  )}
    </div>
  );
  }

export default App;



