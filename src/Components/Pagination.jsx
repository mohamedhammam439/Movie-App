import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {items, pageSize,currentPage, onPageSelect} = props ;

    const pagesCount = Math.ceil( items / pageSize );
    if (pagesCount===1) return null;
    
    const pages = _.range(1 , pagesCount+1)

    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page=> 
                    <li key={page} style={{cursor:"pointer"}} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a onClick={()=> onPageSelect(page)} className="page-link">{page}</a>
                    </li>
                    )}
                
            </ul>
        </nav>
     );
}
 
export default Pagination;