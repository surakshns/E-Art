import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} style={{display:"flex",flexdirection:"row",justifyContent:"center",alignItems:"center",marginRight:'50px',margin:'20px'}}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 inputsearch'
      ></Form.Control>
      <Button type='submit' className="search" >
        Search
      </Button>
    </Form>
  )
}

export default SearchBox