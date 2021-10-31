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
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            /*  первый способ
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index),
                  after = data.slice(index + 1),
                  newArr = [...before, ...after];

            return {
                data: newArr
            }
            */
            return {  // второй вариант
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            // const newArr = [...data, newItem];
            const newArr = data.concat(newItem);
            return {
                data: newArr
            }
        })
    };

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
                <EmployeesAddForm onAdd={this.addItem}/>
    
            </div>
        );
    }
}

export default App;