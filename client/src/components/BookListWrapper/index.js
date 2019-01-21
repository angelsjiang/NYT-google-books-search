import React from "react";

function BookListWrapper(props) {
    return(
        <div className="bookListWrapper">{props.children}</div>
    );
}

export default BookListWrapper;