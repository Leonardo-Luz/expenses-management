import { z } from "zod";
import { Form, FormElement } from "../components/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { service } from "../services/api.service";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { categories } from "../types";

const formSchema = z.object({
  name: z.string()
    .min(1, 'Name is required!')
})

type formData = z.infer<typeof formSchema>

export const CategoriesUpdate = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [data, setData] = useState<categories>()

  const { register, handleSubmit, reset, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name
    }
  });

  const updateHandler = async (data: formData) => {
    try {
      const response = await service.put(`/categories/${id}`, {
        category: data
      })

      alert(JSON.stringify(response.data.message))
      navigate('/categories')
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
      }
    }
  }

  const get = async () => {
    try {
      const response = await service.get(`/categories/${id}`, {})

      if (response.data.data == null) {
        alert('Invalid ID')
        navigate('/categories')
        return
      }

      setData(response.data.data)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
        navigate('/categories')
      }
    }
  }

  useEffect(() => {
    get()
  }, [id])

  useEffect(() => {
    reset(data)
  }, [data])

  return (
    <>
      <Form onSubmit={handleSubmit(updateHandler)} title="Categorie Registration">
        <FormElement title="Name">
          <input
            type="text"
            className={`outline-none w-full ${errors.name ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('name')}
          />
        </FormElement>
        {
          errors.name &&
          <span className="text-right text-red-700 font-bold">
            {errors.name.message}
          </span>
        }
      </Form>
    </>
  )
}
