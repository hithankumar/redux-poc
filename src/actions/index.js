export function selectBook(book) {
    console.log(book.title)
    //Returns action
    return{
       type: 'BOOK_SELECTED',
       payload: book 
    }
}