import {usContext} from '../../base-pruebas/06-deses-obj';

describe('Pruebas 05-funciones', () => { 

    test('prueba de usContext, debe retornar un obj', () => {
        expect({       
            nombreClave: "Jack",
            anios: "11",
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }}).toEqual( usContext({clave: "Jack",edad:"11"}));
    });
});