import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import booklist from "./booklist.json";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import BodyWrapper from "./components/BodyWrapper";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";


class App extends Component {

  state = {
    booklist
  };

  render() {
    return (
      <Wrapper>
        <Nav />
        <Jumbotron />
        <BodyWrapper>
          <SearchBar />
          {this.state.booklist.map((book) => (
            <BookList
              image={book.image}
              title={book.title}
              author={book.author}
              description={book.description}
              link={book.link}
            />
          ))}
        </BodyWrapper>
      </Wrapper>
    )
  }
}

export default App;
