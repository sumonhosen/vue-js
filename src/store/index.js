import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(Vuex)
Vue.use(VueAxios, axios);


export default new Vuex.Store({
    state: {
      admins: [],
      projects: [],
      project_details: [],
 
  	},
   	getters: {
	    admins(state){
        return state.admins;
      },
      projects(state){
        return state.projects;
      },    
  
      project_details(state){
        return state.project_details;
      },

  	},
   	mutations: {
   		GET_ADMINS(state,value){
   			state.admins = value;
   		},
      GET_PROJECTS(state,value){
        state.projects = value;
      },   
      GET_PROJECTS_DETAILS(state,value){
         state.project_details = value;
      }   

  	},
  	actions: {
      async getAdmins(data){
        axios.get('http://localhost:8000/api/admins/index').then(response => {
          data.commit('GET_ADMINS',response.data);
        })
      },
      async getProjects(data){
        axios.get('http://localhost:8000/api/projects/index').then(response => {
          console.log(response);
          data.commit('GET_PROJECTS',response.data);
        })
      },

      async getProjectDetails(data,id){
        console.log(id);
        axios.get(`http://127.0.0.1:8000/api/projects/${id}`).then(response=>{
          console.log(response);
                data.commit('GET_PROJECTS_DETAILS',response.data);
            })
        },         
  	},
});
