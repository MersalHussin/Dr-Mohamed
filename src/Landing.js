import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";



const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const courses = [
    {
      title: "التعامل مع التكنولوجيا داخل الأسرة",
      // subject: " كيف نحافظ على التوازن هذا النص افتراضي هذا النص افتراضي هذا النص افتراضي...",
      imageSrc: "/assets/Blog1.jpg",
    },
    {
      title: "التعامل مع تحديات الأطفال في مراحل عمرية مختلفة",
      // subject: " كيف نحافظ على التوازن هذا النص افتراضي هذا النص افتراضي هذا النص افتراضي...",
      imageSrc: "/assets/Blog2.jpg",
    },
    {
      title: "كيف نبني علاقة قوية مع أطفالنا؟",
      // subject: "  ...",
      imageSrc: "/assets/Blog3.jpg",
      
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null); // لتتبع الفيديو النشط

  const videos = [
    {
      id: 1,
      title: "فيديو لمستخدم أسرة",
      thumbnail: "/assets/Blog1.jpg",
      videoSrc: "https://www.youtube.com/embed/-M4EvJRSmjg?si=c2UrK7YFWZQvU1mQ",

    },
    {
      id: 2,
      title: "فيديو لمستخدم أسرة",
      thumbnail: "/assets/Blog1.jpg",
      videoSrc: "https://www.youtube.com/embed/OOujVJMOt7s?si=DFQhstC-tyXNzE3O",
    },
    {
      id: 3,
      title: "فيديو لمستخدم أسرة",
      thumbnail: "/assets/Blog1.jpg",
      videoSrc: "https://www.youtube.com/embed/u75iRPkR3Cw?si=No0sMMjVZy8O3xcL",
    },
    {
      id: 4,
      title: "فيديو لمستخدم أسرة",
      thumbnail: "/assets/Blog1.jpg",
      videoSrc: "https://www.youtube.com/embed/u75iRPkR3Cw?si=No0sMMjVZy8O3xcL",
    },
  ];

  const handleVideoClick = (videoSrc) => {
    setActiveVideo(videoSrc); // تعيين الفيديو النشط
  };

  const closeVideo = () => {
    setActiveVideo(null); // إغلاق الفيديو
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "ما هو تطبيق أسرة؟",
      answer:
        "تطبيق أسرة هو منصة تهدف إلى تمكين الشباب والأطفال من اكتشاف إمكانياتهم وتحقيق أهدافهم من خلال دعم الكوتشز وبرامج متخصصة.",
    },
    {
      question: "لمن يقدم تطبيق أسرة خدماته؟",
      answer: "تطبيق أسرة يقدم خدماته للأطفال والشباب وأولياء الأمور لتطوير مهاراتهم وبناء شخصياتهم.",
    },
    {
      question: "كيف يمكنني التسجيل في تطبيق أسرة؟",
      answer:
        "يمكنك التسجيل من خلال تحميل التطبيق على هاتفك الذكي وإنشاء حساب جديد باتباع الخطوات البسيطة.",
    },
    {
      question: "ما هو دور الكوتشز في تطبيق أسرة؟",
      answer:
        "الكوتشز في تطبيق أسرة يقدمون التوجيه والدعم للأفراد، سواء كانوا أطفالًا أو أولياء أمور، لمساعدتهم على التعامل مع تحديات الحياة وتحقيق أهدافهم.",
    },
    {
      question: "هل تطبيق أسرة مناسب لأولياء الأمور؟",
      answer:
        "نعم، يقدم تطبيق أسرة برامج مخصصة لأولياء الأمور لمساعدتهم على تحسين تواصلهم مع أطفالهم وتعزيز دورهم التربوي.",
    },
    {
      question: "هل هناك جلسات فردية في تطبيق أسرة؟",
      answer:
        "نعم، يوفر تطبيق أسرة جلسات فردية مع الكوتشز لتقديم الدعم الشخصي بما يتناسب مع احتياجات المستخدم.",
    },
    {
      question: "ما هي مميزات تطبيق أسرة؟",
      answer:
        "من مميزات تطبيق أسرة: بيئة تفاعلية، دعم من كوتشز متخصصين، برامج مخصصة لكل فئة عمرية، وشهادات عند إتمام البرامج.",
    },
    {
      question: "كيف يمكنني التواصل مع فريق الدعم؟",
      answer:
        "يمكنك التواصل مع فريق الدعم من خلال قسم 'اتصل بنا' داخل التطبيق أو عبر البريد الإلكتروني الخاص بخدمة العملاء.",
    },
];

  return (
    <>
      <main>
      <section className="hero-section">
        <div className="container">
            <div className="data">
                <div className="image">
                    <img src="/assets/Dr.Mohamed-image.png" alt="Landing-image"/>
                </div>
                <div className="text">
                    <h1>
                    مرحبًا بك في الموقع الرسمي <span>
                      
                       لـ د.محمد حربي
                      </span>
                     </h1>
                    <p className="text-rectangle">
                    مؤسس قدرات | دكتوراه في إدارة الأعمال | مستشار في ريادة الأعمال
                    </p>
                </div>
            </div>
            <div>
                <a href="#about-sec">
                    <img className="scroll-down-arrow" src="/assets/scroll-down.png" alt="scroll-down"/>
                </a>
            </div>
        </div>
    </section>
        <section id="about-sec">
          <div className="container coulmn">
            <div className="about-txt">
              <h1 className="title">من أنا</h1>
              <p className="about-data">
              أنا محمد حربي رائد الأعمال، ومؤسس قدرات، وحاصل على دكتوراه في إدارة الأعمال. أؤمن بأن الشباب هم القوة الحقيقية للمستقبل، وأن دعمهم وتمكينهم بالمعرفة والمهارات الصحيحة هو المفتاح لبناء جيل قادر على تحقيق النجاح في العالم.              </p>
              {/* <a href="#about">نزل الكتالوج</a> */}
            </div>
          </div>
        </section>
        <section id="video">
          <h1 className="title">لماذا أسرة ؟</h1>
                    <img
            src="/assets/why-ausrah.jpg"
            alt="video-img"
            onClick={openModal}
            style={{ cursor: "pointer" }}
          />
          {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeModal}>
                  &times;
                </button>
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/QXoxGrqWyeg?si=b5bViH2znXNrZ-lW"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>

        <section id="courses">
          <div className="container">
            <h1 className="title">المدونة</h1>
            <div className="courses-container">
              {courses.map((course, index) => (
                <Link key={index} to={`/blog${index+1}`}>
                  <div className="course-box">
                    <img src={course.imageSrc} alt={course.title} />
                    <h1>{course.title}</h1>
                    <p>{course.subject}</p>
                  </div>
                </Link>
              ))}
            </div>
            <a className="btn explore"  href="#" >
              أكتشف المزيد
            </a>
          </div>
        </section>
        
        <section className="CTA">
          <h1>كن واعي بـ أسرتك الان</h1>
          <div className="links-CTA" style={{ display:"flex",gap:"30px"}}>
          <a target="_blank" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">نزل التطبيق IOS</a>
          <a target="_blank" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">نزل التطبيق  Andriod</a>
          </div>
        </section>

        
    <section id="Feedback">
      {activeVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-container">
            <button className="close-button">&times;</button>
            <iframe
              width="1080px"
              height="607px"
              src={activeVideo}
              title="Active Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="reels-container">
        <h1 className="title">اراء المستخدمين</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true} // تفعيل الـ Navigation
          modules={[Navigation]} // إضافة Navigation كـ Module
          breakpoints={{
            900: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="reel-card"
                onClick={() => handleVideoClick(video.videoSrc)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail"
                />
                <h3 className="video-title">{video.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>  

    <section className="CTA library">
          <h1>مكتبة تساعدك في توعية أُسرتك</h1>
          <div className="links-CTA" style={{ display:"flex",gap:"30px"}}>
          <Link to="library">أكتشف المكتبة الان</Link>          </div>
    </section>

        <section id="FAQ">
          <div className="container">
            <h1 className="title">الأسئلة الشائعة</h1>
            <div className="FAQ-box">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="icon">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className="faq-answer"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <a href="mailto:info@ausrah.com" className="email">
              <h2>راسلنا دلوقتي على</h2>
              <h1>info@ausrah.com</h1>
            </a>
            <a href="tel:+201040031584" className="phone">
              <h2>اتصل بنا على </h2>
              <h1>01040031584</h1>
            </a>
            <div>
              <a className="btn chat" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">
                تحدث معانا <i className="fa-solid fa-comments"></i>
              </a>
            </div>
          </div>
        </section>

<Footer/>
      </main>
    </>
  );
};

export default Landing;