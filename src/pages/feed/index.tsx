import React, { useContext, useEffect } from 'react';
import styles from './Styles.module.scss'
import CardFeed from '../../components/Feed';
import { GlobalContext } from '../../globalState/globalContext';
import IReceita from '../../types/IReceita';

const PaginaFeed: React.FC = () => {

    const {data, setData, getReceitas} = useContext(GlobalContext)

    useEffect(()=> {
      getReceitas()
    },[])

    return (
        <div className={styles.container}>
            {data.map((item: IReceita) => {
                return(
                    <CardFeed
                        receita={item}
                        key={item.id}
                    />
                )
            })}
        </div>
    )
}

export default PaginaFeed