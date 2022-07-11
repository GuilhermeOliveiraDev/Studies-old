authors = []
const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente linionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books:[
            {
                title: "Você é Insubistituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    }
]

nomedoautor = "augusto cury"

const totalCategories = booksByCategory.length
console.log("O total de categorias é: " + totalCategories)
for (category of booksByCategory){
    for (atr of category.books){
        if (authors.indexOf(atr.author) == -1){
            authors.push(atr.author)
        }
        else{}
        if (atr.author.toLowerCase() == nomedoautor){
            console.log("Livro de " + nomedoautor + ", de título: " + atr.title)
        }
    }
}
console.log("O número de autores é: " + authors.length)