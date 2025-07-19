import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Testimonials from "./components/testimonials";
import Models from "./components/Models";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const [activeVideo, setActiveVideo] = useState(null); // لتتبع الفيديو النشط



  const certificates = [
    {
      id: 1,
      image: "/assets/certificates/1.webp",
    },
    {
      id: 2,
      image: "/assets/certificates/2.webp",
    },
    {
      id: 3,
      image: "/assets/certificates/3.webp",
    },
    {
      id: 4,
      image: "/assets/certificates/4.webp",
    },
    {
      id: 5,
      image: "/assets/certificates/5.webp",
    },
    {
      id: 6,
      image: "/assets/certificates/6.webp",
    },
    {
      id: 7,
      image: "/assets/certificates/7.webp",
    },
    {
      id: 8,
      image: "/assets/certificates/8.webp",
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
                <img src="/assets/Dr.Mohamed-image.webp" alt="Landing-image" />
              </div>
              <div className="text">
                <h1>
                  مرحبًا بك في الموقع الرسمي  <br/> <span>لـ سفير الشباب محمد حربي</span>
                </h1>
                <p className="text-rectangle">
                  مؤسس قدرات | باحث دكتوراه في إدارة الأعمال | مستشار في اكتشاف الميول المهنية للشباب
                </p>
              </div>
            </div>
            <div>
              <a href="#about-sec">
              <i className="fa-solid fa-angles-down scroll-down-arrow"></i>
              </a>
            </div>
          </div>
        </section>
        <section id="about-sec">
          <div className="container coulmn">
            <div className="about-txt">
              <h1 className="title">من أنا</h1>
              <p className="about-data">
                انا محمد حربي رائد أعمال 
ومؤسس قدرات وحاصل علي ماجستير في إدارة الأعمال وباحث دكتوراه و <span>مؤسس قدرات</span>،
               أؤمن بأن الشباب هم القوة الحقيقية للمستقبل، وأن
                دعمهم وتمكينهم بالمعرفة والمهارات الصحيحة هو المفتاح لبناء جيل
                قادر على تحقيق النجاح في العالم.
              </p>
            </div>
                 {/* سكشن الصور */}
              <div className="image-grid">
                  {/* الصف الأول - صورتين كبيرتين */}
                <div className="grid-item wide">
                  <img src="/assets/2.webp" alt="أبو المراهقين" />
                  <div className="overlay">أبو المراهقين</div>
                </div>
                <div className="grid-item wide">
                  <img src="/assets/1.webp"alt="دكتوراة إدارة أعمال" />
                  <div className="overlay">دكتوراة إدارة أعمال</div>
                </div>

                {/* الصف الثاني - ثلاث صور متوسطة */}
                <div className="grid-item small">
                  <img src="/assets/4.webp" alt="رائد أعمال" />
                  <div className="overlay">رائد أعمال</div>
                </div>
                <div className="grid-item small">
                  <img src="/assets/5.webp" alt="كوتش" />
                  <div className="overlay">كوتش</div>
                </div>
                <div className="grid-item small">
                  <img src="/assets/3.webp" alt="شهادة TOT" />
                  <div className="overlay">شهادة TOT</div>
                </div>

                {/* الصف الثالث - صورة واحدة بالعرض كامل */}
                <div className="grid-item full">
                  <img src="/assets/6.webp" alt="ضيف في قناة الشمس" />
                  <div className="overlay">ضيف في قناة الشمس</div>
                </div>
              </div>
          </div>
        </section>
        {/* <section id="video">
          <h1 className="title">لماذا أسرة ؟</h1>
          <img
            src="/assets/why-ausrah.webp"
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
        </section> */}

          
        {/* سيكشن الفيديو شورت */}
        <section id="video-shorts" className="video-shorts-section">
          <div className="container">
            <h1 className="title">منهجية الـ 6PS</h1>
            <div className="video-container">
              <div className="video-card">
                <div className="video-thumbnail" onClick={openModal}>
                  <img 
                    src="/assets/Dr.Mohamed Thumbnail.jpg" 
                    alt="فيديو شورت د.محمد حربي" 
                    className="thumbnail-image"
                  />
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                      <path d="M25 20L40 30L25 40V20Z" fill="#0066CC"/>
                    </svg>
                  </div>
                  <div className="video-overlay">
                    <span className="watch-text">شاهد الفيديو</span>
                  </div>
                </div>
                <div className="video-info">
                  <h3>شرح منهجية الـ 6ps </h3>
                  <p>في ظل تعدد الشغف في هذا العالم منهجية الـ 6ps تختصر لك هذا الـ التشتت وتضع لك خطة مناسبة لك ولميولك</p>
                  <a 
                    href="https://qudraat.com/6ps/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="methodology-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    أبدأ رحلتك في الـ 6ps
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modal للفيديو */}
          {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content video-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeModal}>
                  &times;
                </button>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/PR-gESOEbSQ?si=ACDeWtKrt48mQ8y-"
                  title="فيديو شورت د.محمد حربي"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>

        <section id="achievs">
          <div className="container">
            <h1 className="title">الإنجازات</h1>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-image">
                  <img src="/assets/1co.webp" alt="سبورا تكس" />
                </div>
                <div className="achievement-content">
                  <h2>سبورا تكس</h2>
                  <p>
                    شركة متخصصة في الأقمشة الرياضية، الطباعة، تصميم الباترونات، والتقفيل بأعلى جودة لتلبية احتياجات السوق الرياضي.
                  </p>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-image">
                  <img src="/assets/2co.webp" alt="بلو ديسك" />
                </div>
                <div className="achievement-content">
                  <h2>بلو ديسك</h2>
                  <p>
                    شركة برمجية تقدم حلول تقنية متكاملة، من تطوير المواقع والتطبيقات إلى البرمجيات المخصصة، لضمان تجربة رقمية متميزة.
                  </p>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-image">
                  <img src="/assets/3co.webp" alt="جرين ستوديو" />
                </div>
                <div className="achievement-content">
                  <h2>جرين ستوديو</h2>
                  <p>
                    استوديو احترافي لتسجيل وتصوير البودكاست والمحتوى الرقمي، بأحدث التقنيات لإنتاج مواد عالية الجودة.
                  </p>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-image">
                  <img src="/assets/4co.webp" alt="قدرات" />
                </div>
                <div className="achievement-content">
                  <h2>قدرات</h2>
                  <p>
                    مدرسة تهدف إلى تطوير المهارات وتنمية القدرات بداية من معرفة ميول الطفل او الشاب وحتى تحويل الأشخاص إلى رواد أعمال بناءًا على ميولهم.
                  </p>
                </div>
              </div>
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
<section  id="models-sec" className="models-sec">
<h1 className="title white">نماذج الشباب</h1>
    <Models/>
</section>

{/* سيكشن CTA لحجز استشارة كوتشينج */}
<section id="cta-section" className="cta-section">
  <div className="container">
    <div className="cta-content">
      <div className="cta-text">
        <h1 className="title">احجز استشارة كوتشينج احترافية</h1>
        <p className="cta-description">
          احصل على استشارة كوتشينج مخصصة مع د.محمد حربي عبر منصة iCanCoachYou المعتمدة
          وابدأ رحلة تطوير مهاراتك وتحقيق أهدافك المهنية والشخصية
        </p>
        <div className="cta-features">
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <span>تحديد الأهداف بوضوح</span>
          </div>
          <div className="feature">
            <div className="feature-icon">📈</div>
            <span>خطة تطوير مخصصة</span>
          </div>
          <div className="feature">
            <div className="feature-icon">💪</div>
            <span>تطوير المهارات الشخصية</span>
          </div>
        </div>
      </div>
      <div className="cta-actions">
        <a 
          href="https://icancoachyou.online/en/coaches/mohamed-1749843538151?tab=services" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button primary-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
          </svg>
          احجز استشارة الآن
        </a>

      </div>
    </div>
  </div>
</section>

{/* <section>
  <Testimonials/>
</section> */}

{/* <section className="cards-">
    <div class="card">
        <img src="./assets/3co.webp" alt="فريق قدرات" class="card-image"/>
        <div class="card-content">
            <h2 class="card-title">فريق قدرات</h2>
            <div class="card-details">
                <p class="card-text">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص.</p>
                <a href="#" class="card-button">عرض المزيد</a>
            </div>
        </div>
    </div>
</section> */}

        <Footer />
      </main>
    </>
  );
};

export default Landing;
