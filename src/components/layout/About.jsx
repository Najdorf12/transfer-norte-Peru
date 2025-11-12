import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="h-[90vh] w-full flex items-center lg:pl-36  ">
        <article className="flex flex-col gap-42 relative">
          <div className="absolute -top-6 left-3 text-2xl text-zinc-400">
            ( 01 )
          </div>
          <div className="text-5xl text-zinc-500 text-balance w-full text-start ">
            <span className="pl-24">
              {" "}
              From airport arrivals to private tours, every journey with us is
            </span>
            <span className="text-amber-500 pl-4">
              designed to be effortless, elegant, and completely worry-free
            </span>{" "}
            lorem ipsum dolor sit, amet consectetur
          </div>
          <p className="max-w-[500px] text-zinc-400 text-balance self-end mr-20 text-sm">
            Every detail of our service reflects our promise: to deliver safety,
            discretion, and complete professionalism. Our chauffeurs are
            carefully selected for their expertise and courtesy, our fleet
            combines elegance with advanced safety features, and our operations
            are guided by integrity. With us, travel becomes more than
            transportation—it becomes a seamless experience designed around your
            comfort and confidence.
          </p>
        </article>
      </section>

      <section className="relative h-screen w-full flex flex-col bg-zinc-800 md:flex-row overflow-hidden">
        <article className="flex flex-col justify-between relative z-10 w-full px-9 py-12 lg:px-24 lg:py-20  md:w-1/2  ">
          <h6 className="text-8xl text-zinc-200 font-medium">
            Book Your <br />
            Journey
          </h6>
          <div className="flex flex-col gap-6 ">
            <div className="text-xl md:text-2xl lg:text-3xl text-zinc-300 font-light">
              You've done enough to prove yourself.
            </div>
            <p className="max-w-full  text-stone-500 text-balance text-sm md:text-base leading-relaxed">
              Creemos que el trayecto no es un mal necesario, sino el prólogo de
              tus mejores recuerdos. Que una parada inesperada para ver el
              atardecer puede ser el momento más memorable de un viaje. Que la
              comodidad no es un lujo, sino un derecho del viajero. Nacimos en
              Máncora, donde el desierto besa al mar.
            </p>
          </div>
        </article>

        <div className="w-full md:w-1/2 flex justify-center items-center lg:p-9">
          <img
            src="/images/icon2.svg"
            alt="Beautiful landscape for your journey"
            priority
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
