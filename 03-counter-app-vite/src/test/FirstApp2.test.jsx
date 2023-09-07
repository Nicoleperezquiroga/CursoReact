import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";
//snapshot se asegura que la componente no sufra cambios
describe('Pruebas en <FirstApp/>', () => {
    const title = 'Hola, Soy Goku';
    test('debe hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe hacer el mensaje Hola, Soy Goku', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe mostrar un titulo h1', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    });
});
