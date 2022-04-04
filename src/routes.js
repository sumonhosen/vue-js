import Vue from 'vue';
import VueRouter  from 'vue-router';

import Login from './components/Login.vue'
import Master from './components/Master.vue'
import Project from './components/pages/Project.vue'
import ProjectDetails from './components/pages/ProjectDetails.vue'
import ProjectCreate from './components/pages/ProjectCreate.vue'
import ProjectEdit from './components/pages/ProjectEdit.vue'
import AddFeature from './components/pages/AddFeature.vue'
import FeatureList from './components/pages/FeatureList.vue'
import Admins from './components/pages/Admins.vue'
import AddAdmin from './components/pages/AddAdmin.vue'
import EditAdmin from './components/pages/EditAdmin.vue'


Vue.use(VueRouter);
  export const routes = [

 
    {
      name: 'Login',
      path: '/login',
      component: Login
    },     
    {
      name: 'Master',
      path: '/dashboard',
      component: Master
    },   
    {
      name: 'Project',
      path: '/projects',
      component: Project
    },   
    {
      name:'ProjectDetails',
      path: '/project_details/:id',
      component: ProjectDetails
    },
    {
      name: 'ProjectCreate',
      path: '/projects/create',
      component: ProjectCreate
    },    
    {
      name: 'ProjectEdit',
      path: '/projects/edit/:id',
      component: ProjectEdit
    },   
    {
      name: 'AddFeature',
      path: '/feature',
      component: AddFeature
    },   
    {
      name: 'FeatureList',
      path: '/feature_list',
      component: FeatureList
    },
    {
      name: 'Admins',
      path: '/admins',
      component: Admins
    },  
    {
      name: 'AddAdmin',
      path: '/admin/add',
      component: AddAdmin
    },
    {
      name: 'EditAdmin',
      path: '/admin/edit/:id',
      component: EditAdmin
    }
  ];

