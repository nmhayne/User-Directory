import React from 'react';
import './App.css';
import API from "./Components/API";
import Employee from "./Components/Employee";




class App extends React.Component {
    // STATE DECLARATIONS
    state = {
        employeeArray : [],
        testArray: [1,2,3]
    }
    
    componentDidMount() {    
        // FOR LOOP 10 ITTERATIONS 
        for(let i=0;i<10;i++){
            let newUser = this.createUser();
            console.log(newUser);
            console.log();
        };
    } 
    

    createUser() {
        let employeeObj={};
        API.getRandomUser()
            .then(res => {
                // employeeObj={
                //     fName : res.data.results[0].name.first,
                //     lName : res.data.results[0].name.last, 
                //     cell : res.data.results[0].cell,
                //     img : res.data.results[0].picture.large,
                //     dob : res.data.results[0].dob.date
                
                    employeeObj.fName = res.data.results[0].name.first;
                    employeeObj.lName = res.data.results[0].name.last; 
                    employeeObj.cell = res.data.results[0].cell;
                    employeeObj.img = res.data.results[0].picture.large;
                    employeeObj.dob = res.data.results[0].dob.date;
            })
        .catch(err => {console.log(err);})

        let newEmployeeArray=this.state.employeeArray;
        newEmployeeArray.push(employeeObj);
        this.state.msetState(employeeArray : newEmployeeArray)
    }

    render() {
        return(
            
            <div>
            
                <h1>Employee Directory</h1>
                
                <h5>Click on Carrots to filter by heading or use the search box to narrow your search</h5>
                
                {this.state.employeeArray}

            </div>
            )
        }
    }
    
    export default App;
    