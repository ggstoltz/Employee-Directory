import React, { Component } from 'react';
import SearchForm from './SearchForm';
import EmployeeCard from'./EmployeeCard';
import API from '../utils/API';
import'./results.css';
const MaxResults = 20;

class SearchResultArea extends Component {
    state = {
        result: [],
        filter: '',
        filterBy: 'lastname',
        currentSort: 'default',
        sortField:''
    };

// when component mounts search using the API
componentDidMount() {
    API.search()
    .then(res => {
        console.log(res)
        this.setState({
            result: res.data.results.map((e, i) => ({
                firstName: e.name.first,
                lastName: e.name.last,
                picture: e.piture.large,
                email: e.email,
                phone: e.phone,
                dob: e.age,
                key: i
            }))
            
        })
    })
        .catch(err => console.log(err));
}

filterEmployees = (searchkey) => {
    console.log("***in Filter*******");
    console.log(searchkey);
    console.log(this.state.result);
    
    var filterResult = this.state.result.filter(person => person.firstName === searchkey)
this.setState({
    result:filterResult
})
}

handleFormSubmit = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);

    this.filterEmployees(value);
    
    this.setState({
        [name]: value
    })
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
};

handleImputChange = event => {
    event.preventDefault();
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);

    this.setState({
        [ name ]: value
    });
};

render() {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h1>Employee Directory</h1>
          </div>
        </div>
                <div className="row">
                <div className="col-md-6">
                    <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
          </div>
        </div>

    <div className='row'>
        {/* <div> */}
        <table className='table'>
            <tr>
            <th scope="col">Photo</th>
              <th>First Name</th>
              {/* <th onClick={this.onSortChange}>First Name   */}
              {/* <button onClick={this.onSortChange}> ^
								</button> */}
              {/* </th> */}
              <th scope="col">Last Name </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
            {/* { [...this.state.result].sort(this.sortTypes[this.state.currentSort].fn).map((item) =>  */}
            {/* {this.state.result.length > 0 ? (
                <div>
                  {this.state.result.map(item => (
                    <EmployeeCard
                      picture={item.picture}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      email={item.email}
                      phone={item.phone}
                      key={item.key}
                    />
                  ))}
                </div>
              ) : (<div />)} */}
            {[...this.state.result].map((item) =>
              <EmployeeCard
                picture={item.picture}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />
            )}

        </table>
        </div>
        </div>
    
    );

    }

}

export default SearchResultArea;
