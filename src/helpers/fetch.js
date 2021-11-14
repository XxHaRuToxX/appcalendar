
const baseUrl=process.env.REACT_APP_API_URL;

const fetchWithoutToken=(endpoint, data, method='GET')=>{
    const url=`${baseUrl}/${endpoint}`; /* http:localhost:4000/api/auth o event */

    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url, {
            method,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

const fetchWithToken=(endpoint, data, method='GET')=>{
    const url=`${baseUrl}/${endpoint}`; /* http:localhost:4000/api/auth o event */
    const token = localStorage.getItem('token') || '';

    if(method === 'GET'){
        return fetch(url,{
            method,
            headers:{
                'x-token':token
            }
        });
    }else{
        return fetch(url, {
            method,
            headers:{
                'Content-type': 'application/json',
                'x-token':token
            },
            body: JSON.stringify(data)
        })
    }
}

export {
    fetchWithoutToken,
    fetchWithToken,
}



