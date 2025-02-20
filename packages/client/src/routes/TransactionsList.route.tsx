import { useEffect, useMemo, useState } from "react"
import { List } from "../components/List"
import { service } from "../services/api.service"
import { transactions } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFilter, faMagnifyingGlass, faMoneyBillTransfer, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";

export const TransactionsList = () => {
  const navigate = useNavigate()

  const [data, setData] = useState<transactions[]>([]);
  const [errMsg, setErrMsg] = useState<string>();
  const [modal, setModal] = useState<boolean>(false)

  const renderedData = useMemo(() => {
    return data
  }, [data])

  const getAll = async () => {
    try {
      const response = await service.get('/transactions', {})

      setData(response.data.data)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setErrMsg(err.message)
      }
    }
  }

  const trash = async (id: string) => {
    try {
      const response = await service.delete(`/transactions/${id}`)

      setData(data => data.filter(el => el.id != id))
      alert(response.data.message)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setErrMsg(err.message)
      }
    }
  }

  const confirmFilters = () => {
    setModal(false)
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
        <FontAwesomeIcon onClick={() => setModal(true)} icon={faFilter} className="cursor-pointer" />
      </div>

      <List>
        {
          (renderedData && renderedData.length > 0) ?
            renderedData.map(el => (
              <td className="border-b-1">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} />
                    <tr>Transaction</tr>
                  </div>
                  <div className="flex flex-row items-center gap-8">
                    <FontAwesomeIcon className="cursor-pointer" onClick={() => { navigate(`/update/transactions/${el.id}`) }} icon={faEdit} />
                    <FontAwesomeIcon className="cursor-pointer" onClick={() => confirm('Do you really want to delete this transaction?') ? trash(el.id) : ''} icon={faTrash} />
                  </div>
                </div>
                <tr>User: {el.user.name}</tr>
                <tr>Category: {el.category.name}</tr>
                <tr>Type: {el.type}</tr>
                <tr>Amount: {el.amount}</tr>
                <tr>Description: {el.description}</tr>
                <tr>Payment: {el.interval}</tr>
                <tr>Expires: {String(el.date)}</tr>
              </td>
            )) : errMsg ?
              <h1><strong>{errMsg}</strong></h1>
              :
              <h1><strong>Transactions not registered!</strong></h1>
        }
      </List>
      {
        modal &&
        <Modal>
          <h1 className="font-bold">Set Filters</h1>
          <hr />

          <div className="flex flex-col gap-1 p-2">
            <details className="flex flex-col ">
              <summary>Type</summary>
              <label><input defaultChecked type="checkbox" value='income' /> Income</label>
              <label><input defaultChecked type="checkbox" value='expense' /> Expense</label>
            </details>

            <details className="flex flex-col ">
              <summary>Interval</summary>
              <label><input type="checkbox" value='none' /> None</label>
              <label><input defaultChecked type="checkbox" value='daily' /> Daily</label>
              <label><input defaultChecked type="checkbox" value='weekly' /> Weekly</label>
              <label><input defaultChecked type="checkbox" value='monthly' /> Monthly</label>
              <label><input defaultChecked type="checkbox" value='yearly' /> Yearly</label>
            </details>

            <div className="flex flex-row justify-between">
              <p>User:</p>
              <select className="w-[80%]">
                <option>Choose an user</option>
              </select>
            </div>

            <div className="flex flex-row justify-between">
              <p>Category:</p>
              <select className="w-[80%]">
                <option>Choose an category</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button onClick={() => confirmFilters()} className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Save</button>
            <button onClick={() => setModal(false)} className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
          </div>
        </Modal>
      }
    </>
  )
}
