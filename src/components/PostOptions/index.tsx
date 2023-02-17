import CommentIcon from "@/resources/images/components/CommentIcon";
import ReCapsIcon from "@/resources/images/components/ReCaps";
import LikeIcon from "@/resources/images/components/LikeIcon";
import ShareIcon from "@/resources/images/components/ShareIcon";

interface PostOptionsProps {
  like: string;
  comments: string;
  reCaps: string;
}

const PostOptions = ({ like, comments, reCaps }: PostOptionsProps) => {

  return (
    <div className="py-1 flex justify-between">
      <div className="focus:outline-none px-2 flex">
        <button className="focus:outline-none px-2">
          <CommentIcon size={13} color="#A0AEC0" />
        </button>
        <span className="text-gray-600 text-xs">{comments}</span>
      </div>
      <div className="focus:outline-none px-2 flex">
        <button className="focus:outline-none px-2">
          <ReCapsIcon size={13} color="#A0AEC0" />
        </button>
        <span className="text-gray-600 text-xs">{reCaps}</span>
      </div>
      <div className="focus:outline-none px-2 flex">
        <button className="focus:outline-none px-2">
          <LikeIcon size={13} color="llll" />
        </button>
        <span className="text-gray-600 text-xs">{like}</span>
      </div>
      <div className="focus:outline-none px-2 flex ">
        <button className="focus:outline-none px-2 ">
          <ShareIcon size={13} color="#A0AEC0" />
        </button>
      </div>
    </div>
  );
};

export default PostOptions;
