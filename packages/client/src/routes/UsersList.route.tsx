import { useEffect, useState } from "react"
import { List } from "../components/List"
import { service } from "../services/api.service"
import { users } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEnvelope, faMagnifyingGlass, faPhone, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const UsersList = () => {
  const [data, setData] = useState<users[]>([]);
  const [errMsg, setErrMsg] = useState<string>();

  const getAll = async () => {
    try {
      const response = await service.get('/users', {})

      setData(response.data.data)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setErrMsg(err.message)
      }
    }
  }

  const trash = async (id: string) => {
    try {
      const response = await service.delete(`/users/${id}`)

      setData(data => data.filter(el => el.id != id))
      alert(response.data.message)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setErrMsg(err.message)
      }
    }
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between gap-5 ml-5 mt-5 text-center bg-mint-500 py-4 px-6 rounded-2xl shadow-md font-bold">
        <h1>USERS LIST</h1>
        <label className="cursor-text inset-shadow-sm w-[40%] flex items-center gap-3 p-2 rounded-2xl bg-peach-500" >
          <FontAwesomeIcon className="w-[10%]" icon={faMagnifyingGlass} />
          <input className="w-[90%] outline-none font-normal" placeholder="Search" type="search" />
        </label>
      </div>

      <List>
        {
          (data && data.length > 0) ?
            data.map(el => (
              <td className="border-b-1">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon icon={faUser} />
                    <tr>User: &nbsp;{el.name}</tr>
                  </div>
                  <div className="flex flex-row items-center gap-8">
                    <FontAwesomeIcon className="cursor-pointer" onClick={() => { alert('WIP: Create update route!') }} icon={faEdit} />
                    <FontAwesomeIcon className="cursor-pointer" onClick={() => confirm('Do you really want to delete this user?') ? trash(el.id) : ''} icon={faTrash} />
                  </div>
                </div>
                {
                  el.email &&
                  <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <tr>Mail: &nbsp;{el.email}</tr>
                  </div>
                }
                {
                  el.cellphone &&
                  <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon icon={faPhone} />
                    <tr>Phone: {el.cellphone}</tr>
                  </div>
                }
              </td>
            )) : errMsg ?
              <h1><strong>{errMsg}</strong></h1>
              :
              <h1><strong>Users not registered!</strong></h1>
        }
      </List >
    </>
  )
}
