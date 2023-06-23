import React, { useState } from "react";
import CampoTextoFormulario from "../../components/CampoTextoForm";
import styles from './Styles.module.scss'
import { api } from "../../service/api";
import { irParaFeed } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

const PaginaLogin: React.FC = () => {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    email: { value: "", isError: false },
    password: { value: "", isError: false },
  });

  function handleValidarLogin() {
    return form.email.value.length > 0 && form.password.value.length > 0;
  }

  const loginUsuario = () => {
    api
      .post("/user/login", {
        email: form.email.value,
        password: form.password.value,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        irParaFeed(navigate);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   const onChange = (event: any) => {
     const { name, value } = event.target;
     setForm({ ...form, [name]: value });
   };

  // const limpar = () => {
  //   setForm('');
  // };

  function handleSubmit(event: any) {
    event.preventDefault();
    handleValidarLogin();
    loginUsuario();
    // limpar();
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <h3 className={styles.titulo}>
          Preencha o formulário para se cadastrar na nossa plataforma de
          receitas
        </h3>
        <CampoTextoFormulario
          obrigatorio={true}
          type={"text"}
          label="Email"
          placeholder="Digite seu e-mail"
          name={"email"}
          onChange={onChange}
          isError={form.email.isError}
          errorMessage={"E-mail inválido"}
        />
        <CampoTextoFormulario
          obrigatorio={true}
          type={"text"}
          label="Senha"
          placeholder="Digite sua senha"
          name={"password"}
          onChange={onChange}
          isError={form.password.isError}
          errorMessage={"Mínimo de 6 caracteres"}
        />
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
};

export default PaginaLogin
