import React from 'react';

const Models = () => {
    return (
        <>
            <div className='models container' >
                <a href='assets/STAY.pdf' download={true} className="model">
                    <div className='model-image-container'>
                    <img className="model-image" src="./assets/STAY.png" alt="STAY Model" />
                    </div>
                    <h1 className='model-overview'>نموذج لتحديد بقائك في الشركات</h1>
                </a>
                <a href='assets/ALMC.pdf' download={true} className="model">
                <div className='model-image-container'>
                    <img className="model-image"  src="./assets/ALMC.webp" alt="STAY Model" />
                </div>
                <h1 className='model-overview'>نموذج لإكتشاف القدرات الشخصية</h1>
                </a>
            </div>
        </>
    );
}

export default Models;
