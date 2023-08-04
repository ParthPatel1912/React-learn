export const listActivityApi = async () => {
    try {
        const apiData = await fetch('https://fakestoreapi.com/products');
        const jsonData = await apiData.json();
        return jsonData;
    } catch (error) {
        console.error('api',error);
    }
}