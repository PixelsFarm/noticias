import React from 'react'
import styles from './Formulario.module.css';
import useSelect from '../../hooks/useSelect/useSelect';

const Formulario = ({ guardarCategoria }) => {

    // https://newsapi.org/
    // get http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-08&sortBy=publishedAt&apiKey=API_KEY
    // api key: 214b596a5c574a11988e22a3c4f24c18

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    // custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    const buscarNoticias = e => {
        e.preventDefault()

        guardarCategoria(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <div className="input-field col s12">
                        <SelectNoticias />
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;