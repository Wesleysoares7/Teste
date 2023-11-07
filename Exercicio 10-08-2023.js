const names = ['josiel', 'rafael', 'thyago', 'wesley']
const ola=(nome) => `olá ${nome}`;
const saudacao = () => {
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(ola(element));
    }
}
const adicionaNome=(nome) => names.push(nome)
adicionaNome(`Raimundinho`)
saudacao()

