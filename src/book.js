const book = props => {
  // If book={book} need console.log(props.book) cause it will give book={{img: "", name: "", title: ""}}
  // If book={...book} need console.log(props)  cause it is spread operator it will spread object like book={img: "dfsd", name: "dfssd", author: "sdfsd"}
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
          {props.children}
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

export default book;
