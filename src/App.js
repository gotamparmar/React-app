import React, { Component } from 'react'
import './App.css'
 class App extends Component {
    constructor(){
        super()
        this.state={
            employee:[{id:101,name:"gautam",age:19,city:"indore",salary:50000},
                      {id:102,name:"rahul",age:23,city:"indore",salary:40000},
                      {id:103,name:"dipak",age:29,city:"nanukhedi",salary:9000},
                      {id:104,name:"vishal",age:18,city:"nanukhedi",salary:9000},
                      {id:105,name:"abhisek",age:19,city:"nanukhedi",salary:9000},
                      {id:106,name:"kuldeep",age:19,city:"nanukhedi",salary:9000},
                      {id:107,name:"lokesh",age:23,city:"rajoda",salary:9000},
                      {id:108,name:"sunil",age:22,city:"nanukhedi",salary:9000},
                      {id:109,name:"devendra",age:18,city:"nanukhedi",salary:9000},]
        }
    }
    add=()=>{
      var ob={
      id:this.idbox.value,
      name:this.namebox.value,
      age:this.agebox.value*1,
      city:this.citybox.value,
      salary:this.salarybox.value,

    }
    this.setState({employee:[...this.state.employee,ob]})
    this.clearbox()
  }
  clearbox=()=>{
    this.idbox.value=""
    this.namebox.value=""
    this.agebox.value=""
    this.citybox.value=""
    this.salarybox.value=""
  }
  render() {
    return (
      <div>
        <h1 align='center' >employee managment </h1>
      ID&nbsp;&nbsp;<input  ref={c=>this.idbox=c} placeholder='enter employee id '></input>&nbsp;&nbsp;&nbsp;&nbsp;
         NAME&nbsp;&nbsp;<input  ref={c=>this.namebox=c} placeholder='enter employee name '></input>&nbsp;&nbsp;&nbsp;&nbsp;
        AGE&nbsp;&nbsp; <input  ref={c=>this.agebox=c} placeholder='enter employee age '></input>&nbsp;&nbsp;&nbsp;&nbsp;
       CITY&nbsp;&nbsp;  <input  ref={c=>this.citybox=c} placeholder='enter employee city'></input>&nbsp;&nbsp;&nbsp;&nbsp;
        SALARY&nbsp;&nbsp; <input  ref={c=>this.salarybox=c} placeholder='enter employee salary '></input>&nbsp;&nbsp;<br></br><br></br>
      <button onClick={this.add} >add employee</button>
        <table cellPadding="10px" cellSpacing="10px" align='center'>
            <tr>
              <th>s.no</th>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>city</th>
            <th>salary</th>
            </tr>
            {this.state.employee.map((emp,index)=>
            {
              return  <tr>
                <td>{index+1}</td>
               <td>{emp.id}</td>
               <td>{emp.name}</td>
               <td>{emp.age}</td>
               <td>{emp.city}</td>
               <td>{emp.salary}</td>
            </tr>
            })}
            </table>
      </div>
    )
  }
}
export default App;