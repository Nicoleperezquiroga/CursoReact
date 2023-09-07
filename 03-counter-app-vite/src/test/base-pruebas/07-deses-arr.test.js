import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas 07-deses-arr', () => {
    test('Debe retornar un string y uun número', () =>{
        const [letters, numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(letters).toStrictEqual(expect.any(String));

        expect(typeof numbers).toBe('number');

    });
});