import { FiShoppingBag } from "react-icons/fi";

export default function page() {
  return (
    <>
    <section className="font-poppin mt-20">
 <h1 className="font-bold md:text-2xl text-lg md:flex lg:ml-44 md:ml-16 hidden mb-10">Shopping Cart</h1>
 <div className="flex flex-col items-center justify-center">
 <FiShoppingBag size={120} className="md:mb-5 mb-2"/>
 <h1 className="font-bold md:text-3xl text-xl mb-40">Your shopping bag is empty</h1>
</div>
    </section>
    </>
  )
}
