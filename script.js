const titulo = document.getElementById('titulo')
const imagem = document.getElementById('imagem')
const descricao = document.getElementById('descricao')
const add = document.getElementById('add')
const cards = document.querySelector(".posts-grid")

add.addEventListener('click', () => {

    const div1 = document.createElement('div')
    div1.classList.add('post')

    const foto = document.createElement("img")
    foto.src = imagem.value
    div1.appendChild(foto)


    const div2 = document.createElement("div")

    const titulo1 = document.createElement("h3")
    titulo1.textContent = titulo.value

    div2.appendChild(titulo1)
    

    

    const descricao1 = document.createElement("p")
    descricao1.textContent = descricao.value
    div2.appendChild(descricao1)

    div1.appendChild(div2)
    

    cards.appendChild(div1)


})

