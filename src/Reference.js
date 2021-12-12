function Reference({ reference }) {
  
  const dynamicStringSpan = <span> {`${reference.html}`} </span>;
  return <>{reference.text}</>;
}

export default Reference;
