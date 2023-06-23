import React from 'react';
import {BiBowlHot} from 'react-icons/bi';
import {MdOutlineAddBox} from 'react-icons/md'
import styles from './Styles.module.scss';

// interface HeaderProps {
//   nome: string,
//   imagem: string
// }

//React.FC<HeaderProps>

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.containerImgTxt}>
        <BiBowlHot size={50} color='#FFFFFF' display='flex'/>
        <div className={styles.containerTxt}>
          <h2 className={styles.titulo}>GoCook</h2>
          <h5 className={styles.texto}>As melhores receitas, aqui.</h5>
        </div>
      </div>
      <section>
        <button className={styles.botaoContainerAdicionar}>
          <div className={styles.txtBotaoAdicionar}>
            <p className={styles.novaReceita}>Nova receita</p>
            <MdOutlineAddBox className={styles.adicionar} size={18}   />
          </div>
        </button>
        <button className={styles.botaoContainerMinhasReceitas}>
          <p>Receitas salvas</p>
        </button>
      </section>
    </div>
  )
}

export default Header
