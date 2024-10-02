import Image from "next/image";
import React from "react";

const WhoWeAreComp = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-slate-100">
        <div className="container max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 "
            data-aos="fade-right"
          >
            <Image
              src="https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/who-we-are/who-we-are-our-beliefs.png"
              alt="hero"
              className="object-cover object-center rounded-2xl"
              width={1000}
              height={667}
            />
          </div>
          <div
            data-aos="fade-left"
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-careerRed">
              Who We Are
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              We believe wellness should be accessible to everyone. That&apos;s
              why we offer a comprehensive range of pharmaceutical services,
              including: Essential medications and health products Expert
              consultations with our knowledgeable staff Convenient online
              ordering and delivery Personalized care plans tailored to your
              unique needs More Than Just a Pharmacy JMC Medicine Corner Limited
              goes beyond dispensing medication. We are committed to: Promoting
              health education to empower our community with knowledge
              Prioritizing affordability to ensure everyone can access the care
              they need Delivering exceptional customer service with a focus on
              empathy and respect We aspire to be the leading name in
              pharmaceutical care within Bangladesh. Through innovation,
              community engagement, and a relentless focus on excellence, we
              strive to: Set new standards in customer service and patient care
              Continuously improve health outcomes through evidence-based
              practices Foster a culture of health and wellness for every
              individual we serve Join us on our mission to illuminate a path to
              better health. Visit your nearest JMC Medicine Corner Limited
              today!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAreComp;
