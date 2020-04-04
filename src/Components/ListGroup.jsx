import React from 'react';

const ListGroup = (props) => {
    const {genres,onSelectedGenre,selectedGenre, textProperty}=props;
    return ( 
        <ul className="list-group">
            {genres.map(genre=> 
                <li key={genre._id} 
                onClick={()=> onSelectedGenre(genre)}
                style={{cursor:"pointer"}}
                className={selectedGenre===genre ? "list-group-item active":"list-group-item"}>{genre[textProperty]}</li>
                )}
        </ul>
     );
}
ListGroup.defaultProps={
    valueProperty : '_id',
    textProperty : 'name'
}
 
export default ListGroup;