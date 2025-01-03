import React from "react";
import members from "../Data/teaminfo"
const About = () => {
  return (

    <div className="min-h-screen py-10 bg-blue-100">
      {/* Header Section */}
      <div className="text-left ml-10 mb-8">
        <p className="text-4xl font-serif font-medium text-blue-600">Introducing the Team</p>
        <p className="text-2xl font-serif text-gray-600">Meet the people behind the project</p>
      </div>
        <div className="px-10 py-10 h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {members.map((member) => (
                <div
                key={member.id}
                className="relative shadow-lg rounded-lg transition-transform transform hover:scale-105 group">
                    <div className="relative w-full h-96 z-0">
                    {/* Image */}
                    <img
                    src={member.url}
                    alt={member.position}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"/>
                    </div>
                    <div className="absolute pt-8 inset-0 flex flex-col justify-center opacity-5 hover:opacity-100 transition-opacity item-center text-opacity-0 text-left hover:bg-indigo-400 z-10">
                        <p className="text-lg font-bold text-white text-left ml-5 hover:text-opacity-100 transition-opacity">{member.position}</p>
                        <p className="text-left text-white mb-4 px-4 hover:opacity-100 transition-opacity">{member.description}</p>
                        <p className="text-left text-white mb-4 px-4 hover:opacity-100 transition-opacity">{member.content}</p>
                    </div>
                </div>

            ))}
        </div>
        <p className="text-2xl text-gray-600 ml-10">This dynamic team combines expertise, passion, and innovation to make CareCompanion a trusted and transformative healthcare platform for women.</p>
    </div>
  );
};

export default About;