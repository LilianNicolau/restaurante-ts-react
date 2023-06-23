import { ReactNode, useState } from "react"
import { GlobalContext } from "./globalContext"
import axios from 'axios'
import IReceita from "../types/IReceita"
import IUsuario from "../types/IUsuario"

interface IGlobalProviderStateProps {
    children: ReactNode
}

const GlobalStateProvider: React.FC<IGlobalProviderStateProps> = ({children}) => {

    const [data, setData] = useState<IReceita[]>([])
    const [cadastrar, setCadastrar] = useState<IUsuario>()
    const [form, setForm] = useState()
    const [isError, setIsError] = useState(false)

    const token = localStorage.getItem('token')

    const getReceitas = async () => {
        try {
            const receitas = await axios.get<IReceita[]>(
              "https://api-cookenu.onrender.com/recipe/all",
              {
                headers: {
                  Authorization:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE2MDc5NjUwLTAxNGEtNDE5Mi05NTI4LTEwMjkzYzVhY2YyNiIsIm5hbWUiOiJaYXogemF6IiwiaWF0IjoxNjgyNTMzNzA4LCJleHAiOjE2ODI2MjAxMDh9.C3_qIWpk7nMaCN-PhWA3fUnz09zJgZSZ6a-tUPsfHQY",
                },
              }
            );
              setData(receitas.data)
              
            //   console.log(token, 'token');
        } catch (error: any) {
            alert(error.message)
        }
      }

    const context = {
      data,
      setData,
      getReceitas,
      cadastrar,
      setCadastrar,
      form,
      setForm,
      isError,
      setIsError,
    };

    return(
        <GlobalContext.Provider value={context} >
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalStateProvider