import axios from "axios"
class WebService{
    getProducts(url){
        return axios.get(url)
    }
}
export default new WebService;