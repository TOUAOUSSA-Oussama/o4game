import React from 'react';
import './HomeStyle.css';
import letsgo from '../../assets/let-go-bg.png';
import { useNavigate } from 'react-router-dom';

function Home(){
    const history = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        history('/Game');
    }

    return (
        <div>
            <div class="container1" >
                <div class="left-side">
                    <div class="title">
                        WELCOME TO THE GAME
                    </div>
                    
                </div>
                <div class="pg">
                    <img class="labo" src={letsgo} alt= "let's go" onClick={handleSubmit}/>
                </div>
                {/* <div class="right-side">
                    
                </div> */}
            </div>
        </div>
    );
};

export default Home;

