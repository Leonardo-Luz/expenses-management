import { z } from "zod";
import { Form, FormElement } from "../components/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { service } from "../services/api.service";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { users } from "../types";

const formSchema = z.object({
  name: z.string()
    .min(1, 'Name is required!'),
  email: z.string().nullable(),
  cellphone: z.string().nullable(),
})

type formData = z.infer<typeof formSchema>


export const UsersUpdate = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [data, setData] = useState<users>()

  const { register, handleSubmit, reset, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name,
      email: data?.email,
      cellphone: data?.cellphone
    }
  });

  const updateHandler = async (data: formData) => {
    try {
      const response = await service.put(`/users/${id}`, {
        user: data
      })

      alert(JSON.stringify(response.data.message))
      navigate('/users')
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
      }
    }
  }

  const get = async () => {
    try {
      const response = await service.get(`/users/${id}`, {})

      if (response.data.data == null) {
        alert('Invalid ID')
        navigate('/users')
        return
      }

      setData(response.data.data)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
        navigate('/users')
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
      <Form onSubmit={handleSubmit(updateHandler)} title="User Registration">
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
        <FormElement title="Email">
          <input
            type="text"
            className={`outline-none w-full ${errors.email ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('email')}
          />
        </FormElement>
        {
          errors.email &&
          <span className="text-right text-red-700 font-bold">
            {errors.email.message}
          </span>
        }
        <FormElement title="Cellphone">
          <input
            type="text"
            className={`outline-none w-full ${errors.cellphone ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('cellphone')}
          />
        </FormElement>
        {
          errors.cellphone &&
          <span className="text-right text-red-700 font-bold">
            {errors.cellphone.message}
          </span>
        }
      </Form>
    </>
  )
}
