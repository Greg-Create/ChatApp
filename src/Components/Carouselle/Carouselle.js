import React from "react";
import "./Carouselle.css"
import Card from "../Cards/Cards"
import {AiOutlineArrowRight} from "react-icons/ai"


function Carouselle (props){


    const prompts = [


        {Question: "What is Your Name?",
         Answer: "I always dreamed about being stranded on a desert island until it actually happened. ",
         Profile: "https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png",
         Categories: ["Music"],
         Author: "John Doe",
         Likes: 5},
         {Question: "What is Your age?",
         Answer: "Standing on one's head at job interviews forms a lasting impression.",
         Profile: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
         Categories: ["Literacy", "Music"],
         Author: "Alex Doe",
         Likes: 2},
         {Question: "What is Your location?",
         Answer: "His thought process was on so many levels that he gave himself a phobia of heights.",
         Profile: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
         Categories: ["Gaming"],
         Author: "John Doe",
         Likes: 8},
         {Question: "What is Your age?",
         Answer: "Standing on one's head at job interviews forms a lasting impression.",
         Profile: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
         Categories: ["Literacy", "Music"],
         Author: "Alex Doe",
         Likes: 2},
         {Question: "What is Your location?",
         Answer: "His thought process was on so many levels that he gave himself a phobia of heights.",
         Profile: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
         Categories: ["Gaming"],
         Author: "John Doe",
         Likes: 8},
         {Question: "What is Your age?",
         Answer: "Standing on one's head at job interviews forms a lasting impression.",
         Profile: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
         Categories: ["Literacy", "Music"],
         Author: "Alex Doe",
         Likes: 2},
         {Question: "What is Your location?",
         Answer: "His thought process was on so many levels that he gave himself a phobia of heights.",
         Profile: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
         Categories: ["Gaming"],
         Author: "John Doe",
         Likes: 8}

    ]

    return(
        <div className="Carouselle">
            <div className="popular">
            <h1>{props.title}</h1>
            <AiOutlineArrowRight className="icon" />
            </div>
            <div className="prompts">
        {prompts? prompts.map(promp=> <Card categories={promp.Categories} profile={promp.Profile} question={promp.Question} answer={promp.Answer} author={promp.Author} like={promp.Likes}/> ) : ""}
            </div>
        </div>
    )

}


export default Carouselle