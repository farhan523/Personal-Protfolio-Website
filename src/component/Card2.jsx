import React from 'react'

function Card2(props) {
    return (
        <div className="card2">
            <div className="cimage">
                <img src={props.img} width='100%' height='100%' />

            </div>
            <h3>{props.title}</h3>
            <div style={{ marginBottom: '10px' }}>
                <a href={props.url} target="_blank" style={{ color: 'black' }}><i class="fas fa-external-link-alt" style={{ fontSize: '30px' }}></i></a>
                <a href={props.git} target="_blank" style={{ color: 'black' }}><i class="fab fa-github" style={{ fontSize: '30px', paddingLeft: '20px' }}></i></a>
            </div>
        </div>
    )
}

export default Card2
