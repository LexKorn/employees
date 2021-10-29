import './emplyees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmplyeesList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployeesListItem name={item.name} salary={item.salary} />
            <EmployeesListItem key={id} {...itemProps}/> // укороченный вариант записи
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmplyeesList;