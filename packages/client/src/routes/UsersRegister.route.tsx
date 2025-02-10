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
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
        <FormElement title="Email">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('email')}
          />
          {
            errors.email &&
            <span>
              {errors.email.message}
            </span>
          }
        </FormElement>
        <FormElement title="Cellphone">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('cellphone')}
          />
          {
            errors.cellphone &&
            <span>
              {errors.cellphone.message}
            </span>
          }
        </FormElement>
      </Form>
    </>
  )
}
