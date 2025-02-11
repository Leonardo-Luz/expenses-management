import { useEffect, useState } from "react"
import { List } from "../components/List"
import { service } from "../services/api.service"
import { transactions } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const TransactionsList = () => {
  const [data, setData] = useState<transactions[]>([]);
  const [errMsg, setErrMsg] = useState<string>();

  const getAll = async () => {
    try {
      const response = await service.get('/transactions', {})

      setData(response.data)
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
        <h1>TRANSACTIONS LIST</h1>
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
                <tr>{el.id}</tr>
                <tr>{el.user_id}</tr>
                <tr>{el.category_id}</tr>
                <tr>{el.type}</tr>
                <tr>{el.amount}</tr>
                <tr>{el.description}</tr>
                <tr>{el.interval}</tr>
                <tr>{el.date}</tr>
                <tr>{el.createdAt}</tr>
                <tr>{el.updatedAt}</tr>
              </td>
            )) : errMsg ?
              <h1><strong>{errMsg}</strong></h1>
              :
              <h1><strong>Data not found!</strong></h1>
        }
      </List>
    </>
  )
}
