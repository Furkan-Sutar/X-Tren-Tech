import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl">
            We Are X-tren - Web Developers Who Build the Future
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            At X-tren, we are passionate about creating high-quality, scalable web applications that solve real-world problems. Our expertise spans front-end and back-end development, ensuring our clients receive complete and efficient solutions.
          </p>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                Our mission is to deliver innovative and reliable digital solutions, helping businesses succeed online. We aim to stay ahead of the curve, using the latest technologies to meet the demands of an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800">Our Expertise</h3>
              <p className="mt-2 text-gray-600">
                From web design to back-end architecture, we specialize in the full stack of modern web development. Our team is proficient in frameworks like React, Next.js, and Node.js, ensuring top-tier functionality and performance.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800">Why Choose Us?</h3>
              <p className="mt-2 text-gray-600">
                At X-tren, we put our clients first. We listen, collaborate, and deliver solutions tailored to meet your business goals. Our passion for development and dedication to quality sets us apart in the web development industry.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Let's Build Something Amazing Together</h3>
          <p className="mt-4 text-gray-600">
            Whether you're looking to create a custom website, improve your existing platform, or explore new technologies, we are here to help. Reach out to X-tren, and let's discuss how we can turn your ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
