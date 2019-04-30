import React, { useState, useEffect } from 'react'
import { fetchRepos } from 'dataLayer'
import Loading from 'Shared/Loading'

/*
  INSTRUCTIONS (TODO):

  1. Usar o usuário passado parar consultar os repositorios deste usuários e listá-los dinamicamente.

  OBS:
  Além de listar os usuários, precisamos que este componente tenha mais 2 estados:
  - Loading: Quando estiver esperando pelo resultado da consulta, exibir o componente de <Loading />
  - Se o usuário não contiver nenhum repositório na sua lista: Exibir mensagem: "No repos found"

*/

const UserDetails = ({ user }) => {
  
  const [searchRepo, setSearchRepo] = useState([])
  const [loading, setLoading] = useState(false) 

  useEffect(() => {

    setLoading(true)

    fetchRepos(user.login).then(searchRepo => {
      
      setLoading(false)
      setSearchRepo(searchRepo) 
      
      })

    }, [])
  
  //While loading
  if(loading == true){

    return <Loading />
  }

  //If there is no repository from the user
  if (searchRepo.length == 0){
    return <div>No repos found</div>
  }

  return (
    
     <ul className="list pa2 overflow-y-auto h4">
        {searchRepo.map(repo => (
        <li key={repo.name}> {repo.name} </li>
        ))}
     </ul>
  )
}

export default UserDetails
