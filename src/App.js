import './App.css'; 
import BarChart from "react-bar-chart" 
import React from 'react'; 
import Quote from './myThs/quote'; 
import moment from 'moment'; 
import Radio from './myThs/radio'; 



import "./styles/WriteAndChoose.css" 
import {useState, useRef, useEffect} from 'react'; 
let data = []; 
function App() { 
  
  const inputRef = useRef(); 
  
  const [sumsArrey, setSums] = useState(() =>{ 
   const saveSums = localStorage.getItem("sumsArrey"); 
    // console.log(JSON.parse(localStorage.getItem("sumsArrey"))) 
      if(saveSums) { 
        return JSON.parse(saveSums); 
         
      } else { 
        return []; 
      } 
  }) 
 
  const [oneSumThing, setSumOneThing] = useState(""); 
  useEffect(() => { 
    let radioVal = localStorage.getItem("radioVal"); 
    localStorage.setItem("sumsArrey", JSON.stringify(sumsArrey)); 
    localStorage.setItem("dataArrey", JSON.stringify(valueDate)); 
    localStorage.setItem("radioArrey", JSON.stringify(radioVal)); 
  }, [sumsArrey]) 
    function handleInputChange(e) { 
      setSumOneThing(e.target.value) 
    } 
    const [valueDate, setValue] = useState(moment().format('YYYY-MM-DD')); 
    const onChangeDate = e => { 
      const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD'); 
      setValue(newDate); 
    }; 
    const [valueData2, setValue2] = useState(moment().format('YYYY-MM-DD')); 
     
    function handleFormSubmit(e) { 
      inputRef.current.value = ""; 
      e.preventDefault(); 
      if (oneSumThing !== "") { 
        let radioVal = localStorage.getItem("radioVal"); 
        setSums([...sumsArrey,{valueDate: valueDate, text: radioVal, oneSumThing:oneSumThing} ]); 
      } 
    } 
    
  //   function handleBarClick(element, id){  
  //     console.log(`The bin ${element.text} with id ${id} was clicked`); 
  //   } 
    
  //   const data = [{
  //     value: 10,
  //     text: "Hobbies",
  //   },
  //   {
  //     value: 10,
  //     text: "Career",
  //   },
  //   {
  //     value: 10,
  //     text: "Family",
  //   },
  //   {
  //     value: 10,
  //     text: "Environment",
  //   },
  //   {
  //     value: 10,
  //     text: "Education",
  //   },
  //   {
  //     value: 10,
  //     text: "Vacation",
  //   },
  //   {
  //     value: 10,
  //     text: "Healthy and sports",
  //   }];
  //  function buttonInput2() {
  //   for(let x = 0; x<sumsArrey.length; x++){ 
  //     if(sumsArrey[x].valueDate === valueDate){ 
  //       for(let z = 0;z<data.length;z++){ 
  //         if(data[z].text === sumsArrey[x].text ){ 
  //           data[z].value = sumsArrey[x].oneSumThing; 
  //         } 
  //       } 
         
  //     } 
  //   }
  //  }


  return ( 
    <div> 
      <header className="headerProj">Your life balance is the key to financial well-being</header> 
      {/* <button onClick={buttonInput2}></button>  */}
      {/* <BarChart></BarChart> */}
      {/* <BarChart ylabel='UAN' 
                  width={100} 
                  height={500} 
                  data={data} 
                  onBarClick={handleBarClick}/>  */}
      <section className="WriteAndChoose"> 
      <form onSubmit={handleFormSubmit}> 
      <div className="inputDiv"> 
          <h4>Choose date:</h4> 
          <input onChange={onChangeDate} value={valueDate} type="date"></input> 
        </div> 
      <Radio></Radio> 
      <div className="inputDiv"> 
        <h4>Input your costs (₴)</h4> 
          <input className="input" placeholder="Write your outgoings..." 
           type="number" 
           value={oneSumThing} 
           name='input1'  
           ref={ inputRef } 
           onChange={handleInputChange}> 
          </input> 
          <button className="inputButton" onClick={handleFormSubmit}>Save</button> 
      </div> 
      </form> 
      </section> 
 
       
      <div className="outgoings-list"> 
        {sumsArrey.map((todoThing) => ( 
          <div className="mapElement" > <div>{todoThing.text} -</div> <div>{ todoThing.oneSumThing }₴ in {todoThing.valueDate}</div></div> 
        ))} 
      </div>
      <div></div> 
      <Quote></Quote> 
    </div> 
 
  ); 
}


export default App;

