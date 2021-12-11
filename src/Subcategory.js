import Misconception from "./Misconception.js";

function Subcategory({ subcategory }) {
  return (
    <>
      {subcategory.name}
      {subcategory.misconceptions.map((misconception) => {
        return <Misconception misconception={misconception} />;
      })}
    </>
  );
}

export default Subcategory;
