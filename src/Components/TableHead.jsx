import React, { Component } from 'react';

class TableHead extends Component {

    raisSort=(path)=>{
        const {sortColumn} = this.props;
         if (sortColumn.path=== path)
         sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc' ;
         else {
             sortColumn.path = path ;
             sortColumn.order = 'asc' ;
         }
         this.props.onSort(sortColumn);
    }

    renderSortIcon=(column)=>{
        const {sortColumn} = this.props;
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc' ) return <i className='fa fa-sort-asc'></i>
        return  <i className='fa fa-sort-desc'></i>
    }

    render() { 
        const {columns} = this.props;
        return ( 
            <thead className="thead-dark">
                <tr>
                    {columns.map(column=> 
                        <th key={Math.random()} 
                        style={{cursor:"pointer"}}
                        onClick={()=> this.raisSort(column.path)} > {column.lable} {this.renderSortIcon(column)} </th>
                        )}
                    
                </tr>
            </thead>
         );
    }
}
 
export default TableHead;