import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Testimonials from "./components/testimonials";

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


  const certificates = [
    {
      id: 1,
      image: "/assets/certificates/1.jpg",
    },
    {
      id: 2,
      image: "/assets/certificates/2.jpg",
    },
    {
      id: 3,
      image: "/assets/certificates/3.jpg",
    },
    {
      id: 4,
      image: "/assets/certificates/4.jpg",
    },
    {
      id: 5,
      image: "/assets/certificates/5.jpg",
    },
    {
      id: 6,
      image: "/assets/certificates/6.jpg",
    },
    {
      id: 7,
      image: "/assets/certificates/7.jpg",
    },
    {
      id: 8,
      image: "/assets/certificates/8.jpg",
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
      answer:
        "تطبيق أسرة يقدم خدماته للأطفال والشباب وأولياء الأمور لتطوير مهاراتهم وبناء شخصياتهم.",
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
                <img src="/assets/Dr.Mohamed-image.png" alt="Landing-image" />
              </div>
              <div className="text">
                <h1>
                  مرحبًا بك في الموقع الرسمي <span>لـ د.محمد حربي</span>
                </h1>
                <p className="text-rectangle">
                  مؤسس قدرات | دكتوراه في إدارة الأعمال | مستشار في ريادة
                  الأعمال
                </p>
              </div>
            </div>
            <div>
              <a href="#about-sec">
                <img
                  className="scroll-down-arrow"
                  src="/assets/scroll-down.png"
                  alt="scroll-down"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="about-sec">
          <div className="container coulmn">
            <div className="about-txt">
              <h1 className="title">من أنا</h1>
              <p className="about-data">
                أنا محمد حربي رائد الأعمال، ومؤسس  <span>قدرات</span>، وحاصل على دكتوراه في
                إدارة الأعمال. أؤمن بأن الشباب هم القوة الحقيقية للمستقبل، وأن
                دعمهم وتمكينهم بالمعرفة والمهارات الصحيحة هو المفتاح لبناء جيل
                قادر على تحقيق النجاح في العالم.
              </p>
            </div>
                 {/* سكشن الصور */}
              <div className="image-grid">
                  {/* الصف الأول - صورتين كبيرتين */}
                <div className="grid-item wide">
                  <img src="/assets/2.png" alt="أب لـ ٣ مراهقين" />
                  <div className="overlay">أب لـ ٣ مراهقين</div>
                </div>
                <div className="grid-item wide">
                  <img src="/assets/1.png"alt="دكتوراة إدارة أعمال" />
                  <div className="overlay">دكتوراة إدارة أعمال</div>
                </div>

                {/* الصف الثاني - ثلاث صور متوسطة */}
                <div className="grid-item small">
                  <img src="/assets/4.png" alt="رائد أعمال" />
                  <div className="overlay">رائد أعمال</div>
                </div>
                <div className="grid-item small">
                  <img src="/assets/5.png" alt="كوتش" />
                  <div className="overlay">كوتش</div>
                </div>
                <div className="grid-item small">
                  <img src="/assets/3.png" alt="شهادة TOT" />
                  <div className="overlay">شهادة TOT</div>
                </div>

                {/* الصف الثالث - صورة واحدة بالعرض كامل */}
                <div className="grid-item full">
                  <img src="/assets/6.jpg" alt="ضيف في قناة الشمس" />
                  <div className="overlay">ضيف في قناة الشمس</div>
                </div>
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

        <section id="achievs">
              <h1 className="title">الإنجازات</h1>
          <div className="container">
            <img src="/assets/1co.jpg" alt="achievs" />
            <div className="achievs-txt">
              <h2>سبورا تكس</h2>
              <p className="achievs-data">
              شركة متخصصة في  الأقمشة الرياضية، الطباعة، تصميم الباترونات، والتقفيل بأعلى جودة لتلبية احتياجات السوق الرياضي.</p>
            </div>
          </div>
          <div className="container right">
          <img src="/assets/2co.jpg" alt="achievs" />
          <div className="achievs-txt">
              <h2>بلو ديسك</h2>
              <p className="achievs-data">
              شركة برمجية تقدم حلول تقنية متكاملة، من تطوير المواقع والتطبيقات إلى البرمجيات المخصصة، لضمان تجربة رقمية متميزة.</p>
            </div>
          </div>
          <div className="container">
          <img src="/assets/3co.jpg" alt="achievs" />
          <div className="achievs-txt">
              <h2>جرين ستوديو</h2>
              <p className="achievs-data">
              استوديو احترافي لتسجيل وتصوير البودكاست والمحتوى الرقمي، بأحدث التقنيات لإنتاج مواد عالية الجودة.</p>
            </div>
          </div>
          <div className="container right">
          <img src="/assets/4co.jpg" alt="achievs" />
          <div className="achievs-txt">
              <h2>قدرات</h2>
              <p className="achievs-data">
              مدرسة تهدف إلى تطوير المهارات وتنمية القدرات بداية من معرفة ميول الطفل او الشاب وحتى تحويل   الأشخاص إلى رواد أعمال بناءًا على ميولهم              </p>
            </div>
          </div>
        </section>

<section id="certificate">
  <h1 className="title">الشهادات</h1>
  <div className="container" >
  {certificates.map((cert) => (
      <img src={cert.image} key={cert.id} alt={cert.title} />
    ))}
    </div>
</section>

<section>
  <Testimonials/>
</section>

        <Footer />
      </main>
    </>
  );
};

export default Landing;
