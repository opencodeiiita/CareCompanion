import React from "react";
const MentalHealth = () => {
  return (

    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}


      {/* Main Section */}
      <main className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="text-box">
          <p className="text-2xl md:text-3xl font-light leading-relaxed">
            Support which is inclusive of body, mind and emotions, which keeps your{' '}
            <span className="text-pink font-bold">Mental Health {' '}</span>
            <p className="text-2xl md:text-3xl font-light leading-relaxed"> well taken care of.</p>
          </p>
        </div>

        {/* Right Column */}
        <div className="image-box">
          <img
            src="https://media.istockphoto.com/id/1496615445/photo/portrait-of-beautiful-happy-woman-smiling-during-sunset-outdoor.jpg?s=612x612&w=0&k=20&c=_HXfCjbresNg_9Y-z1XHrw-JPBzov9l39RK_8Qmv7nk="
            alt="Menstrual health"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* Talk to Us Section */}
      <section className="bg-lightpink py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Talk to Us About
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Depression", "Anxiety", "Stress", "Postpartum Depression (PPD)", "Relationships","Gender identity","Physical Causes of emotional distress","Fertility"].map(
              (topic) => (
                <button
                  key={topic}
                  className="px-6 py-2 border-2 border-pink text-pink rounded-full hover:bg-pink hover:text-white transition-all duration-300"
                >
                  {topic}
                </button>
              )
            )}
          </div>
        </div>
      </section>
      <section className="bg-blue-100 py-16 px-6">
        <h2 className="text-center font-bold">Services we offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 justify-center gap-4">
      {[["Therapy","Book a therapy session with our highly qualified therapists and figure out a long term care plan for your mental health."],
      ["Trauma Counseling","Our therapists specializing in trauma and PTSD can help provide a safe space for you to get the support you deserve."],
      ["Postpartum counseling","Receive advice and support from our expert therapists about managing mental health in postpartum, including baby blues and PPD."],
      ["Menopause guidance","Menopause is a transition phase which brings with itself several mental, emotional and physical changes. Discuss with our experts to get the support you need."]].map(
              (topic) => (
                <div className="w-72 min-h-100 flex flex-col mx-auto rounded-lg bg-white hover:scale-105 text-center p-4">
                    <p className="text-left text-gray-700 text-2xl font-bold mb-4">{topic[0]}</p>
                    <p className="text-left text-gray-700 text-base font-light mb-4">{topic[1]}</p>
                    <div className="mt-auto">
                        <button className="px-4 py-2 border-2 text-white rounded-full bg-blue-800">
                        Book Now
                        </button>
                    </div>
                </div>
              )
            )}
        </div>
      </section>
    </div>
  );
};

export default MentalHealth;