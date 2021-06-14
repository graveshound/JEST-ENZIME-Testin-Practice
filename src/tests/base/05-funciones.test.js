import { getUser,getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un Objeto', () => {
        
        const testUser={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user= getUser(); 

        expect(user).toEqual(testUser)


    })
    
    test('getUserActivo debe retornar un objeto', () => {
        
        const nombre="El_Papi1502"
        const testUser={
            uid: 'ABC567',
            username: 'El_Papi1502'
        }
        const user=getUsuarioActivo(nombre);

        expect(user).toEqual(testUser)
       


    })
    



})
