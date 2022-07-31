import React from 'react'

const Admin = () => {
    return (
        <>
        <div class="container1">
        
        <nav class="navbar navbar-expand-lg py-3 row">
            <div class="container-fluid">
                    <img src="bruteforcelogo.jpeg"
                        alt="logo" width="100%" style="max-width: 200px;"/>
                <div class="collapse navbar-collapse justify-content-end" id="navbarOffCanvas">
                    <ul class="navbar-nav">
                        <li class="nav-item"><button class="btn btn_nav rounded-0 p-3">HOME</button></li>
                        <li class="nav-item"><button class="btn btn_nav rounded-0 p-3">JOBS</button></li>
                        <li class="nav-item"><button class="btn btn_nav rounded-0 p-3">COMPANIES</button></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        <div class="container-fluid my-5">
        <div class="container">
            <h1 class="text-center" style="color: #8a39e1; padding: 5px; font-size: 2.5rem; font-weight: bold;">Admin login</h1>
            
            <form class="my-5">
                <div class="form-group row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <input type="email" class="form-control-plaintext" id="Email" placeholder="Email *"/>
                        <hr style="border-bottom: 1px solid darkgray;"/>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <input type="password" class="form-control-plaintext" id="Passwurd" placeholder="Password *"/>
                        <hr style="border-bottom: 1px solid darkgray;"/>
                    </div>
                    
                </div>
                
                <div class="text-center">
                    <a href="#" class="btn btn-lg rounded-0 my-3 px-4 py-2"
                        style="color: white; background-color:#d47ae8; font-size: 20px;">SUBMIT</a>
                </div>
                <p class="text-center">This site is protected by reCAPTCHA and the Google <span
                        style="color: #d47ae8;"><a href="#" class="green1">Privacy Policy</a></span> and <span
                        style="color: #d47ae8"><a href="#" class="green2">Terms of
                            Service</a></span> apply.</p>

            </form>
        </div>
    </div>

        </>
          
          
    )
}

export default Admin