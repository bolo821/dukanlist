import React from 'react'
import {Form,FormControl, Button} from "react-bootstrap"
import "./SearchBox.css"


const SearchBox = () => {
    return (
    <>
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
      </Form>
    </>
    )
}

export default SearchBox
