import axios from "axios"
import { useState } from "react"


const useUserCrud = () => {
  //const url = `https://users-crud.academlo.tech/users/`
  const url = "https://pedro-users-week2-acedemlo.onrender.com/api/v1"
  const [users, setUsers] = useState()
  const [hasError, setHasError] = useState(false)

  //GET - Para llamar la api

  const getAllUser = () => {
    axios.get(`${url}/users`)
    .then(res => setUsers(res.data))
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
  }

  //POST - Para crear

  const createUser = data => {
    axios.post(`${url}/users`, data)
    .then(() => getAllUser())
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
  }

  //DELETE - Para borrar

  const deleteUserById = id => {
    const urlDelete =`${url}/users/${id}`
    axios.delete(urlDelete)
    .then(() => getAllUser())
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
  }

  //UPDATE -Para actulizar 

  const updateUserById = (id, data) => {
    //const urlUpdate = `${url}${id}/`
    axios.put(`${url}/users/${id}`, data)
    .then(()=> getAllUser())
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
  }

  return {users, hasError, getAllUser, createUser, deleteUserById, updateUserById}
}

export default useUserCrud