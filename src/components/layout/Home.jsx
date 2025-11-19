import Video from "next-video";
import Link from "next/link";
import video01 from "../../../videos/mancoravideo.mp4";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <Video
          src={video01}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        <div className="absolute inset-0 bg-zinc-900/50 z-20"></div>

        <article className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-9xl text-stone-200 font-satoshi font-medium">
            TRANSFER NORTE
          </h1>
          <div className="text-normal text-stone-400 mt-6">
            {" "}
            Seamless private transport crafted for those who value safety,
            style, and peace of mind
          </div>
        </article>

        {/*     <div className="absolute z-20 bottom-28 left-20 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-9 ">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-amber-600 text-zinc-200">
              Button1
            </div>
            <div className="bg-zinc-800/40 border w-32 h-32 flex items-center justify-center rounded-full border-amber-600 text-zinc-400">
              Button2
            </div>
          </div>
        </div> */}

        <div className="flex justify-center bg-black/20 items-center border-t w-full h-14 border-stone-600 text-stone-500 z-20 absolute bottom-0">
          <div className="w-full border-r border-stone-600 h-14 flex items-center justify-center">
            Trusted by travelers worldwide
          </div>
          <div className="w-full border-r border-stone-600 h-14 flex items-center justify-center">
            Certified chauffeurs
          </div>
          <div className="w-full  h-14 flex items-center justify-center">
            Tailored trips
          </div>
          <div className="w-full bg-amber-600 h-14 flex items-center justify-center text-zinc-200">
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* Te dejo opciones que funcionan muy bien para generar confianza desde el inicio.

Option A (si querés métricas sin inventar números):

Trusted by travelers worldwide

Locally rooted in Máncora

Premium fleet & certified chauffeurs

100% private, secure & on-time service

Option B (más orientado a experiencia):

Airport Pickups & Hotel Transfers

Private Tours Across Máncora

Professional, English-speaking Drivers

Luxury Vehicles, Full Comfort

Option C (más emocional):

Your comfort, our priority

Tailored trips & curated routes

Safe travel for families & solo explorers

Exceptional service, every mile

✅ 3. SECCIÓN DE PRESENTACIÓN (reemplazo del lorem ipsum largo)

Option A (premium y profesional):

From seamless airport arrivals to curated private tours, every journey with us is designed to feel effortless, elegant, and completely worry-free.
Every detail reflects our promise: uncompromising safety, discreet service, and true professionalism.
Our chauffeurs are hand-selected for their expertise and courtesy, our fleet blends comfort with advanced safety features, and our operations are guided by integrity.
With us, travel becomes more than transportation — it becomes a refined experience built around your comfort and confidence.

Option B (más emocional, storytelling):

From the moment you arrive, we make your journey effortless. Whether you’re heading to your hotel, exploring Máncora’s iconic landscapes, or discovering hidden gems, every ride is built on safety, comfort, and quiet luxury.
Our chauffeurs are chosen for their professionalism and warm hospitality, our vehicles combine elegance with modern safety, and our service is shaped around your expectations.
Here, travel is not a task — it’s a seamless experience crafted for peace of mind.

✅ 4. SECCIÓN CON IMÁGENES DE MÁNCORA (“Book Your Journey”)
Título Nuevo

Book your journey — experience Máncora with comfort and style

Texto descriptivo (elegante, emocional, inspirado en tu idea original):

We believe that every journey sets the tone for the memories that follow.
That an unexpected stop to watch the sunset can become the highlight of your trip.
That comfort is not a luxury — it’s a traveler’s right.
We were born in Máncora, where the desert meets the sea, and every road invites discovery.
Let us take you there, with serenity and elegance.

✅ 5. SECCIÓN “Discover your destination in style…” (texto mejorado)
Título optimizado

Discover Máncora in style with a dedicated private chauffeur and tailored itineraries

Texto descriptivo

Every detail of our service reflects our commitment to excellence.
Our chauffeurs are trained for discretion, courtesy, and safety.
Our fleet offers comfort, sophistication, and advanced safety features.
And every itinerary is shaped around your needs — whether you're exploring beaches, cultural sites, dining spots, or natural wonders.
With us, travel becomes smooth, secure, and genuinely enjoyable.

✅ 6. SECCIÓN “Ready to redefine the way you travel?” (call to action)
Título nuevo

Ready to redefine the way you travel?

Texto descriptivo

Experience a higher standard of private transport — one where comfort, reliability, and personal service come together to elevate every moment of your journey.

✅ 7. SERVICES SECTION (cards con imágenes: surf, actividades, etc.)

Te propongo 6 servicios típicos, elegantes y muy “Máncora-friendly”:

Airport Transfers

Seamless pick-ups and drop-offs from Talara, Tumbes, and Piura airports — always private, punctual, and secure.

Hotel Transfers

Direct, comfortable transportation to your hotel or villa in Máncora, Las Pocitas, Vichayito, or Los Órganos.

Private Tours

Custom routes to beaches, viewpoints, natural attractions, and iconic sites — crafted around your interests.

Surf & Activity Transfers

Reliable transport for surf sessions, kitesurfing, diving, whale watching, horseback riding, and more.

Gastronomy Routes

Discover Máncora’s finest restaurants with curated trips for lunch, dinner, or sunset drinks.

Full-Day Chauffeur Service

A dedicated driver at your disposal for the day — flexible, discreet, and tailored to your schedule.

✅ 8. FAQ SECTION (5 preguntas y respuestas, profesionales y reales)
1. Do you offer airport pick-up and drop-off services?

Yes. We provide private, punctual transfers from Talara, Tumbes, and Piura airports directly to your hotel or villa.

2. Are your chauffeurs certified?

