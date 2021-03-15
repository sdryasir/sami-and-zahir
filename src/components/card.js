import React from 'react'

function Card(props) {
    let prods = props.data
    return (
        prods.map((p) => <div className="col-md-4">
            <div class="card">
                <img src={p.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.description}</p>
                    <a href="#" class="btn btn-primary">{p.price}</a>
                </div>
            </div>
        </div>)
    )
}
export default Card;
