import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="h-[90vh] w-full flex items-center lg:pl-36  ">
        <article className="flex flex-col justify-evenly relative px-6 h-full">
          <div className="text-2xl md:text-4xl xl:text-5xl text-zinc-500 text-balance w-full text-start relative">
            <div className="absolute -top-3 left-5 md:-top-6 md:left-3 text-zinc-400 text-xl md:text-2xl ">
              ( 01 )
            </div>
            <span className="pl-24">
              {" "}
              From seamless airport arrivals to curated private tours, every
              journey with us is
            </span>
            <span className="text-amber-500 pl-4">
              designed to feel effortless, elegant, and completely worry-free.
            </span>{" "}
          </div>
          <p className="max-w-[500px] text-zinc-400 text-balance self-end text-sm lg:mr-12">
            Our chauffeurs are hand-selected for their expertise and courtesy,
            our fleet blends comfort with advanced safety features, and our
            operations are guided by integrity. With us, travel becomes more
            than transportation — it becomes a refined experience built around
            your comfort and confidence.
          </p>
        </article>
      </section>

      <section className="relative h-screen w-full flex flex-col bg-zinc-800 md:flex-row overflow-hidden">
        <article className="flex flex-col justify-between h-full relative z-10 w-full px-6 py-12 lg:px-20 lg:py-20  md:w-1/2  ">
          <h6 className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-zinc-200 font-medium">
            Book Your <br />
            Journey
          </h6>
          <div className="flex flex-col gap-6 ">
            <div className="text-lg lg:text-2xl xl:text-3xl text-zinc-300 font-light">
              Experience Máncora in style
            </div>
            <p className="max-w-full  text-stone-500 text-balance text-sm lg:text-base leading-relaxed">
              Discover the vibrant spirit of Máncora in style, with a dedicated
              chauffeur and tailored itineraries designed around your dreams. we
              ensure your travel between experiences is as remarkable as the
              destinations themselves.
            </p>
          </div>
        </article>

        <div className="absolute h-screen left-1/2 w-full md:w-1/2 flex justify-center items-center lg:p-9">
          <img
            src="/images/icon2.svg"
            alt="Beautiful landscape for your journey"
            priority="true"
            className="object-contain rounded-lg "
            style={{
              filter: "drop-shadow(0 0 0 transparent)",
              stroke: "none",
            }}
          />
        </div>
      </section>
    </>
  );
}

/* 1. Homepage Hero Section

Headline:
Travel in Comfort. Arrive with Confidence.

Sub-headline:
Seamless private transport crafted for those who value safety, style, and peace of mind.

CTA Button:
Book Your Journey

2. Services / Our Offerings

Introductory Sentence:
From airport arrivals to private tours, every journey with us is designed to be effortless, elegant, and completely worry-free.

Services:

Airport Transfers
Begin or end your trip with punctual, comfortable transfers that turn travel into tranquility.

Private City Tours
Discover your destination in style with a dedicated chauffeur and tailored itineraries.

Corporate Travel
Arrive prepared and composed—our professional drivers ensure every meeting begins stress-free.

Special Events
Celebrate in sophistication with luxury vehicles and impeccable service for life’s most memorable moments.

3. About Us

Every detail of our service reflects our promise: to deliver safety, discretion, and complete professionalism.
Our chauffeurs are carefully selected for their expertise and courtesy, our fleet combines elegance with advanced safety features, and our operations are guided by integrity.
With us, travel becomes more than transportation—it becomes a seamless experience designed around your comfort and confidence.

4. Call-to-Action Section (Standalone)

Hook:
Ready to redefine the way you travel?

Follow-up Sentence:
Experience the ease, safety, and sophistication that discerning travelers trust.

Primary CTA:
Book Your Journey Now
Secondary CTA:
View Our Fleet

5. Contact Section

Let us take care of the details.
Contact our team today for a personalized quote or to arrange your next effortless journey.
 

1. Homepage Hero Section
Headline: Your Journey, Perfected.

Sub-headline: Experience seamless, safe, and sophisticated travel from start to finish.

CTA Button: Reserve Your Ride

2. Services / Our Offerings Section
We provide more than just a ride; we deliver peace of mind and an elevated travel experience.

Airport Transfers: Transition effortlessly from your flight to a serene and timely journey to your destination.

Private City Tours: Discover the city's charm in comfort and style, with a route tailored to your interests.

Corporate Travel: Ensure a productive and impressive journey for your team or clients with our punctual and professional service.

Special Events: Arrive with elegance and make a lasting impression for your wedding, gala, or celebration.

3. About Us Section
At the heart of [Your Company Name] is an unwavering commitment to redefining passenger transport. We built our reputation on integrity, an uncompromising focus on safety, and the highest standards of professionalism. Our fleet of premium vehicles is meticulously maintained, and our chauffeurs are not just drivers, but courteous ambassadors dedicated to your comfort. We handle every detail, so you can relax and enjoy a truly seamless and stress-free journey from the moment we meet.

4. Call-to-Action Section (Standalone)
Hook: Contact our team today for a personalized quote or to arrange your next effortless journey.

Follow-up: Let us transform your transportation into a highlight of your trip.

Primary CTA: Secure Your Reservation

Secondary CTA: Explore Our Services
*/
