import getCategories from "./getCategories.js";
const d = document;

export default async function menuSections() {
    const categories = await getCategories(),
    template = d.getElementById("menu-category-template").content,
    fragment = d.createDocumentFragment(),
    container = d.querySelector(".categories");
    
    await categories.forEach(category => {
        const clone = d.importNode(template, true);
        clone.querySelector("div").classList.add(category.name);
        clone.querySelector(".menu-section-title").textContent = category.name;
        fragment.appendChild(clone);
    });

    container.appendChild(fragment);
}