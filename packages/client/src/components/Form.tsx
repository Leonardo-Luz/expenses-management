import { ReactNode } from "react"

type formElementProps = {
  children: ReactNode,
  title: string,
}

export const FormElement = ({ children, title }: formElementProps) => {
  return (
    <label
      className="flex flex-row items-center justify-center gap-6 border-b-1"
    >
      <p className="w-[48%] text-right">{title}: </p>
      <div className="w-[48%]">{children}</div>
    </label>
  )
}

type formProps = {
  children: ReactNode,
  title: string,
}

export const Form = ({ children, title }: formProps) => {

  // type formData = z.infer<typeof formSchema>
  //
  // const { register, handleSubmit, formState: { errors }, control } = useForm<formData>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: { formDefaultValues }
  // });

  return (
    <div className="flex flex-col gap-8">
      <h1 className="w-full text-center">{title}</h1>
      <form className="w-[80%] self-center p-8 bg-peach-500 rounded-2xl inset-shadow-sm flex flex-col gap-4">
        {
          children
        }
      </form>
    </div>
  )
}
