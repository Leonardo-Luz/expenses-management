import { z } from "zod";
import { Form, FormElement } from "../components/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { service } from "../services/api.service";
import axios from "axios";

const formSchema = z.object({
  name: z.string()
    .min(1, 'Name is required!'),
  email: z.string().nullable(),
  cellphone: z.string().nullable(),
})

type formData = z.infer<typeof formSchema>


export const UsersRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  });

  const registerHandler = async (data: formData) => {
    try {
      const response = await service.post('/users', {
        user: data
      })
      alert(JSON.stringify(response.data.message))
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
      }
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(registerHandler)} title="User Registration">
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
