import ThreeDotsIcon from "@/resources/images/components/ThreeDotsIcon";
import Image from "next/image";
import profilePic from "../../resources/images/images.jpg";
import postImg from "../../resources/images/post.jpg";
import PostOptions from "../PostOptions";

const PostCaps = () => {
  const Users = [
    {
      id: 1,
      name: "John Doe",
      user: "@johnDoe",
      profilePic: profilePic,
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta dolorum, in",
      messageTime: "23h",
      post: postImg,
      like: "1.5k",
      comments: "800",
      reCaps: "1.2k",
    },
    {
      id: 2,
      name: "John Doe",
      user: "@johnDoe",
      profilePic: profilePic,
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta dolorum, incidunt quas fuga ex minima numquam rem beatae, porro sed vel ut, sequi aspernatur! Nulla tenetur ab adipisci magni?",
      messageTime: "23h",
      post: postImg,
      like: "1.5k",
      comments: "800",
      reCaps: "1.2k",
    },
    {
      id: 3,
      name: "John Doe",
      user: "@johnDoe",
      profilePic: profilePic,
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta dolorum, incidunt quas fuga ex minima numquam rem beatae, porro sed vel ut, sequi aspernatur! Nulla tenetur ab adipisci magni?",
      messageTime: "23h",
      post: postImg,
      like: "1.5k",
      comments: "800",
      reCaps: "1.2k",
    },
    {
      id: 4,
      name: "John Doe",
      user: "@johnDoe",
      profilePic: profilePic,
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta dolorum, incidunt quas fuga ex minima numquam rem beatae, porro sed vel ut, sequi aspernatur! Nulla tenetur ab adipisci magni?",
      messageTime: "23h",
      post: postImg,
      like: "1.5k",
      comments: "800",
      reCaps: "1.2k",
    },
    {
      id: 5,
      name: "John Doe",
      user: "@johnDoe",
      profilePic: profilePic,
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta dolorum, incidunt quas fuga ex minima numquam rem beatae, porro sed vel ut, sequi aspernatur! Nulla tenetur ab adipisci magni?",
      messageTime: "23h",
      post: postImg,
      like: "1.5k",
      comments: "800",
      reCaps: "1.2k",
    },
    {
      id: 6,
      name: "John Doe",
      user: "@johnDoe",
      profilePic: profilePic,
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta dolorum, incidunt quas fuga ex minima numquam rem beatae, porro sed vel ut, sequi aspernatur! Nulla tenetur ab adipisci magni?",
      messageTime: "23h",
      post: postImg,
      like: "1.5k",
      comments: "800",
      reCaps: "1.2k",
    },
    {
      id: 7,
      name: "John Doe",
      user: "@johnDoe",
      profilePic: profilePic,
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta dolorum, incidunt quas fuga ex minima numquam rem beatae, porro sed vel ut, sequi aspernatur! Nulla tenetur ab adipisci magni?",
      messageTime: "23h",
      post: postImg,
      like: "1.5k",
      comments: "800",
      reCaps: "1.2k",
    },
    {
      id: 8,
      name: "John Doe",
      user: "@johnDoe",
      profilePic: profilePic,
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta dolorum, incidunt quas fuga ex minima numquam rem beatae, porro sed vel ut, sequi aspernatur! Nulla tenetur ab adipisci magni?",
      messageTime: "23h",
      post: postImg,
      like: "1.5k",
      comments: "800",
      reCaps: "1.2k",
    },
  ];
  return (
    <>
      {Users.map((user) => (
        <>
          <div className="flex border-0 border-bg-gray-900 p-6" key={user.id}>
            <Image
              className="w-10 h-10 rounded-full mr-2"
              src={user.profilePic}
              alt={user.name}
            />
            <div className="flex-1 ">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <h2 className="font-bold mr-2 text-gray-500">{user.name}</h2>

                  <span className="text-gray-600 text-sm">{user.user}</span>
                </div>
                <div className="flex gap-x-6">
                  <span className="text-gray-600 text-sm">
                    {user.messageTime}
                  </span>
                  <button className="flex items-center focus:outline-none">
                    <ThreeDotsIcon
                      width={20}
                      height={20}
                      color="#475569"
                      onClick={() => console.log("clicked")}
                    />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-full md:w-3/5">
                <p className="text-sm text-gray-500">{user.message}</p>
              </div>
              <div className="w-full h-auto pt-2">
                <Image
                  src={user.post}
                  alt={user.message}
                  className="rounded-xl"
                />
              </div>
              <div className="pt-2">
                <PostOptions
                  like={user.like}
                  comments={user.comments}
                  reCaps={user.reCaps}
                />
              </div>
            </div>
          </div>
          <hr className="text-sm opacity-25" />
        </>
      ))}
    </>
  );
};

export default PostCaps;
