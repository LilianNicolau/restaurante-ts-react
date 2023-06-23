import React, { InputHTMLAttributes, useState } from "react";
import styles from './Styles.module.scss';

interface ICampoTextoFormularioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  placeholder: string;
  valor?: string;
  name: string;
  isError: boolean;
  obrigatorio: boolean;
  aoAlterado?: () => void;
  errorMessage: string
}

const CampoTextoFormulario: React.FC<ICampoTextoFormularioProps> = ({type, label, placeholder, valor, name, isError, obrigatorio = false, aoAlterado, errorMessage, ...rest }) => {

    const [mostrarSenha, setMostrarSenha] = useState(false)

    return (
      <section className={styles.container}>
        <label className={styles.label}>{label}</label>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type={mostrarSenha ? "text" : type}
            // value={valor}
            name={name}
            onChange={aoAlterado}
            required={obrigatorio}
            placeholder={placeholder}
            {...rest}
          />
        </div>
        {isError && errorMessage}
      </section>
    );

}

export default CampoTextoFormulario