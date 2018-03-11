const API_ENDPOINT = 'http://localhost:3001';

export function getEndpoint(resource, id = '') {
    return `${API_ENDPOINT}/${resource}/${id}`;
}

export function getEndpointByCategory(category = '', resource, id = '') {
    return category === '' ? getEndpoint(resource) : `${API_ENDPOINT}/${category}/${resource}`;
}

function getOptions(options) {
    return {
        method: options.method || 'GET',
        headers: { authorization: 'readable' },
        body: JSON.stringify(options.body),
    };
}

export function fetchHandler(endpoint, options, onSuccess) {
    const _options = getOptions(options);
    return fetch(endpoint, _options)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(json => onSuccess(json));
}
