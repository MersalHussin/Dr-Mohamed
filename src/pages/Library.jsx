import React, { useEffect } from 'react';
import "./library.css";
import Footer from '../components/Footer';
import Backbutton from '../components/Backbutton';

const Library = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
    }, [])

    const books = [
      {
          title: " أطفالنا كيف نفهمهم بطريقة فعالة",

          data: "",
          imageSrc: "/assets/Book1.jpg",
          link:"https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%A7%D8%B7%D9%81%D8%A7%D9%84%D9%86%D8%A7-%D9%83%D9%8A%D9%81-%D9%86%D9%81%D9%87%D9%85%D9%87%D9%85-pdf"

      },
    {
      title: "ضحية سوء معاملة الأطفال",
      data: "",
        imageSrc: "/assets/Book2.jpg",
        link:"https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%B3%D9%88%D8%A1-%D9%85%D8%B9%D8%A7%D9%85%D9%84%D9%87-%D8%A7%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84-%D8%A7%D9%84%D8%B6%D8%AD%D9%8A%D9%87-%D8%A7%D9%84%D9%85%D9%86%D8%B3%D9%8A%D9%87-pdf"
    },
    {
        title: "الزوج العنيد والزوجة العنيدة",
        data: "",
        imageSrc: "/assets/Book3.jpg",
        link:"https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%81%D9%86-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D8%B2%D9%88%D8%AC-%D8%A7%D9%84%D8%B9%D9%86%D9%8A%D8%AF-%D9%88%D8%A7%D9%84%D8%B2%D9%88%D8%AC%D8%A9-%D8%A7%D9%84%D8%B9%D9%86%D9%8A%D8%AF%D8%A9-pdf"
    },


    ];
    
    return (
        <>
        <Backbutton/>
        <div className='nav-height' style={{height:"100px",}} ></div>
        <h1 className='title' style={{margin:"auto",}}>المكتبة</h1>
        <section className='library-container'>
            <div className='container'>
            {books.map((book,index)=>(
                <div className='box-book'  key={index}>
                    <img src={book.imageSrc} alt={book.title}  className='book-img'/>
                    <div className="data-txt">
                        <h1 className='book-title'>{book.title}</h1>
                        <p className='book-data'>{book.data} </p>
                    </div>
                    <div className='link'>
                        <a target='_blank' href={book.link}>أقرا الكتاب</a>
                    </div>
                </div>
                ))}
            </div>
        </section>
                <Footer/>
        </>
    );
}

export default Library;
