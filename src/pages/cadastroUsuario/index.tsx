import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Styles.module.scss";
import CampoTextoFormulario from "../../components/CampoTextoForm";
import { api } from "../../service/api";

const PaginaCadastroUsuario: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: { value: "", isError: false },
    email: { value: "", isError: false },
    password: { value: "", isError: false },
  });

  // const aoCadastrar = (pessoa: string) => {
  //   setCadastrar([...cadastrar, pessoa])
  // }

  const handleSubmit = async (evento: any) => {
    evento.preventDefault();
    setForm({
      ...form,
      name: {
        value: form.name.value,
        isError: form.name.value.length < 4 && !form.name.value.includes(" "),
      },
      email: {
        value: form.email.value,
        isError: !form.email.value.includes("@"),
      },
      password: {
        value: form.password.value,
        isError: form.password.value.length < 6,
      },
    });
    if(form.name.isError || form.email.isError || form.password.isError){
      return
    }

    const usuario = await api.post("/user/signup",
      {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      }
    );
    console.log(usuario, 'usuário');
    
  };

  const handleChangeInput = (event: any) => {
    const { name, value } = event.target;
    console.log(event.target.name);
    const newForm = { ...form, [name]: { value, isError: false } };
    setForm(newForm);
    console.log(form);
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <h3 className={styles.titulo}>
          Preencha o formulário para se cadastrar na nossa plataforma de
          receitas
        </h3>
        <CampoTextoFormulario
          obrigatorio={true}
          type={"text"}
          label="Nome"
          placeholder="Digite seu nome e sobrenome"
          name={"name"}
          onChange={handleChangeInput}
          isError={form.name.isError}
          errorMessage={"Campo nome inválido"}
        />
        <CampoTextoFormulario
          obrigatorio={true}
          type={"text"}
          label="Email"
          placeholder="Digite seu e-mail"
          name={"email"}
          onChange={handleChangeInput}
          isError={form.email.isError}
          errorMessage={"E-mail inválido"}
        />
        <CampoTextoFormulario
          obrigatorio={true}
          type={"text"}
          label="Senha"
          placeholder="Digite sua senha"
          name={"password"}
          onChange={handleChangeInput}
          isError={form.password.isError}
          errorMessage={"Mínimo de 6 caracteres"}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};
export default PaginaCadastroUsuario;
