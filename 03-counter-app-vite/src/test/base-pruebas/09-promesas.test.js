import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Prueba de promesas', () => {
    //USANDO THEN
    test('getHeroeByIdAsync debe retornar heroe por id', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id:1,
                name:'Batman',
                owner: 'DC'
            });
            done();
            }
        );
    });

    test('getHeroeByIdAsync debe retornar un error', (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
            done();
            }
        );
    });

    //USANDO ASYNC AWAIT
    test('getHeroeByIdAsync debe retornar heroe por id', async () => {
        const id = 1;
        const heroes = await getHeroeByIdAsync(id);
        console.log(heroes);
    });
});