import React from 'react';
import { TbSpeakerphone } from 'react-icons/tb';
import {Link} from "react-router-dom"
const TrendsProjects = () => {
  const items = [
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://plus.unsplash.com/premium_photo-1661727577908-1221ff42dcf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
      date: "Sep 1, 2024",
      views: "3.0k Views",
      read: "5 min",
      category: "Projects",
      content: "Drones in Agriculture: Enhancing Crop Management"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D",
      date: "Oct 25, 2024",
      views: "1.2k Views",
      read: "4 min",
      category: "Projects",
      content: "Building a Drone for Aerial Photography"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://plus.unsplash.com/premium_photo-1674513559454-35ca6435079f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHdvcmt8ZW58MHx8MHx8fDA%3D",
      date: "Oct 22, 2024",
      views: "850 Views",
      read: "5 min",
      category: "Projects",
      content: "Integrating Sensors into Your Drone"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D",
      date: "Oct 15, 2024",
      views: "2k Views",
      read: "3 min",
      category: "Projects",
      content: "Creating a Smart Home Automation System"
    },

    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://plus.unsplash.com/premium_photo-1661274202754-abde708db7d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdvcmt8ZW58MHx8MHx8fDA%3D",
      date: "Sep 25, 2024",
      views: "3.1k Views",
      read: "6 min",
      category: "Projects",
      content: "Using Raspberry Pi for Drone Control"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdvcmt8ZW58MHx8MHx8fDA%3D",
      date: "Sep 20, 2024",
      views: "2.8k Views",
      read: "5 min",
      category: "Projects",
      content: "Drone Programming with Python"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHdvcmt8ZW58MHx8MHx8fDA%3D",
      date: "Sep 15, 2024",
      views: "1.9k Views",
      read: "4 min",
      category: "Projects",
      content: "The Future of Drones in Delivery Services"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHx3b3JrfGVufDB8fDB8fHww",
      date: "Oct 10, 2024",
      views: "3.5k Views",
      read: "6 min",
      category: "Projects",
      content: "Designing a Custom PCB for Your Drone"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://images.unsplash.com/photo-1449247526693-aa049327be54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHx3b3JrfGVufDB8fDB8fHww",
      date: "Oct 5, 2024",
      views: "4.2k Views",
      read: "7 min",
      category: "Projects",
      content: "Exploring AI in Drone Navigation"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmt8ZW58MHx8MHx8fDA%3D",
      date: "Sep 30, 2024",
      views: "1.5k Views",
      read: "5 min",
      category: "Projects",
      content: "Building a Drone from Scratch"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://images.unsplash.com/photo-1491947153227-33d59da6c448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdvcmt8ZW58MHx8MHx8fDA%3D",
      date: "Sep 10, 2024",
      views: "2.3k Views",
      read: "5 min",
      category: "Projects",
      content: "Understanding Drone Components and Their Functions"
    },
    {
      label: "Trending",
      title: "Latest Trends in Electronics",
      image: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlc2VhcmNofGVufDB8fDB8fHww",
      date: "Sep 5, 2024",
      views: "2.5k Views",
      read: "4 min",
      category: "Projects",
      content: "Innovations in Drone Technology"
    },

  ];
  return (
    <div className="container py-8 max-w-[1600px] mx-auto">
      <div className="">


        {/* Header */}
        <h1 className=" text-xl md:text-3xl font-bold mb-8 text-gray-800 flex items-center">
          <span className=""><TbSpeakerphone className='text-blue-600 text-3xl mx-4 md:text-6xl' /></span> <p>Trends & Projects </p>
        </h1>
        <div className="flex gap-5 flex-wrap w-fit mx-auto justify-center ">


          {items.map((item, index) => (
        <Link to="/blog">
            <div key={index} className="max-w-[400px] rounded-xl overflow-hidden mb-6 cursor-pointer  md:mx-auto md: mx-4">
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image} // Use the image from the item object
                  alt="Article Thumbnail"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                {/* Category */}
                <p className="text-sm text-gray-500 mb-1">{item.category}</p>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {item.content} {/* Use the content from the item object */}
                </h2>

                {/* Meta Information */}
                <div className="text-sm text-gray-500 flex justify-center space-x-4">
                  <span>{item.date}</span>
                  <span>&bull;</span>
                  <span>{item.views}</span>
                  <span>&bull;</span>
                  <span>{item.read}</span>
                </div>
              </div>
            </div>
            </Link>
          ))}  
        </div>

      </div>
    </div>
  );
};

export default TrendsProjects;
