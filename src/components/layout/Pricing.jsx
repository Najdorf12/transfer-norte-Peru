const cardsContent = [
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet",
  },
];

import Card from "../ui/Card"
export default function Princing () {
    return (
        <section className="w-full h-[75vh] flex items-center justify-center pl-44">
           <h6 className="text-7xl text-zinc-500 font-medium">Pricing {/* <span className="text-amber-500">*</span> */}</h6>
              <div className="w-full  mt-20 z-50 relative flex justify-center items-center gap-20">
                  {cardsContent.map((card,i)=>(
                    <Card card={card} key={i}/>
                  ))}
                </div> 
        </section>
    )
};