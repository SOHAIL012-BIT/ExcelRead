import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

return (
    <Container>
        Enter Your Year Here: <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button onClick={() => setIsLoading(true)}>Search</button>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {searchResults.map(result => <p>{result.title}</p>)}

    </Container>
);

}
export default SearchBox;