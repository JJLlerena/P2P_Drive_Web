




function Login() {
    return(
        <div className="form w-auto h-auto">
          <div className="box-border bg-gray-300 h-fit my-10 mx-auto max-w-2xl px-2 sm:pt-6 sm:px-6 lg:px-8 text-2xl border-4">
              <div className="username pb-2">
                  <label className="form__label" class='mt-10' for="firstName">Username or email: </label>
                  <input className="form__input"  type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="password pb-2">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div class="footer w-fit mx-auto">
                <button type='button' class='bg-[#003366] rounded-lg  py-2 px-12 '>
                <span class=' text-lg text-yellow-400'>Register</span>
                </button>
            </div>
          </div>
          
      </div>      
    );
}

export default Login;