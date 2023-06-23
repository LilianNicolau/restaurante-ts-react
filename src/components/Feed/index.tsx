import React from 'react';
import styles from './Styles.module.scss'
import BotaoCard from '../BotaoCardFeed';
import IReceita from '../../types/IReceita';
import PrimeiraLetraMaiuscula from '../../utils/primeiraLetraMaiuscula';

interface ICardFeedProps{
    receita: IReceita
}

const CardFeed: React.FC<ICardFeedProps> = ({receita}) => {
    return (
        <div className={styles.container}>
            <img className={styles.imagem} src={receita.imageUrl} alt={receita.title} />
            <section className={styles.cardBody}>
            <p className={styles.nomeReceita}>{PrimeiraLetraMaiuscula(receita.title)}</p>
            <BotaoCard/>
            </section>
        </div>
    )
}

export default CardFeed