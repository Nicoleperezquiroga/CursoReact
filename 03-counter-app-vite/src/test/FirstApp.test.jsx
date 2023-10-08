import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp/>', () => {
    test('debe hacer match con el snapshot', () => {
        const title = 'Hola Soy Goku';
        const container = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar el titulo en h1', () => {
        const title = 'Hola Soy Goku';
        const {container, getByText} = render(<FirstApp title={title}/>);
        //Verifica que exista un titulo
        expect(getByText(title)).toBeTruthy();
        const h1 = container.querySelector('h1');
        //Que sea identico
        expect(h1.innerHTML).toBe(title);
        //Que el contenido sea identico ignorando espacios
        expect(h1.innerHTML).toContain(title);

    });
});