import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { fetchUsers } from 'dataLayer'

const Search = ({ onResult }) => {
  const [searchArgument, setSearchArgument] = useState('')
  // Lembrar de falar sobre debounce
  const debounceSearchArgument = debounce(setSearchArgument, 300)

  useEffect(() => {
    onResult({
      loading: true,
      data: null
    })

    fetchUsers(searchArgument).then(usersList =>
      onResult({
        loading: false,
        data: usersList
      })
    )
  }, [searchArgument])

  return (
    <input
      className="ba b--light-gray mb4 pa2 w-100"
      placeholder="Search Github users"
      type="search"
      onChange={e => debounceSearchArgument(e.target.value)}
    />
  )
}

export default Search
