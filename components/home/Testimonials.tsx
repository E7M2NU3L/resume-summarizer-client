import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company A",
      image: "/images/Online.jpg",
      text: "This platform revolutionized our hiring process. The analytics and automation features are top-notch!",
    },
    {
      name: "Jane Smith",
      role: "HR Manager, Company B",
      image: "/images/Online.jpg",
      text: "An incredibly intuitive and efficient tool for managing our HR needs. Highly recommended!",
    },
    {
      name: "Michael Johnson",
      role: "Recruiter, Company C",
      image: "/images/Online.jpg",
      text: "Finding the right candidates has never been easier. The resume analytics are extremely accurate.",
    },
  ];

  return (
    <div className="min-h-[50vh] bg-gray-100 py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
