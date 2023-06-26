import { useEffect, useState } from "react";
import { fetchCats } from '../api'
import CatFilterOption from "./CatFilterOption";

const CatFilter = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectError, setSelectError] = useState(null);

  const selectHandler = (event) => {
    const selected = event.target.value;

    const foundCat = categories.find((obj) => {
      return obj.category === selected;
    });

    if (foundCat) {
      setSelectError(null);
      setCategory(selected);
    } else {
      setSelectError("Please select a valid category");
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCats().then((results) => {
        setCategories(results);
        setLoading(false);
    })
  }, []);

if (loading) return <p>Loading...</p>

return (
    <div>
        <label htmlFor="review-category-dropdown">
            Reviews by Category:{" "}
            <span className="error-text">
                {selectError ? `(${selectError})` : ""}
            </span> 
        </label>
        <select
        onChange={selectHandler}
        id="review-category-dropdown"
        className={selectError && "error-field"}
        name="categorySelect"
        >
            <option> Select category...</option>
            {categories.map((element) => {
                return (
                    <CatFilterOption key={element.category_name} category={element} />
                );
            })}
        </select>
    </div>
)

};


export default CatFilter;


//deploy