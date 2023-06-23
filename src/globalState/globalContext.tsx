import { createContext } from "react";
import IReceita from "../types/IReceita";
import IUsuario from "../types/IUsuario";

interface IGlobalContextData {
    data: IReceita[],
    setData: React.Dispatch<React.SetStateAction<IReceita[]>>, 
    getReceitas: ()=> Promise<void>,
    cadastrar: IUsuario,
    setCadastrar: React.Dispatch<React.SetStateAction<IUsuario>>,
    form: string,
    setForm: string,
    isError: boolean,
    setIsError: boolean
}

export const GlobalContext = createContext<IGlobalContextData>({} as IGlobalContextData)

// getReceitas: (um: string)=> string, forma de tipagem de função
    //quando houver um parâmetro e return; retorna void quando a função não 
    // temm retorno