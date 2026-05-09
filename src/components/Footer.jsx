import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

   
      <div className="absolute inset-0 -z-10 bg-gray-200 dark:bg-[#0a0a0b]" />

   
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

     
      <div className="max-w-7xl mx-auto px-6 py-16">
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
     
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/skillsphare.png"
                alt="skillsphere logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                SkillSphere
              </h2>
            </div>

            
          </div>

       
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/generate"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-black dark:hover:text-white transition"
                >
                 All Course
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="space-y-4">

            
             
             <h1 className="text-xl font-bold">Social Link</h1>
           <div className="flex gap-4">
            <Image
                src="/logo-facebook.svg"
                alt="skillsphere logo"
                width={32}
                height={32}
                className="bg-blue-300 p-1 rounded-full text-white"
              />
            <Image
                src="/circle-play-fill.svg"
                alt="skillsphere logo"
                width={32}
                height={32}
                className="bg-red-300 p-1 rounded-full"
              />
              <p className="bg-black text-white p-1 rounded-full">x</p>
           
           </div>
          </div>
        </div>

     
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} skillsphere. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;