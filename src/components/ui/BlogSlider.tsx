import React, { useState } from "react";
import { BlogCard } from "./BlogCard";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  sideImageUrl: string;
}

interface BlogSliderProps {
  posts: BlogPost[];
  onReadMore?: (postId: string) => void;
}

export const BlogSlider = ({ posts, onReadMore }: BlogSliderProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    console.log(`Slide changed to: ${index}`);
  };

  // Calculate how many posts to show based on screen size
  const getVisiblePosts = () => {
    // Show exactly 3 posts per page, starting from currentIndex
    const startIndex = currentIndex * 3;
    return posts.slice(startIndex, startIndex + 3);
  };

  // Calculate total number of pages (groups of 3)
  const totalPages = Math.ceil(posts.length / 3);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Grid Container - Fixed to always show exactly 3 items in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
        {getVisiblePosts().map((post, index) => (
          <BlogCard
            key={`${post.id}-${currentIndex}-${index}`}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
            sideImageUrl={post.sideImageUrl}
            onReadMore={() => onReadMore?.(post.id)}
          />
        ))}
      </div>

      {/* Dots Indicator */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-5 h-5 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-[#223f00]' 
                  : 'bg-neutral-100 border-[0.2px] border-solid border-black hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};