All our chauffeurs are professionally trained, background-checked, and experienced in providing safe, discreet, and courteous service.

3. Can I customize my itinerary?

Absolutely. Whether you want to explore beaches, visit tourist spots, or enjoy local gastronomy, we tailor every route to your preferences.

4. What type of vehicles do you use?

Our fleet includes modern, comfortable vehicles equipped with air conditioning, safety systems, and space for luggage and sports equipment.

5. Do you operate 24/7?

Yes. We’re available at any time of the day to accommodate arrivals, early departures, or late-night activities.

✅ 9. CONTACT SECTION
Simple, profesional:

Get in touch
We’re here to help you plan your trip, arrange your transfers, or answer any questions.
Fill out the form and our team will respond shortly. 


1. Hero Section & Navigation Grids
Hero Tagline Alternative:
"Private Transfers & Tours in Máncora. Where Your Journey Begins with Ease and Elegance."

Text for the 4 Navigation Grids:
Instead of just followers, these grids can highlight your key value propositions.

Grid 1: Unmatched Safety

Title: Your Safety, Our Priority

Text: Modern fleet, certified drivers, and comprehensive insurance for total peace of mind.

Grid 2: Local Expertise

Title: Born in Máncora

Text: Insider knowledge to unlock the best secrets of the Peruvian coast, from hidden beaches to the perfect ceviche.

Grid 3: Seamless Experience

Title: Effortless Travel

Text: From airport pickup to hotel drop-off and every tour in between, we handle the details so you can simply enjoy.

Grid 4: Tailored for You

Title: Private & Personalized

Text: Your vehicle, your schedule. Craft your perfect Máncora itinerary with our dedicated service.

2. First Text Section (Below Hero)
Headline:
Redefining Travel in Northern Peru

Body Text:
From the moment we greet you at the airport to the final stop on your private tour, every journey is meticulously crafted to be effortless, elegant, and completely worry-free.

We believe the journey isn't a necessary inconvenience, but the opening chapter of your best memories. That an unexpected stop to watch the sunset over the Pacific can become the most cherished moment of your trip. That comfort isn't a luxury, but every traveler's right.

Born in Máncora, where the desert meets the sea, we don't just drive these roads—we call them home.

3. Section with Máncora Images
Headline (Replacing "Book Your Journey..."):
Your Máncora Adventure Awaits

Sub-headline / Call to Action:
You've planned the escape. Now, let us perfect the journey.

Body Text:
Discover the vibrant spirit of Máncora in style, with a dedicated chauffeur and tailored itineraries designed around your dreams. Whether you're here for the world-class surf, the breathtaking landscapes, or the vibrant local culture, we ensure your travel between experiences is as remarkable as the destinations themselves.

4. Similar Section (Next One)
Headline:
Discover Your Destination in Style
with a <span style="color: #a8a29e;">dedicated</span> chauffeur and tailored itineraries.

Body Text:
Every detail of our service reflects our unwavering promise: to deliver safety, discretion, and complete professionalism. Our English-speaking chauffeurs are not only experts of the road but also courteous ambassadors of our region. Our fleet combines elegance with advanced safety features, and every operation is guided by integrity. With us, travel transcends mere transportation—it becomes a seamless experience designed around your comfort and confidence.

Large Headline (Ready to redefine...):
Ready to Experience Máncora, Uninterrupted?

Body Text (replacing Lorem Ipsum):
Stop navigating and start immersing. Let us handle the logistics while you focus on what truly matters: creating unforgettable memories along the stunning northern coast of Peru. Contact us to begin designing your seamless journey.

5. Services Section
Use compelling titles and short descriptions for the activity cards.

Card 1: Airport Transfers

Title: Arrival & Departure

Text: A punctual and comfortable meet-and-greet service from Talara or Tumbes airports directly to your Máncora accommodation.

Card 2: Private Day Tours

Title: Explore the Coast

Text: Journey to iconic spots like Punta Sal, Los Órganos, Cabo Blanco, or the majestic Poza de Barro hot springs in your private vehicle.

Card 3: Surf & Beach Shuttles

Title: Catch the Perfect Wave

Text: Reliable shuttles to Máncora's best surf breaks and secluded beaches. We'll transport you and your board with ease.

Card 4: Custom Adventures

Title: Your Itinerary, Your Way

Text: Craft a unique adventure. From whale watching tours to discovering local cuisine, we provide the wheels for your perfect day.

6. FAQ Section
Q1: What areas do you serve?
A1: Our primary service area is Máncora and the surrounding northern Peruvian coast, including transfers from Talara (PYR) and Tumbes (TBP) airports, as well as tours to Punta Sal, Los Órganos, and Vichayito.

Q2: How do I book a transfer or tour?
A2: You can book directly through our website's contact form, by WhatsApp, or by calling us. We recommend booking at least 24 hours in advance to ensure availability.

Q3: Are the drivers English-speaking?
A3: Yes, our chauffeurs are proficient in English and Spanish, ensuring clear communication and a more personalized and comfortable experience for our international guests.

Q4: What is included in the price?
A4: Our rates typically include the private vehicle, our professional chauffeur, fuel, and all associated taxes. Specific tour details or additional stops can be arranged and quoted upon request.

Q5: What happens if my flight is delayed?
A5: No need to worry. We actively monitor flight arrivals for airport transfers. Your chauffeur will adjust the pickup time accordingly, so you will never be charged for a delay that is out of your control.

7. Contact Section
Headline:
GET IN TOUCH
Let's Craft Your Perfect Máncora Journey

Brief Intro (above the form):
Have a question or ready to book your private transfer? Send us a message below, and our team will get back to you promptly to arrange every detail of your trip.

*/
