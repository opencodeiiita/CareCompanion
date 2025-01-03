import React from "react";

const Story = () => {
  return (

    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}


      {/* Main Section */}
      <main className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-box">
            <p className="text-5xl lg:text-6xl font-bold">This is {' '} <span className="text-pink"> Carecompanion</span></p>
            <p className="text-3xl lg:text-4xl ">Allow us to walk you through the journey that built this platform.</p>
        </div>
        <section className="Image">
            <img src="https://imageio.forbes.com/specials-images/imageserve/63a1f4ecff6366182c36e6bb/Medical-team-working-together/0x0.jpg?format=jpg&crop=4000,2250,x0,y1320,safe&width=960" 
            alt="Women's health"
            className="w-full "
            >  
            </img>
        </section>

      </main>

      {/* Talk to Us Section */}
      <section className="bg-lightpink py-16 px-6">
        <div className="text-left ml-10">
            <p className="text-3xl lg:text-4xl text-pink font-bold">Our story: How we came to be</p>
            <p className="text-xl lg:text-2xl text-gray-700"> Women's health has often been marginalized in the medical community, with a long running lack of research and negligence in the treatment of female patients. We have noticed this disparity and aim to empower women and take charge of their own wellbeing. 
CareCompanion was created with a simple yet powerful mission: to address the unique healthcare challenges women face, often overlooked or underserved. 
From the early days, we recognized the need for a platform that listens, understands, and provides meaningful and personalized solutions to women navigating 
critical health concerns. </p>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <img src="https://edhub.ama-assn.org/ImageLibrary/CourseImages/223/courses-womens-health-850.jpg" alt="key milestones"
                    className="items-center"
                ></img>
                <div>
                <p className="text-3xl lg:text-4xl text-pink font-bold">Our impact</p>
                <p className="text-xl text-gray-700">Our focus is on six key areas: Cancer Prevention, Menstrual Health, PCOS, Pregnancy, Postpartum Recovery, and Mental Health. 
These are not just medical issues—they’re deeply personal experiences that shape women’s lives. We aim to provide more than information; we offer a safe space 
where women can access expert guidance, connect with others, and take control of their health with confidence. 

                    Since launching, CareCompanion has grown into a trusted resource for thousands of women. 
                    We’ve introduced revolutionary ease of access to healthcare especially for women in rural areas, built a supportive community, and partnered with leading medical professionals to ensure women receive the care they deserve. We have left no stone unturned in our effort dismantle the baseless stigma surrounding women's health issues and helped many women seek the care they need.
                </p>
            </div> 
            </div>
            <p className="text-xl w-full text-gray-700">We have recorded a groundbreaking 65% increase in the number of women who have sought medical help in target rural regions and have successfully provided over 1000+ diagnoses and finished treatment for approximately 1600 women.
            At CareCompanion, we’re not just addressing challenges— we’re fostering hope, empowerment, and better health outcomes for women everywhere. </p> 
        </div>

      </section>
    </div>
  );
};

export default Story;