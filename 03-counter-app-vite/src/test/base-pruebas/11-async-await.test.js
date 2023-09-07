import { getImagen } from "../../base-pruebas/11-async-await";

describe('Prueba 11-async-await', ()=>{
    test('getImagen debe retornar una url', async ()=>{
        const url = await getImagen();
        console.log('url',url)
        expect(typeof url).toBe('string');
    });

    // test('getImagen debe retornar un mensaje de error', async ()=>{
    //     const url = await getImagen();
    //     console.log('url',url)
    //     expect(url).toBe('No se encontro la imagen');
    // });
});