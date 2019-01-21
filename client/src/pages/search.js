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

    saveBook = (bookTitle) => {
        
        for(var i = 0; i < this.state.books.length; i++) {
            if(this.state.books[i].volumeInfo.title === bookTitle) {

                API.saveBook({
                    authors: this.state.books[i].volumeInfo.authors[0],
                    description: this.state.books[i].volumeInfo.description,
                    image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
                    link: this.state.books[i].volumeInfo.infoLink,
                    title: this.state.books[i].volumeInfo.title
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }
        }
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
                        <h3 className="text-center">Wanna start looking for some books?</h3>
                    ) : (
                        
                        <BookListWrapper>
                            {this.state.books.map((book) => {
                                return(
                                    <BookList
                                        key={book.volumeInfo.title}
                                        title={book.volumeInfo.title}
                                        author={book.volumeInfo.authors[0]}
                                        description={book.volumeInfo.description}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        link={book.volumeInfo.infoLink}
                                        saveBook={this.saveBook}
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