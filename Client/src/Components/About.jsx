
import {UserCircleIcon} from "@heroicons/react/24/outline";
import Patrick from "../images/Patrick.webp";
import Penguin from "../images/Johnnypfp.webp";
import Gerardo from "../images/Gerardopfp.webp";
import Michael from "../images/Michaelpfp.png";
import Squidward from "../images/Shawnpfp.webp";
import Jorge from "../images/Jorgepfp.webp";
import DOM from "../images/Dominickpfp.webp";
function About() {
    return(
    <div className="About">
        <h1 class='mt-10 w-86 text-4xl text-center pb-5'>ABOUT US</h1>
          <p class='w-auto px-auto pb-5 mx-10 text-xl text-center md:w-fit md:px-40 md:mx-auto'>Here at FIU we are given the opportunity to work on new and exciting. 
          P2P Drive is the perfect opportunity to enhance our skills and enhance our development. 
          This project focuses on creating a decentralized file sharing system, 
          storing fragments of your personalized files accross multiple nodes.</p>
          <div class='grid bg-slate-200 pt-5 gap-y-4 grid-cols-2 h-fit w-96 px-10 mx-auto'>
            <div>
            <img class='h-10 w-10 rounded-full justify-self-center mx-10' src={Penguin}/>
                <span>
                    Johnny Llerena
                </span>
                <br/>
                <span>
                    Front End Developer
                </span>
            </div>
            <div>
            <img class='h-10 w-10 rounded-full justify-self-center mx-10' src={Gerardo}/>
                <span>
                    Gerardo Leon
                </span>
                <br/>
                <span>
                    Front End Developer
                </span>
            </div>
            <div>
            <img class='h-10 w-10 rounded-full justify-self-center mx-10' src={Michael}/>
                <span>
                    Michael Garrido
                </span>
                <br/>
                <span>
                    Back End Developer
                </span>
            </div>
            <div>
            <img class='h-10 w-10 rounded-full justify-self-center mx-10' src={Patrick}/>
                <span>
                    Martin Moreano
                </span>
                <br/>
                <span>
                    Back End Developer
                </span>
            </div>
            
            <div>
            <img class='h-10 w-10 rounded-full justify-self-center mx-10' src={Squidward}/>
                <span>
                    Shawn Zukowski
                </span>
                <br/>
                <span>
                    Back End Developer
                </span>
            </div>
            <div>
            <img class='h-10 w-10 rounded-full justify-self-center mx-10' src={Jorge}/>
                <span>
                    Jorge Cortes
                </span>
                <br/>
                <span>
                    Front End Developer
                </span>
            </div>
            <div>
            <img class='h-10 w-10 rounded-full justify-self-center mx-10' src={DOM}/>
                <span>
                    Dominick Diaz
                </span>
                <br/>
                <span>
                    Back End Developer
                </span>
            </div>
             
          </div>


export default About