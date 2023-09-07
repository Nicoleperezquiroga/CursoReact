import { getUser } from "../../base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        console.log("user",user);
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Fernando';
        const user = getUsuarioActivo(nombre);
        expect({
            uid: 'ABC567',
            username: nombre
        }).toStrictEqual(user);
    });

});