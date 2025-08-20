//  Utility functions for the application

export function generateHexID()
{    
    const ch = '0123456789abcdef';
    
    let result = '';
    
    const n = ch.length

    for (let i = 0; i < n; i++) {
        result += ch.charAt(Math.floor(Math.random() * n));
    }
    return result;
}

export function fetchApi(data, delay = 10)
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(data);}, delay);
    });
}
