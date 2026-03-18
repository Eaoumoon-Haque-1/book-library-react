import React from 'react';
import bookImgLink from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center'>
            <div>
                <h3>Books to freshen up your bookshelf</h3>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img src={bookImgLink} alt="" />
            </div>
        </div>
    );
};

export default Banner;