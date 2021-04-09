import React, {useState, useEffect} from 'react';
import axious from 'axios';
import Card from './Movie';

const Home =() =>{

    const [product, setProduct] = useState('');

    const loadProduct =() => {
        axious.get('http://api.tvmaze.com/shows')
        .then(Response => {
            setProduct(Response.data)
        })
    }

    useEffect(() => {
        loadProduct();
    }, [])

    return(
        <div className='homeList'>
            {
                product&&
                <ul>
                    {product.map(el =>
                    <li key={el.id}><Card data={el}/></li>
                    )}
                </ul>

            }
        </div>
        
    )
}

export default Home;