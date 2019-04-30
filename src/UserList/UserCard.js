import React from 'react'
import UserDetails from './UserDetails'

import styles from './UserCard.module.css'

const UserCard = ({ user, selected, onClick }) => {
  const selectedClass = selected ? `${styles.selected} shadow` : 'grow'

  return (
    <div
      href="user-details"
      className={`bg-light-gray br2 pointer db ${selectedClass}`}
      onClick={onClick}>
      <img
        alt={user.login}
        className="w-100 br2 br--top"
        src={user.avatar_url}
      />
      <div className="bg-gray f6 tc white truncate">{user.score}</div>
      <div className="tc f6 pa1 truncate">{user.login}</div>
      {selected && (
        <>
          <div className="bg-gray f6 tc white truncate">Repos</div>
          <UserDetails user={user} />
        </>
      )}
    </div>
  )
}

export default UserCard
