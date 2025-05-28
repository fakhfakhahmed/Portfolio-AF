import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';

const ProjectsCarousel = ({ projects, onViewDetails }) => {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      {/* Custom Navigation Arrows */}
      <button
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20  text-red-600 w-14 h-14    transition text-6xl"
        style={{ left: '-60px' }}
        onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
        aria-label="Previous project"
      >
        &#8249;
      </button>
      <button
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20  text-red-600 w-14 h-14    transition text-6xl"
        style={{ right: '-60px' }}
        onClick={() => swiperRef.current && swiperRef.current.slideNext()}
        aria-label="Next project"
      >
        &#8250;
      </button>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        onSwiper={swiper => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="my-12 sm:my-16 md:my-24"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
          1280: { slidesPerView: 2, spaceBetween: 64 },
        }}
        style={{ minHeight: 'auto', paddingBottom: '60px' }}
      >
        {projects.map(project => (
          <SwiperSlide key={project.id} style={{ height: 'auto', minHeight: '550px', display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
            <div className="w-full max-w-[500px] h-full" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.18)', borderRadius: '20px', overflow: 'hidden', background: '#18181b', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <ProjectCard project={project} onViewDetails={onViewDetails} />
            </div>
          </SwiperSlide>
        ))}
        <style>{`
          .swiper-pagination-bullet-active {
            background:rgb(241, 12, 12) !important;
          }
        `}</style>
      </Swiper>
    </div>
  );
};

export default ProjectsCarousel;
