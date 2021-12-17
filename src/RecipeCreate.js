import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const initialform = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialform);
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData(initialform);
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                required={true}
                placeholder="Name"
                value={formData.name}
              ></input>
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={handleChange}
                required={true}
                placeholder="Cuisine"
                value={formData.cuisine}
              ></input>
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                required={true}
                onChange={handleChange}
                placeholder="photo"
                value={formData.photo}
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                required={true}
                onChange={handleChange}
                placeholder="Ingredients"
                value={formData.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                required={true}
                onChange={handleChange}
                placeholder="Preparation"
                value={formData.preparation}
              ></textarea>
            </td>
            <td className="smTr">
              <td>
                <button type="submit">Create</button>
              </td>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
