import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";

export default function FooterSection() {
  return (
    <>
    <section>

    <footer className="lg:px-36 font-poppin grid grid-cols-4 space-x-28">

        <div className="flex flex-col gap-y-10">
        <Image src={"/logo.png"} alt="feature1" width={180} height={180}/>
        <p className="text-gray-600">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
        <div className="flex gap-x-4">
            <button className="bg-gray-100 p-3 rounded-md">
                <Link href={"/"}> <BsTwitter size={20} /> </Link>
            </button>
            <button className="bg-gray-100 p-3 rounded-md">
                <Link href={"/"}> <CgFacebook size={20} /> </Link>
            </button>
            <button className="bg-gray-100 p-3 rounded-md">
                <Link href={"/"}> <BiLogoLinkedin size={20} /> </Link>
            </button>
            </div>
            </div>

            <div>
                <h1 className="font-bold text-xl mb-5">Company</h1>
                <ul className="space-y-4 text-gray-600">
                    <li>About</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>How it Works</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div>
                <h1 className="font-bold text-xl mb-5">Support</h1>
                <ul className="space-y-4 text-gray-600">
                    <li>Support Carrer</li>
                    <li>24h Service</li>
                    <li>Quick Chat</li>
                </ul>
            </div>

            <div>
                <h1 className="font-bold text-xl mb-5">Contact</h1>
                <ul className="space-y-4 text-gray-600">
                    <li>Whatsapp</li>
                    <li>Support 24h</li>
                </ul>
            </div>
            
    </footer>

    <div className="flex justify-around items-center font-poppin border-t-2 border-gray-600 mt-40 py-6">
        <p className="text-gray-600">Copyright <span className="text-black font-bold">© 2022 Dine Market</span></p>
        <p className="text-gray-600">Design by. <span className="font-bold text-black"> Weird Design Studio</span></p>
        <p className="text-gray-600">Code by.<span className="font-bold text-black"> nabilzafar on github</span></p>
    </div>


    </section>
    
    </>
  )
}
