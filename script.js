// 1.A Bíblia Digital API
let book=document.getElementById('book')
var book_url='https://www.abibliadigital.com.br/api/books'

async function book_fetching(){
    try{
        var url_fetch=await fetch(book_url)
        method:"GET"
    var res= await url_fetch.json()
    // console.log(res);
   res.forEach((books)=>{
    let li =document.createElement('h3')
    li.innerText=books.name
    book.appendChild(li)
    let hi=document.createElement('p')
    hi.innerText=books.author
    book.appendChild(hi)
    let vi= document.createElement('h5')
    vi.innerText=books.chapters
    book.appendChild(vi)
   })
    }
    catch(err){
        console.log(err);
        console.log(error);
        }   
}
book_fetching()