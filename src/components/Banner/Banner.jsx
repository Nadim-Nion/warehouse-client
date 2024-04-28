import React from 'react';
import book1 from '../../assets/books-cover/book-1.jpg';
import book2 from '../../assets/books-cover/book-2.jpg';
import book3 from '../../assets/books-cover/book-3.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[550px]">
                <div id="item1" className="carousel-item w-full">
                    <img src={book1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={book2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={book3} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;