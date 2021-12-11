import Subcategory from "./Subcategory.js";

function Category({ category }) {
  return (
    <>
      {category.name}
      {category.subcategories.map((subcategory) => {
        return <Subcategory subcategory={subcategory} />;
      })}
    </>
  );
}

export default Category;
