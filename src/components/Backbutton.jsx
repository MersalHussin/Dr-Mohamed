import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Backbutton = () => {
    const navigate = useNavigate();
    return (
        <div>
    <Link onClick={() => navigate(-1)} className='back-button'>
      ارجع خطوة
      <i className="fa-solid fa-caret-left"></i>
    </Link>
        </div>
    );
}

export default Backbutton;
