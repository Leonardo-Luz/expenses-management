import { ReactNode, useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

type dropMenuElementProps = {
  icon: IconDefinition,
  actionIcon?: IconDefinition,
  title: string,
  to: string,
}

export const DropMenuElement = ({ icon, actionIcon, title, to }: dropMenuElementProps) => {
  return <NavLink to={to} className={({ isActive }) => isActive ?
    'flex w-full font-bold transition-transform bg-mint-500 cursor-auto' :
    'flex w-full transition-transform hover:bg-mint-500 hover:rounded-2xl hover:scale-106 hover:z-10 hover:shadow-md'
  }>
    <li className="py-2 w-full flex items-center">
      <FontAwesomeIcon className="w-[20%]" icon={icon} /> <p className="w-[70%]">{title}</p> {actionIcon && <FontAwesomeIcon icon={actionIcon} />}
    </li>
  </NavLink>
}

type dropMenuProps = {
  children: ReactNode,
  title: string,
  open?: boolean
}

export const DropMenu = ({ children, title, open }: dropMenuProps) => {
  const menu = useRef<HTMLDetailsElement>(null)
  const [icon, setIcon] = useState<IconDefinition>(faBars)

  const toggleMenuHandler = () => {
    if (menu.current) {
      if (menu.current.open) {
        setIcon(faBars)
      }
      else {
        setIcon(faXmark)
      }
    }
  }

  useEffect(() => {
    if (open && menu.current) {
      setIcon(faXmark)
      menu.current.open = true
    }
  }, [menu])

  return (
    <details ref={menu} className="m-5 rounded-2xl bg-mint-500">
      <summary onClick={toggleMenuHandler} className="font-bold py-4 w-full  rounded-2xl bg-mint-500 marker:content-none cursor-pointer shadow-md"><FontAwesomeIcon className="w-[20%] font-bold" icon={icon} />{title}</summary>
      <div className="p-2.5 ">
        <ul className="inset-shadow-sm rounded-2xl  bg-peach-500 ">
          {children}
        </ul>
      </div>
    </details>
  )
}
