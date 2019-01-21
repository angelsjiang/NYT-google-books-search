import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import BodyWrapper from "../components/BodyWrapper";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

class Search extends Component {
    state = {
        // booklist
      };
    
    render() {
        return (
            <Wrapper>
                <Jumbotron />
                <BodyWrapper>

                    {/* <BookList /> */}
                </BodyWrapper>
            </Wrapper>
        );
    }
}

export default Search;