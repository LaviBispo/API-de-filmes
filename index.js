// primeiro precisamos criar o app uasando o express
const express = require("express")
const app = express()

//permitir aceitar JSON na requisição
app.use(express.json())

const filmes = [
    {
        id: 1,
        descricao: "'Como Eu Era Antes de Você' (Jojo Moyes) narra a história de Louisa Clark, uma jovem peculiar contratada para cuidar de Will Traynor, um homem rico e ativo que se tornou tetraplégico e depressivo após um acidente. A convivência transforma ambos, com Lou trazendo alegria a Will, enquanto ele a incentiva a buscar seus sonhos, resultando em um romance emocionante e transformador. ",
        titulo: "Como eu era antes de você",
        genero: "Drama, Romance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwSDOEEy0TIBnXIK1SfFI_eINttAFhnbzRQ&s",
        anoDeLancamento: "2016"
    }
]

const series = [
    {
        id: 1,
        descricao: "Bridgerton é uma série de época da Netflix ambientada na luxuosa e competitiva alta sociedade londrina do século XIX, focando na família Bridgerton e suas jornadas românticas, com uma versão alternativa da história onde a Rainha Charlotte, de ascendência africana, promoveu a integração racial, elevando nobres negros à nobreza. ",
        titulo: "Bridgerton",
        genero: "Romance",
        image: "hhttps://portalleodias.com/diversos/wp-content/uploads/2025/07/p18974714_b_h10_ao.jpg",
        anoDeLancamento: "2020"
    }
]

// buscar filme por id
app.get("/filmes/:id", function(req, res){
    const id = parseInt(req.params.id) // O query parameter volta como um texto

    const filmesFiltrados = filmes.find(a => a.id == id)

    // se a variavel for nula é igual a falso, se tiver alguma coisa é verdade
    if(filmes){
        return res.json(filmesFiltrados)
    } else {
        res.status(404).json("Filme não encontrado")
    }
})

// buscar serire por id
app.get("/series/:id", function(req, res){
    const id = parseInt(req.params.id) // O query parameter volta como um texto

    const seriesFiltradas = series.find(a => a.id == id)

    // se a variavel for nula é igual a falso, se tiver alguma coisa é verdade
    if(series){
        return res.json(seriesFiltradas)
    } else {
        res.status(404).json("Série não encontrado")
    }
})

app.get("/filmes", (req, res) => {
     const genero = req.query.genero

    // se não passar query param, etorna todos. O ponto de ! inverte o valor
    // se o nome nao tiver valor ele é falso mas por conto do sinal de ! ele vira verdadeiro e executa oq esta no if
    if(!genero){
        return res.json(filmes)
    }

    const filmesFiltrados = filmes.filter(a =>
        a.genero === genero
    )

    res.json(filmesFiltrados)
})

app.get("/series", (req, res) => {
      const genero = req.query.genero

    // se não passar query param, etorna todos. O ponto de ! inverte o valor
    // se o nome nao tiver valor ele é falso mas por conto do sinal de ! ele vira verdadeiro e executa oq esta no if
    if(!genero){
        return res.json(series)
    }

    const seriesFiltradas = series.filter(a =>
        a.genero === genero
    )

    res.json(seriesFiltradas)
})


app.post("/filmes", (req, res) => {
    const {titulo, genero, descricao, image, anoDeLancamento}= req.body;

    //validação
    if(!titulo || !genero || !descricao || !image || !anoDeLancamento){
        return res.status(400).json({erro: "Todos os campos são obrigatórios"})

    }

    const novoFilme = {
        id: filmes.length + 1,
        titulo,
        genero,
        image,
        descricao,
        anoDeLancamento
    };
    filmes.push(novoFilme);
    return res.status(201).json(novoFilme)
})

app.post("/series", (req, res) => {
    const {titulo, genero, descricao, image, anoDeLancamento}= req.body;

    //validação
    if(!titulo || !genero || !descricao || !image || !anoDeLancamento){
        return res.status(400).json({erro: "Todos os campos são obrigatórios"})

    }

    const novaserie = {
        id: filmes.length + 1,
        titulo,
        genero,
        image,
        descricao,
        anoDeLancamento
    };
    series.push(novaserie);
    return res.status(201).json(novaserie)
})


// segundo passo, colocar o servidor pra rodar
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
