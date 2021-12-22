import React from "react";
export default function Recipe({recipes, setRecipes}){
    let arr = [...recipes];
  function handleRemove(index){
    //console.log(index);
    if(index !== -1){
      arr.splice(index, 1);
      setRecipes(arr);
    }
  }
   const recipe = (
        recipes.map((recipe, index)=>{
          return (
              <tr key={index}>
              <td >{recipe.name}</td>
              <td >{recipe.cuisine}</td>
              <td ><img src={recipe.photo}/></td>
              <td className="content_td"><p>{recipe.ingredients}</p></td>
              <td className="content_td"><p>{recipe.preparation}</p></td>
              <td><button name="delete" onClick={()=> handleRemove(index)}>Delete</button></td>
              </tr>
          );
        })
      )
      return recipe
}