function toQueryParams(object) {
    let queryParams = '';

    for (let key of Object.keys(object)) {
        queryParams += `${key}=${object[key]}&`;
    }

    return queryParams.slice(0, -1);
}

const objParams = {
    search: 'Вася',
    take: 10,
    date: '24.04.2024'
}

console.log(toQueryParams(objParams));
