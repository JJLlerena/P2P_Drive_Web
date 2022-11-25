import Navbar from '../Navigation/Navbar'




function Login() {
    return(
        <>
        <Navbar/>

        <div className="form w-auto h-auto">
          <div className="box-border rounded-md bg-slate-200 h-fit my-10 mx-auto max-w-2xl px-2 sm:pt-6 sm:px-6 lg:px-8 text-2xl border-4">
              <div className="username" class="grid grid-cols-1 pb-2 px-10">
                  <label className="form__label"  for="firstName">Username: </label>
                  <input className="form__input"  type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="password" class="grid grid-cols-1 pb-2 px-10">
                  <label className="form__label" for="password">Password: </label>

                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div class="footer w-fit mx-auto">
                <button type='button' class='bg-[#003366] rounded-lg  py-2 px-12 '>
                <span class=' text-lg text-yellow-400'>Login</span>
                </button>
            </div>
          </div>
          
      </div> 
      </>     
    );
}

export default Login;