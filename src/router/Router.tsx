import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detalhes from '../components/Detalhes'
import PaginaFeed from '../pages/feed'
import PaginaCadastroUsuario from '../pages/cadastroUsuario'
import PaginaLogin from '../pages/login'

export interface IRouterProps{}

const Router: React.FunctionComponent<IRouterProps> = (props) => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaFeed />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route
            path="/cadastrar-usuario"
            element={<PaginaCadastroUsuario />}
          />
          <Route
            path="/login"
            element={<PaginaLogin />}
          />
        </Routes>
      </BrowserRouter>
    );

}

export default Router