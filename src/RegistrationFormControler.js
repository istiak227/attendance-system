import React, { Component } from 'react'

class RegistrationFormControler extends Component {
    constructor() {
        super () 
        this.state = {
            employeeId: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            phoneNum: "",
            userData: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            employeeId: Math.floor(Math.random() * 100),
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
    
        console.log(data.get('lastName')); // reference by form input's `name` tag
      }

   /* handleSubmit(e) {
        e.preventDefault()
        const form = e.target;
        const formData = JSON.stringify(form);
        console.log(formData);
        //alert(`New Employee ${this.state.firstName} Employee Number ${this.state.employeeId} was Registered`)
        /* this.setState({
            userData: {
                employeeId: this.state.employeeId,
                firstName: this.state.firstName
            }
        }) 
    }*/

    render() {
        const { firstName, lastName, dateOfBirth, gender, phoneNum } = this.state
        console.log(firstName, lastName, dateOfBirth, gender, phoneNum)
        return (
            <div>
                <h1>Register a new Employee</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="First Name" value={firstName} name="firstName" />
                    <input onChange={this.handleChange} type="text" placeholder="Last Name" value={lastName} name="lastName" /><br/>
                    <input onChange={this.handleChange} placeholder="Date of Birth" value={dateOfBirth} name="dateOfBirth" /><br/>
                    <label>Gender</label>
                    <label>
                        <input onChange={this.handleChange} type="radio" value="male" name="gender" checked={gender==="male"} /> Male
                    </label>
                    <label>
                        <input onChange={this.handleChange} type="radio" value="female" name="gender" checked={gender==="female"} /> Female
                    </label><br/>
                    <input onChange={this.handleChange} type="text" placeholder="Phone Number" value={phoneNum} name="phoneNum" /><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default RegistrationFormControler