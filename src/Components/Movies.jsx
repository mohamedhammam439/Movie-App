import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableGroup from './TableGroup';
import Pagination from './Pagination';
import ListGroup from './ListGroup';
import SearchBox from './Searchbox';
import {getMovies} from '../services/fakeMovieService';
import {paginate} from '../utlis/pagination';
import { getGenres } from '../services/fakeGenreService';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies :[],
        genres:[],
        currentPage:1,
        pageSize:3,
        searchQuery:"" ,
        selectedGenre: null ,
        sortColumn: {path : 'title' , order:'asc'}
     }
     componentDidMount=()=>{
         const genres=[{_id:"",name:"All Genres"},...getGenres()]
         this.setState({movies:getMovies() , genres })
     }

     handelEvents=()=>{
        const {movies :allMovies, selectedGenre,searchQuery, sortColumn,  pageSize, currentPage} = this.state;

        let filtered=allMovies;
        if(searchQuery) filtered=allMovies.filter(m=> m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if (selectedGenre && selectedGenre._id)
        filtered=allMovies.filter(m=>m.genre._id === selectedGenre._id);
       

        const sorted= _.orderBy(filtered , [sortColumn.path] , [sortColumn.order])

        const movies= paginate(sorted , currentPage , pageSize );
            return {totalCount : filtered.length , data:movies}
     }

     handelDelete=(movie)=>{
        const movies=this.state.movies.filter(m=> m._id !== movie._id)
        this.setState({movies})
     }
     handelPageSelect=(page)=>{
         this.setState({ currentPage : page })
     }
     handelGenreSelect=(genre)=>{
         this.setState({selectedGenre : genre ,searchQuery:"" , currentPage:1})
     }

     handelSort=(sortColumn)=>{ 
        this.setState({sortColumn})
     }
     handelSearch=(query)=>{
        this.setState({searchQuery : query , selectedGenre:null , currentPage:1})
     }
     
    

    render() { 
        const {length}=this.state.movies;
        const {sortColumn,  pageSize, currentPage, searchQuery} = this.state;

        if (length===0) return <h4>There is no movies to show on database</h4>

        const {totalCount , data : movies} = this.handelEvents()
        
        return ( 
            <div className='row'>
                <div className='col-3'>
                    <ListGroup
                    genres={this.state.genres}
                    selectedGenre={this.state.selectedGenre}
                    onSelectedGenre={this.handelGenreSelect}
                    />
                </div>
                <div className='col'>
                   
                    <Link className='btn btn-primary' to='/movies/new'>New Movie</Link>
                    
                    <h4>There is {totalCount} movies on database</h4>
                    
                    <SearchBox value={searchQuery} onChange={this.handelSearch} />

                    <TableGroup 
                    movies={movies}
                    sortColumn={sortColumn}
                    onDelete={this.handelDelete}
                    onSort={this.handelSort}
                    />

                    <Pagination 
                    items={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageSelect={this.handelPageSelect}
                    />
                </div>
               
            </div>
         );
    }
}
 
export default Movies;