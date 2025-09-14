import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import Ch_1 from '../assets/images/church-about-img.webp'
import sig from '../assets/images/sig-img.webp'
import BreadCrumb from './BreadCrump';

export default function AboutUsHero() {
  return (
    <section className="bg-gray-50 py-12 lg:py-20">
        <BreadCrumb items={[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
        ]}/>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to The<br />
              First Church of<br />
              The Plains
            </h1>
            
            <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit 
              ipsa quae ab illo invene ipsa quae ab ille ab illo inventor 
              sed totam rem ape eaque ipsa quae ab illo invene ipsa ae 
              ab ille ab illo inventore.
            </p>

            {/* Meeting Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">We are now meeting online!</p>
                  <p className="text-amber-600 font-medium">Every Sunday @ 11:30am via Zoom.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Haberdashers' Aske's Hatcham<br />
                    College Jerningham Road<br />
                    London,
                  </p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mb-8">
              <img src={sig} alt='' />
            </div>
          </div>

          {/* Right Content - Church Image (Hidden on small screens) */}
          <div className="order-1 lg:order-2 hidden lg:block">
              <img src={Ch_1} alt='' />
          </div>
        </div>

      </div>
    </section>
  );
}