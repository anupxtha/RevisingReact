import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      <Book bookImg={img} bookTitle={title} bookAuthor={author} />
      <Book book={firstBook} />
      <Book book={secondBook} />
    </section>
  );
}

const Book = props => {
  console.log(props);
  return (
    <article className='book'>
      {props.book ? (
        <>
          {/* Props for Objects */}
          <img src={props.book.img} alt='' />
          <h1>{props.book.title}</h1>
          <h4
            style={{
              color: '#617d98',
              fontSize: '0.75rem',
              marginTop: '0.25rem',
            }}
          >
            {props.book.author}
          </h4>
        </>
      ) : (
        <>
          {/* Props for Variables */}
          <img src={props.bookImg} alt='' />
          <h1>{props.bookTitle}</h1>
          <h4
            style={{
              color: '#617d98',
              fontSize: '0.75rem',
              marginTop: '0.25rem',
            }}
          >
            {props.bookAuthor}
          </h4>
        </>
      )}
    </article>
  );
};

// // It is simpler to up functional Component Greeting // //
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById('root'));
