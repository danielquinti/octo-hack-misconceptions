import Reference from './Reference.js';

function Misconception({ misconception }) {
    return (
      <>
        {misconception.references.map(reference => {
          return <Reference reference={reference}/>
        })}
        {misconception.html}
      </>
    );
  }
  
  export default Misconception;