import React, { Component } from 'react';
import Like from './Like';
import Table from './Table';
import { Link } from 'react-router-dom';



class TableGroup extends Component {

    columns = [
        {path:'title' , lable:'Title' , content: movie=> <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path:'genre.name' , lable:'Genre'},
        {path:'numberInStock' , lable:'Stock'},
        {path:'dailyRentalRate' , lable:'Rate'},
        {key: 'like' , content:movie=> <Like />},
        {key: 'Delete' , content:movie=> <button onClick={()=> this.props.onDelete(movie)} className='btn btn-danger'>Delete</button>}
    ]

   
   
    render() { 
        const {movies,  onSort,sortColumn} = this.props;

        return ( 
            <Table 
            data={movies} 
            columns={this.columns} 
            onSort={onSort} 
            sortColumn={sortColumn} />
         );
    }
}
 
export default TableGroup;