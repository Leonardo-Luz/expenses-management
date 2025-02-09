import { useEffect, useState } from "react"
import { List } from "../components/List"
import { service } from "../services/api.service"
import { categories } from "../types";

export const CategoriesList = () => {
  const [data, setData] = useState<categories[]>([]);

  const getAll = async () => {
    const response = await service.get('/categories', {})

    setData(response.data.data)
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <div className="w-full flex flex-col gap-5 ml-5 mt-5">
        <h1 className="w-full text-center bg-mint-500 py-4 px-6 rounded-2xl shadow-md font-bold">Categories List</h1>
      </div>

      <List>
        {
          data.map(el => (
            <td className="border-b-1">
              <tr>{el.id}</tr>
              <tr>{el.name}</tr>
              <tr>{String(el.createdAt!)}</tr>
              <tr>{String(el.updatedAt!)}</tr>
            </td>
          ))
        }
      </List>
    </>
  )
}
