import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FormEvent, ReactNode } from "react"

export const FormSubmitButton = () => {
  return (
    <button type="submit" className="flex justify-between items-center text-start cursor-pointer mt-5 w-full bg-peach-500 hover:bg-mint-500 hover:text-white font-bold py-2 px-4 rounded-lg shadow-md">
      Submit
      <FontAwesomeIcon icon={faPaperPlane} />
    </button>
  )
}

type formElementProps = {
  children: ReactNode,
  title: string,
}

export const FormElement = ({ children, title }: formElementProps) => {
  return (
    <label
      className="flex flex-row items-center gap-2 border-b-1"
    >
      <p className="w-[24%] text-right">{title}: </p>
      <label className="w-[70%] flex flex-row items-center">{children}</label>
    </label>
  )
}

type formProps = {
  children: ReactNode,
  title: string,
  onSubmit: (ev: FormEvent<HTMLFormElement>) => any,
}

// export const FormBody = () => {
//   return (
//   )
// }

export const Form = ({ children, title, onSubmit }: formProps) => {

  return (
    <div className="w-full flex flex-col gap-5 ml-5 mt-5">
      <h1 className="w-full text-center bg-mint-500 py-4 px-6 rounded-2xl shadow-md font-bold">{title}</h1>
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-center w-full bg-mint-500 py-4 px-6 rounded-2xl shadow-md">
          <div className="w-[80%] self-center p-8 bg-peach-500 rounded-2xl inset-shadow-sm flex flex-col gap-4">
            {
              children
            }
          </div>
        </div>

        <FormSubmitButton />
      </form>
    </div>
  )
}
