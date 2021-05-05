export default async function getCategories(){
    try{
        const response = await fetch("https://api-restaurant-rodolfodom.herokuapp.com/categories"),
        json = await response.json();
        return json;
    }catch(err){
        return err;
    }
}