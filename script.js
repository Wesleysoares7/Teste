const header = document.querySelector('header')
header.style.background="blue"

const titulo = document.createElement('h1')
titulo.innerText='dragon ball z'
titulo.style.marginTop="6rem"
const tituloConteiner = document.querySelector('#titulo')
tituloConteiner.appendChild(titulo)

const personagens = [
        {
            nome:"Goku",
            img:"./imagens/goku saga z.webp",
            link:"https://pt.wikipedia.org/wiki/Goku"
        
        },
        {
            nome:"Vegeta",
            img:"./imagens/vegeta saga z.webp",
            link:"https://pt.wikipedia.org/wiki/Vegeta"

        },
        {
            nome:"Gohan",
            img:"./imagens/Gohan.webp",
            link:"https://pt.wikipedia.org/wiki/Son_Gohan"
        },
        {
            nome:"Kuririn",
            img:"./imagens/kuririn saga z.webp",
            link:"https://pt.wikipedia.org/wiki/Kuririn"
        }
    ]
    
    
    for (let index = 0; index < personagens.length; index++) {
        const personagem = personagens[index];
        const card = document.createElement('div')
        card.className='card'
        const linkImg = document.createElement('a')
        linkImg.href=personagem.link
        linkImg.target='_blank'
        const linkTitulo = document.createElement('a')
        linkTitulo.href=personagem.link
        linkTitulo.target='_blank'
        const cardTitulo = document.createElement('p')
        cardTitulo.innerText=personagem.nome
        const cardImg = document.createElement('img')
        cardImg.src=personagem.img
        linkTitulo.appendChild(cardTitulo)
        linkImg.appendChild(cardImg)
        card.appendChild(linkTitulo)
        card.appendChild(linkImg)
        const cardConteiner = document.querySelector('#cards-conteiner')
        cardConteiner.appendChild(card)
        
        
        
    }

        const card = document.querySelectorAll('.card')
        for (let index = 0; index < card.length; index++) {
            const element = card[index];
            if (index % 2 === 0) { 
                element.style.background="red"                
            }   else{
                element.style.background="blue"
            }
            
            
        }       
        // const vegeta = card[1]
        // vegeta.style.background="red"