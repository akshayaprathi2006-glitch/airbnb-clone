import React from 'react'

 const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    
    <div className="flex justify-center gap-8 mt-6">
      <div
        onClick={() => setSelectedCategory("All")} > 🌍 All </div>
      <div
      onClick={()=>{setSelectedCategory("Beach")}}>🏖 Beach</div>
      <div
      onClick={()=>{setSelectedCategory("Camping")}}>🏕 Camping</div>
      <div
      onClick={()=>{setSelectedCategory("Mountains")}}>🏔 Mountains</div>
      <div
      onClick={()=>{setSelectedCategory("Cabins")}}>🏡 Cabins</div>
      <div
      onClick={()=>{setSelectedCategory("Tropical")}}>🌴 Tropical</div>
    </div>
  );
};
export default Categories
