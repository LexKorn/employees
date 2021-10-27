import './emplyees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmplyeesList = ({data}) => {
    const elements = data.map(item => {
        return (
            // <EmployeesListItem name={item.name} salary={item.salary} />
            <EmployeesListItem {...item}/> // укороченный вариант записи
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmplyeesList;