const { mdc } = require('./MDC');

describe('Exercício módulo 21', () => {
    it('validação de lógica- caminho feliz', () => {
        expect(mdc( 15, 5 )).toEqual(`O máximo divisor comum entre 15 e 5 é 5`);
    });
    it('validação de lógica - números iguais', () => {
        expect(mdc( 7, 7 )).toEqual(`7 e 7 são divisíveis entre si.`)
    });
    it('validação de lógica - números menores e/ou iguais a zero', () => {
        expect(mdc( -1 , 0 )).toEqual("Digite números maiores que zero.")
        
    });
    it('validação de lógica - valores inválidos', () => {
        expect(mdc( 'a', 3 )).toEqual("Digite um valor válido")
        
    });
    
});