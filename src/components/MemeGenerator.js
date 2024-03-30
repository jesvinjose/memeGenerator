import React, { useEffect, useState } from "react";
import icon from "../images/Troll Face.png";
// import meme from "../images/Group 1.png";
import "./MemeGenerator.css";
// import obj from "../memesData";

function MemeGenerator() {
  /*
Challenge
Save the random meme url in state
Create new state called `memeImage` with an empty string as default
When the getMemeImage function is called, update the memeImage state to be the random chosen image url
Below the div.meme, add an <img/> and set the src to the new `memeImage` state you created

*/

  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  /**
   * Challenge:
   * Try to figure out why our code is broken! 😞
   *
   * Hint: it has to do with the difference between
   * what we were importing before from memesData.js
   * and what we're setting our state as with `allMemes`
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  // console.log("rendering");

  const getMemeImage = () => {
    let x = Math.floor(Math.random() * allMemes.length);
    const url=allMemes[x].url;
    const name = allMemes[x].name;

    // Split the name into words
    const words = name.split(" ");
    console.log(words);
    const halfLength = Math.ceil(words.length / 2); // Get the half length of words
  
    // Join the first half of the words and assign to topText
    const topText = words.slice(0, halfLength).join(" ");
    // Join the second half of the words and assign to bottomText
    const bottomText = words.slice(halfLength).join(" ");
    setMeme((prevState) => {
      return {
        ...prevState,
        topText:topText,
        bottomText:bottomText,
        randomImage: url,
      };
    });
  };

  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
    // async function getMemes() {
    //   const res = await fetch("https://api.imgflip.com/get_memes");
    //   const data = await res.json();
    //   setAllMemes(data.data.memes);
    // }
    // getMemes();
    // return ()=>{
    //No need to unmount any component so we doesnt need to cleanup anything here.
    // }
  }, []);

  console.log(meme,"------meme----------");

  //Replace the above with async await

  // useEffect(async()=>{
  //   const res=await fetch("https://api.imgflip.com/get_memes")
  //   const data=await res.json()
  //   setAllMemes(data.data.memes)
  // },[])

  console.log(allMemes, "--------allMemes");

  const setText = (event) => {
    setMeme((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  // const getMemeImage = () => {
  //   let x = Math.floor(Math.random() * obj.data.memes.length);
  //   console.log("Loaded", obj.data.memes[x].url);
  //   setMemeImage(obj.data.memes[x].url);
  // };

  return (
    <div className="outest">
      <div className="outer">
        <div className="headingBar">
          <div className="iconAndHeading">
            <img className="icon" src={icon} alt="icon" />
            <h2>MemeGenerator</h2>
          </div>
          <div className="project">
            {/* <h4>React Course-Project 3</h4> */}
          </div>
        </div>
        <div className="selectionBox">
          <div className="topText">
            <h5>Top Text</h5>
            <input
              placeholder="Top text"
              type="text"
              className="inputSelection"
              name="topText"
              onChange={setText}
              value={meme.topText}
            />
          </div>
          <div className="bottomText">
            <h5>Bottom Text</h5>
            <input
              placeholder="Bottom Text"
              type="text"
              className="inputSelection"
              name="bottomText"
              onChange={setText}
              value={meme.bottomText}
            />
          </div>
        </div>
        <div className="buttonDiv">
          {/* <button className="button"> <p>Get a new meme image</p> 🖼</button> */}
          <button className="button" onClick={getMemeImage}>
            <p className="buttonText">Get a new meme image</p>
            <span role="img" aria-label="image">
              🖼
            </span>
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} alt="meme" />
          {/* <img src={memeImage} alt="meme"/> */}
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}

export default MemeGenerator;
