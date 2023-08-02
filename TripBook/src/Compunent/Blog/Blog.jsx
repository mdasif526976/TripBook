import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="my-[100px] ">
      <h1 className="text-[40px] text-center mb-[60px]">Our Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:grid-cols-3 justify-center ">
        <BlogCard
          img="https://shorturl.at/uFX69"
          name="My trip to Athens"
          date="May 23, 2022"
          readTime="5 minutes"
          detail="It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
        />
        <BlogCard
          img="https://shorturl.at/vGMSX"
          name="Vilnius resorts"
          date="May 23, 2022"
          readTime="1 minutes"
          detail="I haven't seen any resorts in Vilnius, but there are wonderful people and pubs"
        />
        <BlogCard
          img="https://shorturl.at/ruBS6"
          name="Tips for flying on a plane"
          date="May 23, 2022"
          readTime="15 minutes"
          detail="If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you"
        />
      </div>
    </div>
  );
};

export default Blog;
