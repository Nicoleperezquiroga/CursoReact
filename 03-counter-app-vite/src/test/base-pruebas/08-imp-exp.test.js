import {getHeroeById, getHeroesByOwner} from '../../base-pruebas/08-imp-exp';
import heroesData from '../../data/heroes';
describe('Prueba de 08-imp-exp', () => {

    test('getHeroeById debe retornar un héroe', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({id:1,name:'Batman', owner:'DC'});
    });

    test('getHeroeById no debe retornar un héroe, se debe obtener undefined', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toBe(undefined);
        //Cualquier valor null incluye el falso esta forma
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar 3 heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
    });

    test('getHeroesByOwner debe retornar un objeto en particular con los heroes', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes).toEqual([                                                                        
            { id: 1, name: 'Batman', owner: 'DC' },                                
            { id: 3, name: 'Superman', owner: 'DC' },                              
            { id: 4, name: 'Flash', owner: 'DC' }                                  
          ]);
        expect(heroes).toEqual( heroesData.filter( (heroe) => heroe.owner === owner ))
    });

    test('getHeroesByOwner debe retornar 2 heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    });
});