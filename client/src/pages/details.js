import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import booklist from "./booklist.json";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import BodyWrapper from "../components/BodyWrapper";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

class Detail extends Component {
    state = {
        book: {}
    };

    componentDidMount(){
        API.getBooks(this.props.match.params.id)
            .then(res => this.setState( { book: res.data } ))
            .catch(err => console.log(err));
    }

    render() {
        return(
            <Wrapper>
                <Jumbotron />
                <BodyWrapper>
                    
                </BodyWrapper>
            </Wrapper>
        )
    }

}

export default Detail;