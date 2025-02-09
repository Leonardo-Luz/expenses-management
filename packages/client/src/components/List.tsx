import { ReactNode } from "react"

export const ListHeader = () => {
  return (
    <div>

    </div>
  )
}

export const ListElement = () => {
  return (
    <div>

    </div>
  )
}

type listProps = {
  children: ReactNode
}

export const List = ({ children }: listProps) => {
  return (
    <div className="m-5 flex items-center justify-center w-full bg-mint-500 py-4 px-6 rounded-2xl shadow-md">
      <table className="w-[80%] self-center p-8 bg-peach-500 rounded-2xl inset-shadow-sm flex flex-col gap-4">
        {children}
      </table>
    </div>
  )
}
