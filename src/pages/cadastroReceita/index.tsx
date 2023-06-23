import React, { useState } from 'react';
import CampoTextoFormulario from '../../components/CampoTextoForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { irParaFeed } from '../../router/coordinator';
import { api } from '../../service/api';


const PaginaCadastroReceita: React.FC = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
      title: { value: "", isError: false },
      description: { value: "", isError: false },
      imageUrl: { value: "", isError: false },
    });

    const token = localStorage.getItem("token");

    const CadastroReceita = (body: any, token: any, navigate: any) => {
      axios
        api.
            post("/recipe", body, {
              headers: {
                Authorization: token,
              },
            })
            .then((response) => {
              alert(response.data.message);
              irParaFeed(navigate);
            })
            .catch((error) => {
              alert(error.message);
            });
    };

    const aoSubmeter = (evento: any) => {
      evento.preventDefault();
      CadastroReceita(form, token, navigate);
    //   limpar();
    };

    return (
      <section>
        <form onSubmit={aoSubmeter}>
          <h3>Preencha o formulário para cadastrar uma receita</h3>
          <CampoTextoFormulario
            obrigatorio={true}
            type={"text"}
            label="Nome do prato"
            placeholder="Digite o nome do prato/receita "
            valor={form.title.value}
            name={"title"}
            aoAlterado={aoAlterado}
          />
          <CampoTextoFormulario
            obrigatorio={true}
            type={"text"}
            label="Intruções"
            placeholder="Digite as instruções da receita "
            valor={form.description.value}
            name={"description"}
            aoAlterado={aoAlterado}
          />
          <CampoTextoFormulario
            obrigatorio={false}
            type={"text"}
            label="Foto do prato"
            placeholder="Coloque aqui uma foto do prato"
            valor={form.imageUrl.value}
            name={"imageUrl"}
            aoAlterado={aoAlterado}
          />
          <button type="submit">Cadastrar receita</button>
        </form>
      </section>
    );

}

export default PaginaCadastroReceita