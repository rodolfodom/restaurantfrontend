export default async function getDishes(){
    try{
        const response = await fetch("https://api-restaurant-rodolfodom.herokuapp.com/products"),
        json = await response.json();
        return json;
    }catch(err){
        return err;
    }
}