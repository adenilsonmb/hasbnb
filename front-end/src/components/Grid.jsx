import Item from "./Item";
import Hero from "./Hero";


const Grid = () => {
  return (
  <>
    <section className="relative">
         <div className=" relative z-50 gap-8  rounded-full mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] max-w-7xl p-8">
            <Hero/>
          </div>
     </section>
    <section className="relative">
        <div className="relative gap-8  rounded-full mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] max-w-7xl p-8">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
    </section>
      </>
  )
}

export default Grid
