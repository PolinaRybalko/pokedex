import url from "./queryURl";

async function getTypes() {
    const response = await fetch(url + 'type');
    const result = await response.text();
    const types = JSON.parse(result).results;
    let listOfTypes = [];
    for (let typeObj of types)
    {
        listOfTypes.push(typeObj.name);
    }
    return listOfTypes;
}

export default getTypes;