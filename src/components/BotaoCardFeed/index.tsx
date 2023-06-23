import React from 'react';
import './Styles.module.scss'
import { useNavigate } from 'react-router-dom';
import { irParaDetalhes } from '../../router/coordinator';

const BotaoCard: React.FC = () => {

    const navigate = useNavigate()

    const path = window.location.pathname

    return (
        <div>
            <button onClick={()=> irParaDetalhes(navigate)}>
                {path === '/' ? 'Adicionar receita' : 'Exluir receita'}
            </button>
        </div>

    )

}

export default BotaoCard