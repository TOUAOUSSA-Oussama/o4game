import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Axios from 'axios'
import './Game_Start_Style.css';
import startGame from '../../assets/presstar3.gif';
import { useNavigate } from 'react-router-dom';

function Game_Start() {
    const history = useNavigate();

    const [nomJoueur1, setNomJoueur1] = React.useState("");
    const [nomJoueur2, setNomJoueur2] = React.useState("");
    const [nbre1, setNbre1] = React.useState("");
    const [nbre2, setNbre2] = React.useState("");

    const [validation1, setValidation1] = React.useState(false);
    const [validation2, setValidation2] = React.useState(false);
    

    // async function componentDidMount() {

    //     const url = "http://localhost:9000/Researchers";
    //     const response = await fetch(url);

    //     const listeChercheurs = await response.json();
        
    //     setResearchers(listeChercheurs)
    //     console.log(researchers);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        // let data = {
        //     researcherId: chercheur,
        //     labellisation: labellisation,
        //     description: description,
        //     managers: managers,
        //     affiliation: affiliation,
        //     creationDate: formattedDate,
        //     openPrivateResearchers:checkbox};
        // Axios.post("http://localhost:9000/Api/AddPlatform", data)
        // .then(res => {
        //     console.log(res.data)
           
        // })
        // window.location.reload();
        history('/Game');
    }

    const handleSubmit1 = (event) => {
        setValidation1(true);
    }

    const handleSubmit2 = (event) => {
        setValidation2(true);
    }

    return (
        <div>
            {
                validation1 && validation2 ? (
                    <div class="pg">
                        <img class="labo" src={startGame} alt= "let's go" onClick={handleSubmit}/>
                    </div>
                ) : (
                    <div className='form-container'>
                        {
                            validation1 ? (
                                <div className='form'>
                                    <a href="/" class="close-button">&#10006;</a>
                                    <h3 className='title'> 1st player :  </h3>
                                    <label className='label' >
                                        Player name : {nomJoueur1}
                                    </label>
                                </div>
                            ) : (
                                <form className='form' onSubmit={handleSubmit1}>
                                    <a href="/" class="close-button">&#10006;</a>
                                    <h3 className='title'> 1st player : </h3>
                                    <label className='label' >
                                        Player name :
                                    </label>
                                    <input
                                        placeholder='Enter player name'
                                        className='input-container'
                                        name="nomJoueur1"
                                        value={nomJoueur1}
                                        type="text"
                                        onChange={e => setNomJoueur1(e.target.value)}
                                        required />

                                    <label className='label' >
                                        Game number
                                    </label>
                                    <input
                                        placeholder='Enter 3 different digits from 0 to 9'
                                        className='input-container'
                                        name="nbre1"
                                        type="password"
                                        maxLength={3}
                                        value={nbre1}
                                        onChange={e => setNbre1(e.target.value)}
                                        required />
                                    
                                    <button className='submit'>Submit</button>
                                </form>
                            )
                        }

                        {
                            validation2 ? (
                                <div className='form'>
                                    <a href="/" class="close-button">&#10006;</a>
                                    <h3 className='title'> 2ème joueur :  </h3>
                                    <label className='label' >
                                        Player name : {nomJoueur2}
                                    </label>
                                </div>
                            ) : (
                                <form className='form' onSubmit={handleSubmit2}>
                                    <a href="/" class="close-button">&#10006;</a>
                                    <h3 className='title'> 2nd player :  </h3>
                                    <label className='label' >
                                        Player name
                                    </label>
                                    <input
                                        placeholder='Enter player name'
                                        className='input-container'
                                            name="nomJoueur2"
                                            type="text"
                                            value={nomJoueur2}
                                            onChange={e => setNomJoueur2(e.target.value)}
                                            required />

                                        <label className='label' >
                                            Game number
                                        </label>
                                        <input
                                            placeholder='Enter 3 different digits from 0 to 9'
                                            className='input-container'
                                            name="nbre2"
                                            type="password"
                                            maxLength={3}
                                            value={nbre2}
                                            onChange={e => setNbre2(e.target.value)}
                                            required />
                                        
                                        <button className='submit'>Submit</button>
                                </form>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Game_Start;