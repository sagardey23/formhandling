import React from 'react';


class Form extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            name:"",
            age:"",
            salary:"",
            user:[],
            isToggle:true

    }
}

    changeHandler = (event) => {
        this.setState({
           
            [event.target.name]:event.target.value
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault()

        const tempObj = {
            name:this.state.name,
            age:this.state.age,
            salary:this.state.salary
        }
        const tempArr = this.state.user;
        tempArr.push(tempObj)
        this.setState({
             
             user : tempArr,
             isToggle:!this.state.isToggle
             });
    }


    render(){
        const isToggle = this.state.isToggle;
        return(
            <>
            { isToggle ?
                <div>
            <form>
                <label htmlFor='name'> Name</label>
                <input
                 type="text"
                 id="name"
                 name="name"
                 value={this.state.name}
                 onChange={this.changeHandler}>
                 </input>
                 <br></br>

                 <label htmlFor='Age'> Age</label>
                 <input 
                  type="number"
                  id="age"
                  name="age"
                  value={this.state.age}
                  onChange={this.changeHandler}
                  ></input>
                  <br></br>

                  <label htmlFor='salary'>Salary</label>
                  <input
                    type="number"
                    id="salary"
                    name="salary"
                    value={this.state.salary}
                    onChange={this.changeHandler}>

                 </input>
                 <br></br>


                 <button onClick={this.handleSubmit}> Submit</button>



            </form>

            <br></br>
            </div>
            :
            <div>

            {this.state.user.map((value,index) => 
            {
                return (
                    <div key={index}>
                        <span> Name : {value.name} |</span>
                        <span>Age: {value.age} |</span>
                        <span>Salary: {value.salary} </span>
                    </div>
                )
            }
            )}
            </div>

            }

            </>
        )
    }
}
export default Form