'use client';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import AppsLink from 'components/shared/AppsLink';
import Button from 'components/shared/Buttons';
import CommunityLinks from 'components/shared/CommunityLinks';
import ibmedu from 'public/images/ibmedu-home-hero.jpg';
import vedvarsity from 'public/images/vedvarsity-home-hero.jpg';

import 'swiper/css/pagination';

const Hero = ({ community_links }) => {
  return (
    <section className="m-auto max-w-6xl px-4 py-20">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className="pb-12">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="order-2 space-y-8 sm:mx-auto md:order-1 lg:mx-0 lg:space-y-12">
              <h1 className="text-32px font-bold lg:text-5xl">ISKCON Bhagavata Mahavidyalaya</h1>
              <div>
                {/* <h2 className="text-xl font-semibold lg:text-2xl">A college of Vedic studies.</h2> */}
                <p className="text-base lg:text-2xl">
                  A college of Vedic studies.
                  <br />
                  31,500+ Students have already taken Online and Onsite courses.
                </p>
                <Button className={'mt-4 px-8 py-2.5'} href="/bhagavata-mahavidyalaya">
                  Explore Courses
                </Button>
              </div>
              <div className={'flex space-x-12'}>
                <AppsLink text={'Download Our App'} />
                <CommunityLinks text={'Join Our Community'} community_links={community_links} />
              </div>
            </div>
            <div className="order-1 mx-auto">
              <Image
                src={ibmedu}
                alt="ISKCON Bhagavata Mahavidyalaya"
                className="rounded-lg "
                placeholder="blur"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="pb-12">
          <div className="grid items-center gap-5 md:grid-cols-2">
            <div className="order-2 space-y-5 sm:mx-auto md:order-1 lg:mx-0 lg:space-y-8">
              <h1 className="font-bold text-32px lg:text-5xl">VEDVARSITY </h1>
              <p className="text-base lg:text-2xl">
                An initiative dedicated to serve the writings of
                <b> Gaudiya Vaishnav Acharyas</b>
              </p>
              <Button className={'mt-4 py-2.5 px-8'} href="/vedvarsity">
                Explore Courses
              </Button>
              <div className={'flex space-x-12'}>
                <AppsLink text={'Download Our App'} />
                <CommunityLinks text={'Join Our Community'} community_links={community_links} />
              </div>
            </div>
            <div className="order-1 mx-auto">
              <Image
                src={vedvarsity}
                alt="ISKCON Vedvarsity"
                className="rounded-lg"
                placeholder="blur"
              />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Hero;
