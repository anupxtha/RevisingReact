import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting() {
  return (
    <section className='bookList'>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL254_SR254,254_.jpg'
    alt=''
  />
);

const title = 'Friends and Lovers';
const Title = () => {
  return <h1>{title}</h1>;
};

const Author = () => {
  const author = 'Chandler';
  return (
    <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
      {author.toUpperCase}
    </h4>
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
