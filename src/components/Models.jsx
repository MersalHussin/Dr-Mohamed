import React from 'react';

const Models = () => {
    return (
        <>
            <div className='models container' >
                <a href='#' className="model">
                    <div className='model-image-container'>
                    <img className="model-image" src="./assets/STAY.jpg" alt="STAY Model" />
                    </div>
                    <h1 className='model-overview'>نموذج لتحديد بقائك في الشركات</h1>
                </a>
                <a href='#' className="model">
                <div className='model-image-container'>
                    <img className="model-image"  src="./assets/ALMC.jpg" alt="STAY Model" />
                </div>
                <h1 className='model-overview'>نموذج لإكتشاف القدرات الشخصية</h1>
                </a>
            </div>
        </>
    );
}

export default Models;
