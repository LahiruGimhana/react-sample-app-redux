import React, { Component } from 'react'

export class nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <div className="container"> */}
                      <a class="navbar-brand" href={'./'}>Home</a>
                      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul class="navbar-nav ml-auto">
                          <a class="nav-item nav-link" href={'./login'}>Login</a>
                          <a class="nav-item nav-link" href={'./register'}>Signup</a>
                        </ul>
                      {/* </div> */}
                      
                    </div>
                </nav>   
            </div>
        )
    }
}

export default nav
