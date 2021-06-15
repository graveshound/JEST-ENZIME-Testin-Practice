import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes'

describe('Prueba del Archivo 08-imp-exp', () => {
    
    test('Debe de retornar un heroe por id', () => {
        
        const id=1;

        const heroe=getHeroeById(id)

        const heroeData= heroes.find(h=>h.id===id)

        expect(heroe).toEqual(heroeData)

    })

    test('Debe de retornar undefined si heroe no existe', () => {
        
        const id=122;
        const heroe=getHeroeById(id)

        

        expect(heroe).toBe(undefined)

    })

    test('Debe Retornar un Arreglo con los heroes de DC', () => {
        
        const owner ='DC';

        const heroeDC=getHeroesByOwner(owner)
        const heroeDataDC=heroes.filter(h=>h.owner===owner)
        console.log(heroeDC)

        expect(heroeDC).toEqual(heroeDataDC)
       

    })

    test('Debe Retornar un Arreglo con los heroes de Marvel', () => {
        
        const owner ='Marvel';

        const heroeMarvel=getHeroesByOwner(owner)
        
        console.log(heroeMarvel)

        expect(heroeMarvel.length).toEqual(2)
       

    })
    
    
    





})
