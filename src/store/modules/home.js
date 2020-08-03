import {
    HOME_FUNCTION_SUCCESS
} from '../mutation_type'
//import Api from '../../api/index'
export default {
    namespaced:true,
    state:{
        titulo:'HOME COMPONENT...'
    },
    actions:{
        startHome({commit}){
            commit('HOME_FUNCTION_SUCCESS',true)
        }
    },
    mutations:{
        [HOME_FUNCTION_SUCCESS](){

        }
    }    
}