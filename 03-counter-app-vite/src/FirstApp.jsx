import PropTypes from 'prop-types';

const newMessage = 'Nicole';
//Para poner un objeto en una etiqueta
//Se debe usar JSON.stringify(newMessage)
const newMessage1 = {
    message: 'Hola mundo',
    title: 'Fernando'
}

const getMensaje = () => {
    return 'Función getMensaje';
}
export const FirstApp = ({title, subtitle, name }) =>{
    return (
    <>
        {/*SOY UN COMENTARIO*/}
        {/*<h1>{title}</h1>*/}
        
        <div data-testid="test-title">{title}</div>
        <h1>{title}</h1>

        <p>{subtitle}</p>
         {/*<p>{subtitle}</p>*/}
        <h1>{getMensaje()}</h1>
        <code>{ JSON.stringify(newMessage1) }</code>
        <h1>{newMessage}</h1>
        <p>{name}</p>
    </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 123,
    name: 'Fernando'
}