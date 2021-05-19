import React, { Component } from 'react';

export class Register extends Component {

    handleSubmit=e=>{
        e.preventDefault();
        const data={
            first_name:this.first_name,
            last_name:this.last_name,
            email:this.email,
            password:this.password,
            confirm_password:this.confirm_password,
        };
        console.log(data);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="container">
                <h3>Sign Up</h3>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">First name</label>
                    <div class=" col col-sm-8">
                    <input  onChange={e=>this.first_name=e.target.value} type="text" className="form-control" placeholder="first name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Last name</label>
                    <div class="col-sm-8">
                    <input onChange={e=>this.last_name=e.target.value}  type="text" className="form-control" placeholder="last name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-8">
                    <input  onChange={e=>this.email=e.target.value} type="email" className="form-control" placeholder="email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-8">
                    <input onChange={e=>this.password=e.target.value} type="password" className="form-control" placeholder="password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Comfirm Password</label>
                    <div class="col-sm-8">
                    <input onChange={e=>this.confirm_password=e.target.value} type="password" className="form-control" placeholder="comfirm password"/>
                    </div>
                </div>
                <button className="btn btn-primary btn-block" type="submit">Sign up</button>
            </div>
            </form>
        )
    }
}

export default Register
