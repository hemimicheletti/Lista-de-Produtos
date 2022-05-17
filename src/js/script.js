const ul       = document.querySelector('.containerListaProdutos ul')
const carrinho = document.querySelector('.containerCarrinho ul')

// Montando Produtos
function montarListaProdutos(listaProdutos){
    ul.innerHTML = '';

    //Criando Elementos HTML
    listaProdutos.forEach(produto => {
        let li               = document.createElement("li")
        let img              = document.createElement("img")
        let h3               = document.createElement("h3")
        let p                = document.createElement("p")
        let pPromocional     = document.createElement("p")
        let span             = document.createElement("span")
        let olComponentes    = document.createElement("ol")

        // Classes do Li de Produtos e Ol dos Componentes
        li.classList.add("listaProdutos")
        olComponentes.classList.add("listaComponentes")

        // Criando Componentes
        produto.componentes.forEach(componente => {
            // Criando Tags de Cada Componente
            let liComponente = document.createElement("li")
            let pComponente  = document.createElement("p")            
            
            // Criando Class para Cada Componente
            liComponente.classList.add("liComponentes")  

            // Colocando Texto de Cada Componente
            pComponente.innerText = componente

            // Adicionando Componente na Tela
            liComponente.appendChild(pComponente)
            olComponentes.appendChild(liComponente)
        });               
        let botaoCarrinho    = document.createElement("button")  
        
        // Adicionando Propriedades HTML
        li.id                    = produto.id
        img.src                  = produto.img;
        img.alt                  = produto.nome;
        h3.innerText             = produto.nome;
        p.innerText              = produto.preco;
        pPromocional.innerText   = produto.precoPromocao;
        span.innerText           = produto.secao;
        botaoCarrinho.innerText  = "Adicionar ao Carrinho"

        // Adicionando Elementos na Tela
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)        
        li.appendChild(span)
        li.appendChild(olComponentes)
        li.appendChild(botaoCarrinho)
        ul.appendChild(li)
    });    
}

// Adicionado Preço Total do Carrinho na Tela
let container        = document.querySelector(".containerPrecoTotal p")
let precoTotal       = document.createElement("span")
precoTotal.id        = "precoTotal"
precoTotal.innerText = "00,00"
container.appendChild(precoTotal)

// Filtro Hortifruti
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === "Hortifruti"
    })
    montarListaProdutos(listaHortifruti);
    //atualizaPrecoHortifruti()
}

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
botaoMostrarHortifruti.addEventListener("click", filtrarPorHortifruti)

// Filtro Mostrar Todos
function mostrarTodos() {
    let todosProdutos = produtos.filter((produto) => {
        return produto
    })
    montarListaProdutos(todosProdutos);
    //atualizaPrecoTotal()
}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
botaoMostrarTodos.addEventListener("click", mostrarTodos)

// Filtro Busca
function buscarProdutos() {
    const pesquisa = document.querySelector('.campoBuscaPorNome').value.toLowerCase()
    const busca = produtos.filter((produto) => {
        if (pesquisa === produto.nome.toLowerCase()){
            return produto
        }
        else if (pesquisa === produto.secao.toLowerCase()){
            return produto
        }
        else if (pesquisa === produto.categoria.toLowerCase()){
            return produto
        }
    })
    console.log(busca)
    montarListaProdutos(busca);   

}
const campoDeBusca = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
campoDeBusca.addEventListener("click", buscarProdutos)

// Preço Dinâmico, Ao clicar no produto realiza a soma.
ul.addEventListener("click", interceptar)
function interceptar(event){
    const li = event.target.closest("li")         
}
let soma = 0

// Adicionar Produtos no Carrinho DEMO
ul.addEventListener("click", interceptarBotao)

function interceptarBotao(event){
    const botao = event.target
    
    // Adicionar Produto no Carrinho
    if (botao.tagName === "BUTTON"){
        const liProduto = botao.parentNode
        const itemClone = liProduto.cloneNode(true)
        itemClone.classList.remove("listaProdutos")        
        carrinho.appendChild(itemClone)
        const valorProduto = parseInt(itemClone.children[2].innerText)
        soma += valorProduto
        console.log(soma)
        precoTotal.innerText = soma


    }
}























 