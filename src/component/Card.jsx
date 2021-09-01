import React from 'react'

function Card(props) {
    console.log(props)

    return (
        <div className="card">
            <div>
                <img src={props.p1} style={{ width: '50px', height: '50px', margin: '10px' }} />
                <img src={props.p2} style={{ width: '50px', height: '50px', margin: '10px' }} />
                <img src={props.p3} style={{ width: '50px', height: '50px', margin: '10px' }} />
                <img src={props.p4} style={{ width: '50px', height: '50px', margin: '10px' }} />
            </div>
        </div>
    )
}

export default Card
