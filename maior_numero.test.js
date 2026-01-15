const { maior_numero, verificadorNumero, verificadorUnicidade } = require('./maior_numero');

describe('Exercício módulo 21', () => {
    it('validar saída', () => {
        const array = [1,2,3,4,5]
        expect((maior_numero( array ))).toEqual({
            valorMaior: 5,
            indiceMaior: 4,
            valorMenor: 1,
            indiceMenor: 0
        })
    });
    it('validar mensagem de erro', () => {
        const array = [1,1,2]
        expect(maior_numero( array )).toEqual('Números repetidos! Digite novamente')
        
    });
    it('verificador de unicidade - erro', () => {
        const array = [1,1,2];
        expect(verificadorUnicidade( array )).toBe( false )
        
    });
        it('verificador de unicidade - correto', () => {
        const array = [1,5,2];
        expect(verificadorUnicidade( array )).not.toBe( false )
        
    });
    
});