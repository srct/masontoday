export async function fetchData() {
    // Fetches data from api
    try {
        let response = await fetch('http://34.234.214.232')
        //console.warn(response);
        let responseJson =  response.json();
        return responseJson;
    } catch (error) {
        return;
    }
}
