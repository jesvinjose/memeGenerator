/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"
*/

import React from 'react'

function Greeting(props) {
    let name=props.name;
    let time=new Date().getHours();
    console.log(time);
    let timeOfDay;
    if(time>4&&time<12){
        timeOfDay = "morning"
    }else if(time>=12&&time<17){
        timeOfDay="afternoon"
    }else if(time>=17&&time<20){
        timeOfDay = "evening"
    }else{
        timeOfDay = "night"
    }
  return (
    <div>
      <p>Good {timeOfDay}, {name}!</p>
    </div>
  )
}

export default Greeting
