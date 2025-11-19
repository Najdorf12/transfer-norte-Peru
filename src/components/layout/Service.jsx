import Accordion from "../ui/Accordion";
import Card from "../ui/Card";
const cardsContent = [
  {
    title: "Explore the Coast",
    text: "Punta Sal, Los Órganos, Cabo Blanco",
  },
  {
    title: "Gastronomy",
    text: "Trips for lunch, dinner, or sunset drinks.",
  },
  {
    title: "Surf & Beach Shuttles",
    text: "Surf sessions, kitesurfing, diving",
  },
  {
    title: "Full-Day Chauffeur",
    text: "Custom Adventures. Your Itinerary, Your Way",
  },
];
/* Airport Transfers

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

A dedicated driver at your disposal for the day — flexible, discreet, and tailored to your schedule. */

export default function Service() {
  return (
    <>
      <section
        id="services"
        className="h-[80vh] w-full py-12 px-16 text-balance relative "
      >
        <h4 className="text-8xl text-zinc-500 font-medium">
          Services <span className="text-amber-500">*</span>
        </h4>
        <div className="w-full mt-20 z-50 relative flex justify-start items-center gap-20">
          {cardsContent.map((card, i) => (
            <Card card={card} key={i} />
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="min-h-screen w-full py-12 px-16 text-balance relative "
      >
        <article className="w-full flex flex-col gap-14 justify-between relative max-w-[600px] ">
          <h6 className="text-8xl text-zinc-500 font-medium">
            Frequently Asked Questions <span className="text-amber-500">*</span>
          </h6>
          <p className="text-stone-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            repudiandae officiis tenetur laudantium odio placeat labore libero
            quisquam. Facilis, nobis?
          </p>
        </article>
        <div className="mt-16 flex flex-col items-end">
          <Accordion
            title="Can I customize my itinerary?"
            answer="Absolutely. Whether you want to explore beaches, visit tourist spots, or enjoy local gastronomy, we tailor every route to your preferences."
          />
          <Accordion
            title="What type of vehicles do you use?"
            answer="Our fleet includes modern, comfortable vehicles equipped with air conditioning, safety systems, and space for luggage and sports equipment."
          />
          <Accordion
            title="Do you operate 24/7?"
            answer="Yes. We’re available at any time of the day to accommodate arrivals, early departures, or late-night activities."
          />
          <Accordion
            title="Do you offer airport pick-up and drop-off services?"
            answer="Yes. We provide private, punctual transfers from Talara, Tumbes, and Piura airports directly to your hotel or villa."
          />
          <Accordion
            title="What is included in the price?"
            answer="Our rates typically include the private vehicle, our professional chauffeur, fuel, and all associated taxes. "
          />
        </div>
        <div className=" absolute flex justify-end -bottom-[40%] -left-[79%] w-full ">
          <img
            src="/images/icon1.svg"
            alt="Beautiful landscape for your journey"
            priority="true"
            className="object-contain w-full h-full max-w-[700px]"
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
/* Traslados Aeropuerto Talara -> Máncora: "Comenzando con el pie derecho. Te esperamos con un cartel con tu nombre."

Traslados entre Hoteles: "Movilidad flexible para explorar diferentes playas y caletas."

Excursiones de Día Completo: "¿Piensas en visitar Los Órganos o Punta Sal? Te llevamos y te esperamos."

Servicio Personalizado: "¿Tienes un plan diferente? Cuéntanos y creamos una ruta para ti."

Contenido de "Preguntas Frecuentes" (FAQs Creativas):

P: ¿Con cuánta anticipación debo reservar?

R: Recomendamos al menos 48 horas. Para fechas peak (verano, feriados), con más tiempo. ¡Pero siempre intentamos acomodar últimos minutos!

P: ¿Qué pasa si mi vuelo se retrasa?

R: Estamos en sincronía con el tráfico aéreo. Monitoreamos tu vuelo para que no tengas que preocuparte.

P: ¿Pueden acomodar surfboards o equipo de buceo?

R: ¡Por supuesto! Máncora es para los aventureros. Nuestros vehículos tienen espacio para tu equipo.

P: ¿Qué métodos de pago aceptan?

R: Aceptamos transferencias, tarjetas de crédito/débito y efectivo.

Contenido de "Tips de Viaje":

"El mejor momento para viajar por la carretera para evitar el tráfico."

"Qué llevar en tu maleta de mano para el traslado."

"3 miradores secretos que tu conductor puede mostrarte (si lo pides amablemente)." */
