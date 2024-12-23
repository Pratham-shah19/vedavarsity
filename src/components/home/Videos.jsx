'use client';
import VideoCard from 'components/shared/VideoCard';
import videos from 'data/videos';
import { useState } from 'react';
import Modal from 'components/shared/Modal';
import { OutLink } from 'components/shared/Links';

const Videos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openVideoModal = (video) => {
    setModalOpen(true);
    setCurrentVideo(video);
  };

  return (
    <section className="bg-cloud">
      <div className="m-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-28px font-bold  lg:text-38px">Videos</h2>
        <div className="my-8 grid grid-cols-1 justify-items-center gap-6 align-middle md:my-12 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} modalAction={openVideoModal} />
          ))}
        </div>
        <div className="text-center">
          <OutLink
            href="https://www.youtube.com/playlist?list=PLSoiyHqcjc8QGqsS9wKkSQbutg1E1WEox"
            className="inline-block rounded-md px-8  py-2 text-center font-semibold capitalize text-primary ring-2 ring-primary hover:bg-[#EEF5FE]">
            Watch Playlist
          </OutLink>
        </div>
      </div>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} heading="Videos" size="max-w-3xl">
        <div className="relative">
          <div className="aspect-video  w-full animate-pulse rounded-lg bg-gray-200"></div>
          <iframe
            width="100%"
            height="100%"
            className="absolute top-0 aspect-video rounded-lg"
            src={`https://www.youtube-nocookie.com/embed/${currentVideo}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default Videos;
