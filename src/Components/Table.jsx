import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = (props) => {
    const {columns , onSort , sortColumn , data} = props ;
    return ( 
        <table className="table">
                <TableHead 
                columns={columns} 
                onSort={onSort} 
                sortColumn={sortColumn} />

                <TableBody 
                data={data} 
                columns={columns}/>
                
            </table>
     );
}
 
export default Table;