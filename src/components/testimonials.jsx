import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./css/testimonials.css"  

const testimonials = [
  {
    name: "أسم الشخصية",
    title: "من جيل الشباب",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد استمتعت جدًا بالتجربة وأوصي  سسيشبسشيش سسشيسشي سشيسش يسشيسش يسشسيشيبها للجميع.",
    image: "/assets/3co.jpg", // تأكد من مسار الصورة الصحيح
  },
  {
    name: "أسم الشخصية",
    title: "من جيل الشباب",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد استمتعت جدًا بالتجربة وأوصي بها للجميع.",
    image: "/assets/4co.jpg", // تأكد من مسار الصورة الصحيح
  },
  {
    name: "أسم الشخصية",
    title: "من جيل الشباب",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد استمتعت جدًا بالتجربة وأوصي بها للجميع.",
    image: "/assets/1co.jpg", // تأكد من مسار الصورة الصحيح
  },
  {
    name: "أسم الشخصية",
    title: "من جيل الشباب",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد استمتعت جدًا بالتجربة وأوصي بها للجميع.",
    image: "/assets/2co.jpg", // تأكد من مسار الصورة الصحيح
  },
];

export default function Testimonials() {
  return (
    <>
    <div className="testimonials-container">
      <h2 className="title">الآراء</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={20}
        loop
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          400: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <h3 className="testimonial-name">{item.name}</h3>
              <p className="testimonial-title">{item.title}</p>
              <p className="testimonial-text">{item.text}</p>
              <i className="quote-icon">"</i>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
</>
  );
}