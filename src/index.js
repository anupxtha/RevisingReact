import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Testing } from './Testing';
import File from './file';
import { books } from './books';
import Book from './book';

//Variables
const img =
  'https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL254_SR254,254_.jpg';

const title = 'The Book of Friends';
const author = 'Chandler';

//Objects
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51i6KX4JNIL._AC_SX184_.jpg',
  title: 'White Bird: A Novel',
  author: 'R. J. Palacio, Erica S. Perl',
};
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51RYHlz+7OL._AC_SX184_.jpg',
  title: 'White Bird: A Novel',
  author: 'R. J. Palacio, Erica S. Perl',
};

function Greeting() {
  return (
    <section className='bookList'>
      {books.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}
      <Testing />
      <Book bookImg={img} bookTitle={title} bookAuthor={author} />
      <Book book={firstBook}>
        <File />
      </Book>
      <Book book={secondBook} />
    </section>
  );
}

// // It is simpler to up functional Component Greeting // //
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById('root'));
