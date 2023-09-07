//Ejemplo de prueba
test('Titulo de prueba', ()=>{
//Partes de una prueba:
//1. Incialización
//2. Estímulo
//3. Observar comportamiento

const message1 = 'Hola Mundo';//paso 1
const message2 = message1.trim(); //paso 2
expect(message1).toBe(message2);//paso 3
})
//Agrupador
 describe('Pruebas en componenteQueSePrueba', () => { 
    const message1 = 'Hola Mundo';//paso 1
    const message2 = message1.trim(); //paso 2
    expect(message1).toBe(message2);//paso 3
  })