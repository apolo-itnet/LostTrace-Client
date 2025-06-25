import React, { use, useEffect, useState } from "react";
import { Eye, MapPin, ListChecks, DollarSign, Pen, Trash2 } from "lucide-react";
import { Link } from "react-router";
import EmptyPostAnimation from "../../Shared/Animation/EmptyPostAnimation";
import { toastError, toastSuccess } from "../../Utility/notification";
import ConfirmModal from "../../Shared/ConfirmModal";

const PostList = ({ myPostPromise }) => {
  const myPostData = use(myPostPromise);
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (myPostData) {
      setPosts(myPostData);
    }
  }, [myPostPromise]);

  //HANDLE OPEN MODAL
  const handleOpenModal = (postId) => {
    setSelectedPost(postId);
    setShowModal(true);
  };

  //HANDLE DELETE POST
  const handleDeletePost = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/posts/${selectedPost}`, {
        method: "DELETE",
      });
      const data = await res.json();

      setTimeout(() => {
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== selectedPost)
        );
        toastSuccess("Post deleted successfully!");
        setShowModal(false);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      toastError("Failed to delete post.");
      setIsLoading(false);
    }
  };

  if (!posts.length > 0) return <EmptyPostAnimation />;

  return (
    <div className="res-padding space-y-8 py-10">
      {posts.map((post, index) => (
        <div
          key={post._id}
          className="max-w-5xl mx-auto flex justify-between gap-6 p-6 border border-gray-200 hover:border-teal-400 rounded-xl hover:-translate-y-2 transition duration-500 ease-in-out group bg-white shadow-sm"
        >
          <div className="flex items-center pr-4 mr-4 border-r border-gray-300">
            <img
              src={post.photo || "/fallback.png"}
              alt="Post Image"
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">
              {post.itemTitle}
            </h2>
            <p className="flex items-center gap-2 text-gray-600">
              <ListChecks size={18} /> Category - {post.category}
            </p>

            <div className="flex flex-col gap-1 text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Location - {post.location}
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <DollarSign size={18} />
                Rewards - <span className="text-blue-600"> {post.rewards}</span>
              </p>
            </div>

            <p className="px-2 py-1 rounded-md bg-blue-100 text-blue-800 inline-block mt-1">
              {post.postType}
            </p>
          </div>

          <div className="flex gap-1 items-center">
            <div className="flex items-center justify-center cursor-pointer">
              <Link
                to={`/post-details/${post._id}`}
                className="btn border-none shadow-none bg-teal-800 hover:bg-amber-400 transition-colors ease-out duration-300 !rounded-lg w-8 h-8 p-5 flex items-center justify-center  "
              >
                <button>
                  <Eye className="cursor-pointer text-white" size={18} />
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-center cursor-pointer">
              <Link
                to={`/update-post/${post._id}`}
                className="btn border-none shadow-none bg-amber-400 hover:bg-teal-800 transition-colors ease-out duration-300 !rounded-lg w-8 h-8 p-5 flex items-center justify-center  "
              >
                <button>
                  <Pen className="cursor-pointer text-white" size={18} />
                </button>
              </Link>
            </div>

            <div>
              <button
                onClick={() => handleOpenModal(post._id)}
                className="btn border-none shadow-none bg-red-500 hover:bg-teal-800 transition-colors ease-out duration-300 !rounded-lg w-10 h-10 p-1 flex items-center justify-center "
              >
                <Trash2 className=" text-white" size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <ConfirmModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleDeletePost}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default PostList;
