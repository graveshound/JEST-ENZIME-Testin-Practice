import {getSaludo} from '../../base/02-template-string';


describe('Pruebas en el Archivo template-string', () => {


    test('getSaludo debe retornar Hola Pedro', () => {
        
        const name='Pedro';
        const saludo=getSaludo(name)
        console.log(saludo)
        expect(saludo).toBe('Hola '+name)


    })

    test('getSaludo debe retornar Hola Carlos si no hay Argumentos', () => {
        
        
        const saludo=getSaludo()

        console.log(saludo)
        expect(saludo).toBe('Hola Carlos')


    })
    
    
})
