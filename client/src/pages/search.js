import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import BodyWrapper from "../components/BodyWrapper";
import BookListWrapper from "../components/BookListWrapper";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

class Search extends Component {
    state = {
        books:[],
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        let title = this.state.title;
        let query = title.split(" ");
        query = query.join("+");
        if(this.state.title) {
            API.getBooks(query)
                .then((res) => this.setState({books: res.data.items}))
                .catch((err) => console.log(err));
        }
    };

    saveBook = (book) => {
        console.log()
        
    }
    
    render() {
        return (
            <Wrapper>
                <Jumbotron />
                <BodyWrapper>
                    <SearchBar 
                        onChange={this.handleInputChange}
                        onClick={this.handleFormSubmit}
                    />
                    {!this.state.books.length ? (
                        <h3 className="text-center">No books to show.</h3>
                    ) : (
                        
                        <BookListWrapper>
                            {this.state.books.map((book) => {
                                return(
                                    <BookList
                                        key={book.volumeInfo.title}
                                        title={book.volumeInfo.title}
                                        author={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        link={book.volumeInfo.infoLink}
                                        onClick={this.saveBook}
                                    />
                                );
                            })}
                        </BookListWrapper>
                    )}
                </BodyWrapper>
            </Wrapper>
        );
    }
}

export default Search;