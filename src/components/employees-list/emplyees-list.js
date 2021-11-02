import EmployeesListItem from '../employees-list-item/employees-list-item';

import './emplyees-list.css';

const EmplyeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> 
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmplyeesList;