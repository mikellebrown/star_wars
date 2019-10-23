import React, { useEffect } from 'react'
import StarfieldAnimation from 'react-starfield-animation';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Person = (props) => {
    
    const { p } = props.location.state;
    useEffect(() => {
        axios.get(p.homeworld).then(res => { 
            debugger
            p.homeworld = res.data.name
        })
    }, )

    return (
        
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
          <div className="person-container" style={{justifyContent: "center", marginTop: "120px"}}>
                <div className="person-container2">
                    {p.name}
                    {p.homeworld}
                    <Button as={Link} to={{pathname: `/`, state: {p}}} style={{marginTop: "40px"}}>Back</Button>
                </div>
        </div>
    </div>

    )
}

export default Person;