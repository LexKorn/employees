import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/emplyees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Kirill Labushev', salary: 800, increase: false, id: 1},
                {name: 'Maxim Erden', salary: 3000, increase: false, id: 2},
                {name: 'Alex Korn', salary: 5000, increase: true, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            console.log(index);
        })
    }

    render() {    
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
    
            </div>
        );
    }
}

export default App;