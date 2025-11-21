import Accordion from "../ui/Accordion";
import Card from "../ui/Card";
const cardsContent = [
  {
    title: "Explore the Coast",
    text: "Punta Sal, Los Órganos, Cabo Blanco",
  },
  {
    title: "Airport Transfers",
    text: "Custom Adventures. Your Itinerary, Your Way",
  },
  {
    title: "Gastronomy",
    text: "Trips for lunch, dinner, or sunset drinks.",
  },
  {
    title: "Surf & Beach Shuttles",
    text: "Surf sessions, kitesurfing, diving",
  },
];

export default function Service() {
  return (
    <>
      <section
        id="services"
        className="w-full py-20 md:px-16 text-balance relative lg:py-20 "
      >
        <article className="flex flex-col max-w-[600px] px-6 gap-9">
          <h4 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-8xl text-zinc-500">
            Services <span className="text-amber-500">*</span>
          </h4>
          <p className="text-sm md:text-base text-stone-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            repudiandae officiis tenetur laudantium odio placeat labore
          </p>
        </article>

        <div className="w-full z-50 relative flex flex-wrap justify-center items-center gap-3 mt-16 md:mt-20 lg:gap-12">
          {cardsContent.map((card, i) => (
            <Card card={card} index={i} key={i} />
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="text-balance relative min-h-screen w-full px-6 lg:px-16"
      >
        <article className="w-full relative max-w-[500px]">
          <h6 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-8xl text-zinc-500">
            Frequently Asked Questions <span className="text-amber-500">*</span>
          </h6>
        </article>

        <div className="mt-24 md:mt-20 flex flex-col items-end relative z-50">
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
            title="Do you offer drop-off services?"
            answer="Yes. We provide private, punctual transfers from Talara, Tumbes, and Piura airports directly to your hotel or villa."
          />
          <Accordion
            title="What is included in the price?"
            answer="Our rates typically include the private vehicle, our professional chauffeur, fuel, and all associated taxes. "
          />
        </div>

        <div className="absolute inset-0 -bottom-full w-full md:-left-1/5">
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
