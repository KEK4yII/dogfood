const config = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ1MzY1MjMyOTFkNzkwYjMwNzI3NDIiLCJncm91cCI6InNvbG8iLCJpYXQiOjE2ODIyNTc1NjksImV4cCI6MTcxMzc5MzU2OX0.tBYienLfVBF3ItO9mX0JOeeZvAUWZUgK1UxueicsNcg",
    baseUrl: 'https://api.react-learning.ru'
}

class Api
{
    constructor({token, baseUrl}){
        this.token = token;
        this.baseUrl = baseUrl;
        this.headers = {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+this.token
        }
    }

    getProducts() {
        return fetch(this.baseUrl+'/products',{
            headers:this.headers
        })
        .then((data)=>data.json());
    }
    
    searchProducts(query) {
        return fetch(this.baseUrl+'/products/search?query='+query,{
            headers: this.headers
        })
        .then(data=>data.json());
    }

    getUserInfo(){
        return fetch(this.baseUrl+'/users/me', {
            headers: this.headers
        })
        .then(data=>data.json());
    }
    changeLikeProductStatus(productID, like) {
        return fetch(this.baseUrl+'/products/likes/'+productID,{
            method: like ? 'PUT' : 'DELETE',
            headers: this.headers
        }).then(data=>data.json())
    }
}

export const api = new Api(config);