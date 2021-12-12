import Reference from './Reference.js';

function Misconception({ misconception }) {
    const dynamicStringSpan = <span> {`${misconception.html}`} </span>
    return (
      <>
        {misconception.references.map(reference => {
          return <Reference reference={reference}/>
        })}
        {misconception.text}
      </>
    );
  }
  
  export default Misconception;