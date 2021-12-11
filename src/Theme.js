import Category from "./Category.js";

function Theme({ theme }) {
  return (
    <>
      {theme.name}
      {theme.categories.map((category) => {
        return <Category category={category} />;
      })}
    </>
  );
}

export default Theme;
