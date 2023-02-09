import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const arr = [1, 2, 3, 4, 5]

    return (


        <div className="bg-gradient-to-l from-black via-slate-800 to-gray-900 text-gray-200 ">
            <div className="container mx-auto flex flex-col items-center pb-6 md:p-10 md:px-12">
                <h1 className="text-4xl text-fuchsia-500 font-semibold leading-none text-center">What our customers are saying about us</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16 py-8">
                {
                    arr.map(review => <ReviewCard></ReviewCard>)
                }
            </div>
        </div>

    );
};

export default Review;