import React, { useState } from 'react'
import { isEmpty, get } from 'lodash'

import UserCard from './UserCard'
import Loading from 'Shared/Loading'

const UserList = ({ loading, data }) => {
  const [selectedUser, setSelectedUser] = useState({})
  if (loading) {
    return (
      <div className="tc">
        <Loading />
      </div>
    )
  }

  if (isEmpty(data) || get(data, 'total_count') === 0)
    return <div className="tc">No user found</div>

  return (
    <ul className="list pa0 cf ph2-ns">
      {data.items.map(user => (
        <li key={user.login} className="fl w-20 pa2 relative">
          <UserCard
            selected={user.login === selectedUser.login}
            user={user}
            onClick={() => setSelectedUser(user)}
          />
        </li>
      ))}
    </ul>
  )
}

export default UserList
