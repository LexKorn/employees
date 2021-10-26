import './emplyees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmplyeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
}

export default EmplyeesList;