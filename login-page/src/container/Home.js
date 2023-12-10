import React from 'react';
import data from '../product.json';

const Home = () => { 
    return (
        <>
            <div className='row'>
                {
                    data.product.map((res, index) => {
                        return <div className="card m-3" style={{ width: '15rem' }} key={index}>
                            <img className="card-img-top" src={res.imgUrl} alt="/" />
                            <div className="card-body">
                                <h5 className="card-title">{res.name}</h5>
                                <p className="card-text">{res.price}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    );
}

export default Home;
