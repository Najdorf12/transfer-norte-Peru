import Accordion from "../ui/Accordion";

export default function Service() {
  return (
    <section className="min-h-screen w-full py-12 px-16 text-balance relative ">
      <article className="w-full flex flex-col gap-14 justify-between relative max-w-[600px] ">
        <h6 className="text-8xl text-zinc-500 font-medium">Frequently Asked  Questions <span className="text-amber-500">*</span></h6>
        <p className="text-stone-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          repudiandae officiis tenetur laudantium odio placeat labore libero
          quisquam. Facilis, nobis?
        </p>
      </article>
      <div className="mt-16 flex flex-col items-end">
        <Accordion
          title="Do you prefer Android or iOS"
          answer="I like to use iOS products"
        />
        <Accordion
          title="Do you prefer writing CSS or Tailwind?"
          answer="I like to use Tailwind"
        />
        <Accordion
          title="Tricolor or Tallarin?"
          answer="Vruno is Tallarin tira piedra"
        />
        <Accordion
          title="Do you prefer Batman or Superman?"
          answer="I am using Supabase!"
        />
        <Accordion
          title="Do you prefer wakarinkis or finkinpulis"
          answer="I am using Supabase!"
        />
      </div>
        <div className=" absolute flex justify-end -bottom-[40%] -left-[79%] w-full ">
        {/*  <p className="text-6xl text-end text-balance max-w-[600px] text-zinc-700">
          YOUR TRAVEL START HERE
        </p> */}
        <img
          src="/images/icon1.svg"
          alt="Beautiful landscape for your journey"
          priority
          className="object-contain w-full h-full max-w-[700px]"
          style={{
            filter: "drop-shadow(0 0 0 transparent)",
            stroke: "none",
          }}
        />
      </div>
    </section>
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
