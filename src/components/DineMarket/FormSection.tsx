
export default function FormSection() {
  return (
    <>
    <section className="font-poppin my-52 flex flex-col items-center justify-center text-center relative">
    <h1 className="text-9xl font-bold text-[#f2f3f7]">Newsletter</h1>
    <div className="space-y-5 absolute">
    <h1 className="text-3xl font-bold tracking-wider">Subscribe Our Newsletter</h1>
    <p className="tracking-wider text-gray-700">Get the latest information and promo offers directly</p>
    <form className="space-x-3">
    <input type="email" placeholder="Input email address" 
           className="py-2 outline-none rounded-sm border-2 pr-12 pl-5 text-sm border-black tracking-widest mt-3"/>
    <button type="submit" className="bg-black text-white px-3 py-2 border-2 rounded-md tracking-widest
                 border-t-slate-400 border-l-slate-400 border-b-black border-r-black">Get Started</button>
            </form>
        </div>
    </section>
    
    </>
  )
}
