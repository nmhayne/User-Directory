import React from 'react';
import './App.css';
import API from "./Components/API";
import Employee from "./Components/Employee";




class App extends React.Component {
  
  state = {
    employeeArray : [],
    testArray: [1,2,3]
  }
  
   componentDidMount() {    
      for(let i=0;i<10;i++){
        API.getRandomUser()
        .then(res => {
          // console.log(res.data.results[0]);
          // let employeeArrayNew=[];
          // this.state.employeeArrayNew.push(res.data.results[0]);
          
         this.setState({employeeArray : res.data.result})

          // picture=res.data.results[0].picture.large;
      })
        .catch(err => {console.log(err);})
  };
  console.log(this.state.employeeArray);  
  // console.log("Message");
  {this.state.employeeArray.map(
    employee => (
    console.log(employee.email)
    )
  )
}
}
  render(){
     return(
    <div>

      <h1>Employee Directory</h1>

      <h5>Click on Carrots to filter by heading or use the search box to narrow your search</h5>

      {this.state.employeeArray.map(
        (employee) => (<Employee name={employee.email}></Employee>)
      )
    }
      
      {this.state.employeeArray.map(
        (employee) => (<h1>{employee}</h1>)
      )
    }
      <h1>Finished list</h1>
      {/* {this.state.employeeArray.map( employee => <Employee image={employee.picture.large}/>)} */}

{/* 
      <Employee image={this.state.employeeArray[0].picture.large}
></Employee> */}

    </div>
    )
  }
}

export default App;
