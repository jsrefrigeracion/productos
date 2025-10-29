import box from "../assets/box.svg";
import categories from "../assets/categories.svg";
export const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <li>
            <a href="#">
              <img src={box} alt="" width={20} height={20} />
              <p>Productos</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={categories} alt="" width={20} height={20} />
              <p>Categorías</p>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
