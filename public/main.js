import getDishes from "./assets/js/getProducts.js";
import promosSlider from "./assets/js/promosSlider.js";
import menuSections from "./assets/js/menuSections.js"
import getCategories from "./assets/js/getCategories.js";
const d = document;

d.addEventListener("DOMContentLoaded", async ()=>{
    promosSlider();
    await menuSections()
})
