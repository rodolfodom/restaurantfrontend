import getDishes from "./assets/js/getProducts.js";
import promosSlider from "./assets/js/promosSlider.js";

const d = document;

d.addEventListener("DOMContentLoaded", async ()=>{
    promosSlider();
    await getDishes();
})
