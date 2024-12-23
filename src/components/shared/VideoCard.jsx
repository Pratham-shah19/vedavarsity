/* eslint-disable @next/next/no-img-element */
import { RiPlayFill } from 'react-icons/ri';
const VideoCard = ({ video, modalAction }) => {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg shadow-mist">
      <div className="group relative  cursor-pointer" onClick={() => modalAction(video.youtubeId)}>
        <img
          src={`https://i.ytimg.com/vi/${video.youtubeId}/hq720.jpg`}
          alt={video.title}
          loading="lazy"
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 transition-all group-hover:scale-110">
          <RiPlayFill size={30} className="text-secondary" />
        </button>
      </div>

      <div className="space-y-3 bg-white p-4 pb-7">
        <h3 className="text-base font-semibold line-clamp-3 md:text-lg">{video.title}</h3>
        <p className="text-xs text-gray-700 line-clamp-3 md:text-base">{video.subtitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
