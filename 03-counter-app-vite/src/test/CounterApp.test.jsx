import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe('Pruebas CounterApp', () => {
    test('debe hacer match con el snapshot',()=>{
        render(<CounterApp/>);
        expect(screen).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial de 100',()=>{
        render(<CounterApp value={100}/>);
        expect(screen.getByText('100')).toBeTruthy();
    });

    test('debe incrementar con el botón +1',()=>{
        render(<CounterApp value = {10}/>);
        fireEvent.click( screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('debe decrementar con el botón -1',()=>{
        render(<CounterApp value = {10}/>);
        fireEvent.click( screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('debe funcionar el botón de reset',()=>{
        render(<CounterApp value = {10}/>);
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByRole('button',{name:'btn-reset'}));        
        //para ver cambios
        screen.debug;
        expect(screen.getByText(0)).toBeTruthy();

    });
});
