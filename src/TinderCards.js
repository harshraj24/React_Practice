import { requirePropFactory, SwipeableDrawer } from '@material-ui/core';
import React,{ useState } from 'react';
import TinderCard from 'react-tinder-card';
import jeff from './jeff.jpeg';
import elon from './elon.jpeg';

function TinderCards() {
    const [people,setPeople]=useState([
        {
            name:"Elon Musk",
            url:"https://www.google.com/search?q=jeff+bezos+biography&sxsrf=ALeKk02Vsg_iPTdGiaSW35slNuigJ_n4ew:1610011835114&tbm=isch&source=iu&ictx=1&fir=EXLk3oB30lOmiM%252Ck5xznkSnYiHHhM%252C%252Fm%252F011z69&vet=1&usg=AI4_-kRQDIybHDfjLaJOfi3T6y63TPdjAQ&sa=X&ved=2ahUKEwiEg5C8wYnuAhUpzjgGHTwIDRwQ_B16BAgzEAE&biw=1440&bih=636#imgrc=EXLk3oB30lOmiM"
          },
        {
            name:"Jeff Bezos",
            // url:require('./jeff.jpeg')
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing : "+nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen !");
    };

    return (
        <div className="tinderCards">
            <div className="TinderCardsContainer">
                {people.map((person) => (
                    <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={"up","down"}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: `url(require("elon.jpeg"))` }}  className="card">
                            <h1>{person.name}</h1>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
