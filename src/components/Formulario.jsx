import React from 'react'
import PropTypes from 'prop-types'
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css'


const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'},
    ]

    // utilizar el custom Hook
    const[categoria, SelectNoticias] = useSelect('general', OPCIONES);

    // Submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    } 

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encontrar por Categoria</h2>
                    <SelectNoticias />

                    <div className="inut-field col s12">
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
 
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
export default Formulario
