import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import BodyWrapper from "../components/BodyWrapper";
import Jumbotron from "../components/Jumbotron";
import BookListWrapper from "../components/BookListWrapper";
import BookList from "../components/BookList";

class Search extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getAllBooks()
            .then(res => {
                // console.log(res.data);
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
    }

    deleteBook = (id) => {
        console.log(id);
        API.deleteBook(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));

        this.loadBooks();
    }
    
    render() {
        return (
            <Wrapper>
                <Jumbotron />
                <BodyWrapper>
                    <BookListWrapper>
                        {this.state.books.map((book) => {
                            return(
                                <BookList
                                    key={book._id}
                                    id={book._id}
                                    title={book.title}
                                    author={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    saved={book.saved}
                                    deleteBook={this.deleteBook}
                                />
                            );
                        })}
                    </BookListWrapper>
                </BodyWrapper>
            </Wrapper>
        );
    }
}

export default Search;