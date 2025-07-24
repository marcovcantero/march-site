'use client'

import { useState } from 'react'
import Image from 'next/image'

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Sample gallery data - replace with your actual photos and messages
  const galleryItems = [
    {
      id: 1,
      src: '/m&m1.jpg', // Replace with your image paths
      alt: 'Beautiful moment together',
      text: 'a monumentous day for some reasons :) will never forget that airbnb! bun got really drunk after this and forgot who i was.'
    },
    {
      id: 2,
      src: '/m&m2.jpg',
      alt: 'Sweet memory',
      text: 'she said yes! first (and last temporarily) night of being boyfriend and girlfriend! that whole day still feels like a dream to me. we spent 12 hrs together and it ended with bun being dead drunk in my car with mcdo hehe '
    },
    {
      id: 3,
      src: '/m&m3.jpg',
      alt: 'Happy times',
      text: 'bun making tambay! i remember how surprised i was to see you crying when we parked in UP. so glad you could see my campus and my turn in UNSW soon enough!'
    },
    {
      id: 4,
      src: '/m&m4.jpg',
      alt: 'Special moment',
      text: 'spontaneous first concert?! didnt know any niki songs but couldnt have enjoyed more. my pretty little seaweed took care of me while i was sick <3'
    },
    {
      id: 5,
      src: '/m&m5.jpg',
      alt: 'Cherished memory',
      text: 'you looked so gorgeous that day :) i remember me asking you how everything tasted cuz i was really sick too. you gave me the sweetest vday gift ever, youre so so thoughtful <3'
    },
    {
      id: 6,
      src: '/m&m6.jpg',
      alt: 'Cherished memory',
      text: 'post-first kiss! we couldnt keep our lips off each other that day. still remember how giddy you made me feel. lets recreate it soon? p.s. howd u do the leg thing nun'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-[caveat] text-center mb-12 text-gray-800">
          our little memory gallery!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === index 
                      ? 'scale-110 brightness-75' 
                      : 'scale-100 brightness-100'
                  }`}
                />
                
                {/* Gradient Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Text Overlay */}
                <div 
                  className={`absolute inset-0 flex items-end justify-center p-6 transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <p className="text-white font-[montserrat] text-lg font-medium text-center leading-relaxed">
                    {item.text}
                  </p>
                </div>
                
                {/* Decorative Hearts */}
                <div 
                  className={`absolute top-4 right-4 text-pink-400 text-2xl transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'opacity-100 scale-110 animate-pulse' 
                      : 'opacity-0 scale-75'
                  }`}
                >
                  ♥
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery