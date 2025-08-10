import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import PostCard from "../../Shared/PostCard";
import { LayoutGrid, LayoutList, Search } from "lucide-react";
import useDebounce from "../../Hooks/useDebounce";
import ListView from "../../Shared/ListView";

const AllPosts = () => {
  const postData = useLoaderData();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 800);
  const [layout, setLayout] = useState("card");

  const filteredPosts = useMemo(() => {
    return postData.filter(
      (post) =>
        post.itemTitle.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        post.location.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        post.district.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [postData, debouncedSearch]);

  return (
    <div>
      {/* Heading */}
      <div className="py-4 bg-teal-800 text-base-100 sticky top-20.5 z-10 w-full">
        <div className="res-padding flex justify-between items-center">
          <h1 className="text-4xl lg:text-6xl text-white font-semibold bebas tracking-wide py-4">
            All Post
          </h1>
          <div className="flex items-center gap-4">
            <div className="overflow-hidden w-10 h-10 hover:w-80 bg-white rounded-full flex items-center hover:duration-300 duration-500 ease-out relative">
              <span className="absolute inset-0 w-10 h-10 flex items-center justify-center text-amber-400">
                <Search size={26} />
              </span>
              <input
                type="text"
                placeholder="Search by title or location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 outline-none text-sm text-teal-800  bg-transparent w-full h-full font-normal px-4"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLayout("card")}
                className={`p-2 rounded-full cursor-pointer ${
                  layout === "card"
                    ? "bg-amber-400 text-white"
                    : "bg-white text-teal-800"
                }`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setLayout("list")}
                className={`p-2 rounded-full cursor-pointer ${
                  layout === "list"
                    ? "bg-amber-400 text-white"
                    : "bg-white text-teal-800"
                }`}
              >
                <LayoutList size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 res-padding">
        {layout === "card" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPosts.map((post, index) => (
              <PostCard
                key={post._id}
                post={post}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              />
            ))}
          </div>
        ) : (
          <ListView posts={filteredPosts} />
        )}
      </div>
    </div>
  );
};

export default AllPosts;
