import React, { Component } from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import { Button, } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './App.css';

class People extends Component {
    state = { 
        data: [], 
    }

    getCharacters = () => {
        axios.get('https://swapi.co/api/people')
            .then( res => {
                let {results} = res.data
                for (let i = 0; i < results.length; i++) {results[i].id = i }
            
                this.setState({ data: results })
                console.log(results)
            })
            .catch( err => {
                console.log(err);
            })
    }

    showPerson = (id) => {
        axios.get(`api/person/${id}/`)
    }
        
    

    render() {
        return(
            <div className="app-container">
                <div className="header-container">
                    <div className="header-text">StarWars</div>
                    </div>
                    <StarfieldAnimation 
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%'
                        }}
                        
                        />
                    <div className="border-box">
                        {this.state.data.map(p => {
                            return (
                                    <div className="person-container">
                                        <div className="person-container2" key={p.url}>
                                            {p.name}
                                            <Button as={Link} to={{pathname: `/person/${p.id}`, state: {p}}} style={{marginTop: "40px"}}>+</Button>
                                        </div>
                                    </div>
                            

                            )
                        })}
                    </div>
                <div className="button-container">
                    <Button onClick={this.getCharacters} style={{marginTop: "35px"}} getCharacters={this.getCharacters}>Show Characters</Button>
                </div>
            </div>
        );
    };
};
export default People;