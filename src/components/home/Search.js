
import React from "react"
import SearchField from "react-search-field"
import { Container } from "react-bootstrap"

const Search = props => {
    const { setSearch } = props

    const updateInput = (value, event) => {
        event.preventDefault();
        setSearch(value)
    }

    return <>
    <Container className="searchContainer">
        <SearchField
            placeholder="Search"
            onChange={updateInput}
            className="searchBar"
        />
    </Container>
    </>
}

export default Search
