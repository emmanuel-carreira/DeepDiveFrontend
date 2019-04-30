import React, { useState } from 'react'
import Search from './Search/Search'
import UserList from './UserList/UserList'

import { ReactComponent as Logo } from 'assets/logo.svg'

function App() {
  const [result, setResult] = useState()
  return (
    <div className="container">
      <Logo className="mv5 w5 center db" />
      <Search onResult={value => setResult(value)} />
      <UserList {...result} />
    </div>
  )
}

export default App
