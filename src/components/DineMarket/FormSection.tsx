
export default function FormSection() {
  return (
    <>
    <section className="font-poppin my-52 flex flex-col items-center justify-center text-center relative">
    <h1 className="lg:text-9xl md:text-8xl text-7xl font-bold text-[#f2f3f7]">Newsletter</h1>
    <div className="lg:space-y-4 space-y-2 absolute">
    <h1 className="md:text-3xl text-2xl font-bold tracking-wider">Subscribe Our Newsletter</h1>
    <p className="tracking-wider text-gray-700 md:text-base text-sm">Get the latest information and promo offers directly</p>
    <form className="space-x-3">
    <input type="email" placeholder="Input email address" 
           className="py-2 outline-none rounded-sm border-2 pr-12 pl-5 md:text-sm text-xs border-black tracking-widest mt-2"/>
    <button type="submit" className="bg-black text-white px-3 py-2 border-2 rounded-md tracking-widest
                 border-t-slate-400 border-l-slate-400 border-b-black border-r-black lg:text-base md:text-sm text-xs">Get Started</button>
            </form>
        </div>
    </section>
    
    </>
  )
}
