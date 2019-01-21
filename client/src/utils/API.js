
import axios from "axios";

export default {
    getBooks: (req, res) => {
        console.log(req);
        const query = "https://www.googleapis.com/books/v1/volumes?q=" + req + "&key=AIzaSyB__MuIhh84N3_niwmya_Erhlfalmw3A-c"
        console.log(query);
        return axios.get(query);
    },

    getAllBooks: function() {
        return axios.get("/api/books");
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function(bookData) {
        // return console.log(bookData);
        return axios.post("/api/books", bookData);
    }
};