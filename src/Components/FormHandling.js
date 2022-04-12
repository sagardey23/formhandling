import React from 'react';
import FormData from './FormData';

class FormHandling extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            salary:"",
            user:[],
            isToggle:true

        }
    }
    handleChange= (event)=> {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // alert(`${this.state.name} ${this.state.age} ${this.state.salary}`)
        const tempObj = {
            name:this.state.name,
            age: this.state.age,
            salary:this.state.salary
        }
        const tempArr = this.state.user;
        tempArr.push(tempObj)

        this.setState({
            user:tempArr,
            isToggle:!this.state.isToggle
        })
    }





    render(){
        const {name, age, salary ,user, isToggle} = this.state
        // const isToggle = this.state.isToggle
        return(
            <>{
                isToggle ?
            
            <div>
                <h1>Form Handling</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}></input>
                    <br></br>

                    <label>Age:</label>
                    <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={this.handleChange}></input>
                    <br></br>

                    <label>Salary:</label>
                    <input
                    type="number"
                    id="salary"
                    name="salary"
                    value={salary}
                    onChange={this.handleChange}></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
            :
            <FormData formdata= {user} />
            }
            </>
        )
    }
}
export default FormHandling