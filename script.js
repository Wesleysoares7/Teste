const header = document.querySelector('header')
header.style.background="#c7bf9f"

const titulo = document.createElement('h1')
titulo.innerText='Dragon Ball z'
titulo.style.marginTop="6rem"
const tituloConteiner = document.querySelector('#titulo')
tituloConteiner.appendChild(titulo)

const personagens = [
        {
            nome:"Goku",
            imgNormal:"./imagens/goku saga z.webp",
            imgPower:"./imagens/gokupower.webp",
            link:"https://pt.wikipedia.org/wiki/Goku"
        
        },
        {
            nome:"Vegeta",
            imgNormal:"./imagens/vegeta saga z.webp",
            imgPower:"./imagens/vegetasupersayadin.webp",
            link:"https://pt.wikipedia.org/wiki/Vegeta"

        },
        {
            nome:"Gohan",
            imgNormal:"./imagens/Gohan.webp",
            imgPower:"./imagens/gohanpower.webp",
            link:"https://pt.wikipedia.org/wiki/Son_Gohan"
        },
        {
            nome:"Kuririn",
            imgNormal:"./imagens/kuririn saga z.webp",
            imgPower:"./imagens/kuririnpower2.png",
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
        cardImg.src=personagem.imgNormal
        cardImg.className='dbz'
        cardImg.id=personagem.nome
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
function power() {
//    window.alert('cliquei')
    //const card = document.querySelectorAll('.card')
    const dbzImgs = document.querySelectorAll('.dbz')
    for (let index = 0; index < dbzImgs.length; index++) {
        const element = dbzImgs[index];
        element.src=personagens[index].imgPower
        
    }
  
 
}

function normal() {
    const dbzImgs = document.querySelectorAll('.dbz')
    for (let index = 0; index < dbzImgs.length; index++) {
        const element = dbzImgs[index];
        element.src=personagens[index].imgNormal
        
    }
}    

function handleMouseOver(event) {
    const imgChage = event.target.lastChild.firstChild
    for (let index = 0; index < personagens.length; index++) {
        const personagem = personagens[index];
        if (personagem.nome===imgChage.id) {
            imgChage.src=personagem.imgPower
        }
        
    }
    
}
const cards = document.querySelectorAll('.card')
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('mouseover',handleMouseOver)
    card.addEventListener('mouseout',normal)
    
}
