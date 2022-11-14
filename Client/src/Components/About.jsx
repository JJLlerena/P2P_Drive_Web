import {UserCircleIcon} from "@heroicons/react/24/outline";
function About() {
    return(
    <div className="About">
        <h1 class='mt-10 w-86 text-4xl text-center pb-5'>ABOUT US</h1>
          <p class='w-auto px-auto pb-5 mx-10 text-xl text-center md:w-80 md:mx-auto'>Here at FIU we are given the opportunity to work on new and exciting. 
          P2P Drive is the perfect opportunity to enhance our skills and enhance our development. 
          This project focuses on creating a decentralized file sharing system, 
          storing fragments of your personalized files accross multiple nodes.</p>
          <div class='grid bg-slate-200 pt-5 gap-y-4 grid-cols-2 h-fit w-96 px-10 mx-auto justify-items-center'>
            <div>
                <UserCircleIcon className="h-10 w-10"/>
                <span>
                    Johnny Llerena
                </span>
            </div>
            <div>
                <UserCircleIcon className="h-10 w-10"/>
                <span>
                   Gerardo Leon 
                </span>
            </div>
            <div>
                <UserCircleIcon className="h-10 w-10"/>
                <span>
                    Michael Garrido
                </span>
            </div>
            <div>
                <UserCircleIcon className="h-10 w-10"/>
                <span>
                    Martin Moreano
                </span>
            </div>
            <div>
                <UserCircleIcon className="h-10 w-10"/>
                <span>
                    Keiss De Los Santos
                </span>
            </div>
            <div>
                <UserCircleIcon className="h-10 w-10"/>
                <span>
                    Shawn Zukowski
                </span>
            </div>
            <div>
                <UserCircleIcon className="h-10 w-10"/>
                <span>
                    Jorge Cortes
                </span>
            </div>
            <div>
                <UserCircleIcon className="h-10 w-10"/>
                <span>
                    Hello
                </span>
            </div>
             
          </div>
        
    </div>
    )
}

export default About