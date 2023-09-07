
import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";
//snapshot se asegura que la componente no sufra cambios
describe('Pruebas en <FirstApp/>', () => {
//    test('debe hacer match con el snapshot', () => {
//        const title = 'Hola Soy Goku';
 //       const container = render(<FirstApp title={title}/>);
 //       expect(container).toMatchSnapshot();
 //   });
    test('debe mostrar el titulo en h1', () => {
        const title = 'Hola Soy Goku';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
        //Verifica que exista un titulo
        expect(getByText(title)).toBeTruthy();
        //const h1 = container.querySelector('h1');
        //Que sea identico
        //expect(h1.innerHTML).toBe(title);
        //Que el contenido sea identico ignorando espacios
        //expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola Soy Goku';
        const subtitle = 'Soy un subtitle';
        const {getByText, getAllByText} = render(<FirstApp title={title} subtitle={subtitle}/>);
        expect(getByText(subtitle)).toBeTruthy();
        //Trae la cantidad de veces que esta ese elemento
        expect(getAllByText(subtitle).length).toBe(1);

    })
});