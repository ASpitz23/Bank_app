const API_URL = 'http://localhost:8080'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

export class ApiCallerService {
    getSessionToken() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        console.log("Subsitute login used!!, this is not good practice, CORRECT ME!!!!!!!!!!!!!!!!")
        return 'TODO, make token!! use user.token ??';
    }
    getHeader(authOveride=false) {
        var token = this.getSessionToken();
        var ret =  {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'Origin': '', 
            //'Host': 'TODO'
        };
        if(!authOveride) {
            ret['Authorization'] = `Bearer ${token}`;
        }  
        return ret;
    }
    fetchCall(endpoint, type, data, authOveride=false) {
        return fetch(`${API_URL}/${endpoint}`,
            {
                method: type,
                headers: this.getHeader(authOveride),
                body: JSON.stringify(data)
            },
        );
    }
    get(endpoint, data) {
        return this.fetchCall(endpoint, 'get', data);
    }
    post(endpoint,data) {
        return this.fetchCall(endpoint, 'post', data);
    }
    postNoAuth(endpoint, data) {
        return this.fetchCall(endpoint, 'post', data);
    }
    put(endpoint, data) {
        return this.fetchCall(endpoint, 'put', data);
    }
    delete(endpoint, data) {
        return this.fetchCall(endpoint, 'delete', data);
    }
}
<<<<<<< HEAD:frontend/loan_shark/src/services/ApiCallerService.js
export default ApiCallerService
=======

const apiService = new ApiService()
export default apiService;
>>>>>>> 56f4d23d81d3a9ed6d6f267dc0d589406b6e7069:frontend/bank_app/src/service/ApiCall.js