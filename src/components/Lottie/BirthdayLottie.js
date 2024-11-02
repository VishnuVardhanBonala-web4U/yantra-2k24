import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../data/animation.json'; // Make sure the path to your JSON is correct

const BirthdayLottie = () => {
    return (
        <div className='grid place-items-center'>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ height: 800, width: "80%" }}
            />
        </div>
    );
};

export default BirthdayLottie;
