import React, { useState } from 'react';

const projects = [
  {
    title: 'The Future of Solar Energy',
    content: 'is not only beneficial for residential use but also for commercial applications. Businesses that invest in solar power can experience significant cost savings on energy bills, enhance their corporate sustainability profile, and reduce their carbon footprint. Commercial solar installations offer scalable solutions, from small-scale systems for individual buildings to large-scale projects for industrial operations. By embracing solar energy, companies can contribute to environmental conservation while enjoying long-term financial benefits and a competitive edge in the marketplace.',
    video: 'https://www.youtube.com/embed/qDponbzzbZE',
  },
  {
    title: 'How Solar Panels Reduce Your Energy Bills',
    content: 'Solar energy is rapidly becoming a cornerstone of sustainable energy solutions. As technology advances, solar panels are becoming more efficient and affordable. This clean energy source not only helps reduce greenhouse gas emissions but also provides energy independence. Investing in solar technology is not just a step towards a greener planet but also a wise financial decision. With the potential for significant savings on energy bills and numerous environmental benefits, solar energy is poised to play a crucial role in our future energy landscape.',
    video: 'https://www.youtube.com/embed/Yxt72aDjFgY',
  },
  {
    title: 'The Environmental Benefits of Solar Panel Systems',
    content: 'Bills Installing solar panels can lead to significant savings on energy bills. By converting sunlight into electricity, solar panels reduce the amount of energy you need to purchase from your utility provider. Over time, this can result in substantial cost savings. Additionally, many regions offer incentives and rebates for solar panel installations, further lowering the initial investment. As energy prices continue to rise, having a solar power system in place can provide financial stability and lower your overall energy expenses.',
    video: 'https://www.youtube.com/embed/DIkCQ1NU1E0',
  },
  {
    title: 'The Environmental Benefits of Solar Panel Systems',
    content: 'Solar panel systems offer substantial environmental benefits by reducing reliance on fossil fuels. By harnessing the power of the sun, these systems generate clean, renewable energy that minimizes pollution and reduces greenhouse gas emissions. This shift towards solar energy contributes to a decrease in air and water pollution, promoting a healthier environment. Moreover, solar panels help conserve natural resources and reduce the environmental impact associated with traditional energy production methods, making them a key component of a sustainable energy future.',
    video: 'https://www.youtube.com/embed/DIkCQ1NU1E0',
  },
  {
    title: 'The Environmental Benefits of Solar Panel Systems',
    content: 'Recent advancements in solar technology are transforming the renewable energy landscape. Innovations such as high-efficiency photovoltaic cells and advanced solar thermal systems are making solar power more accessible and effective. These technological improvements not only increase the energy output of solar panels but also enhance their durability and performance. As research continues, we can expect even greater efficiency and affordability, driving widespread adoption of solar energy solutions and contributing to a more sustainable and eco-friendly future.',
    video: 'https://www.youtube.com/embed/DIkCQ1NU1E0',
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900" data-aos="fade-up">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <iframe
                  width="320"
                  height="240"
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full rounded-t-lg"
                ></iframe>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{project.title}</h5>
                <p className="text-gray-700 text-base mb-4">
                  {expandedIndex === index ? project.content : project.content.substring(0, 100) + '...'}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-500 hover:underline"
                >
                  {expandedIndex === index ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;