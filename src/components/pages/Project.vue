<template>
	<div>
    	<Master>
	    	<div class="container">
	    		<div class="row">
	    			<div class="col-md-12 mt-2">
	    			   	<h5>Projects</h5>
				    	<div class="card border-light mt-3 shadow">
							<div class="card-header">  
							
						        <router-link to="/projects/create" class="btn btn-success btn-sm" style="float:right">
						        	<b-icon icon="plus-square-fill"></b-icon>&nbsp;Create new
						        </router-link>
						    </div>
						    <div class="card-body table-responsive">
						        <table class="table table-bordered table-sm" id="dataTable">
						            <thead>
						              <tr>
						                <th scope="col">SL.</th>
						                <th scope="col">Name</th>
						                <th scope="col">Client Name</th>
						                <th scope="col">Duration</th>
						                <th scope="col" class="text-center" >File</th>
						                <th scope="col" class="text-right">Action</th>
						              </tr>
						            </thead>
						            <tbody>
				            			<tr v-for="(project,key) in projects_data" :key="key">
				            				<td>{{ key+1 }}</td>
				            				<td>{{ project.name }}</td>
				            				<td>{{ project.client_name }}</td>
				            				<td>{{ project.duration }}</td>
				            				<td class="text-center">
				            					<button class="btn btn-success btn-sm"><b-icon icon="cloud-download"></b-icon>&nbsp;Download</button>
				            				</td>
				            				<td>       
				            					<router-link :to="{name:'ProjectDetails',params:{id:project.id}}" class="btn btn-info"><b-icon icon="eye-fill"></b-icon></router-link>
											</td>
				            			</tr>
						            </tbody>
						        </table>
						    </div>
						</div>
					</div>
				</div>
			</div>
    	</Master>
	</div>
</template>

<script>

	import Master from '../../components/Master.vue'
	import {  BIcon } from 'bootstrap-vue'
	export default {
	  name: 'App',
	  	components: {
	    	Master,
	    	BIcon
	  	},
	  	mounted() {
	        this.$store.dispatch("getProjects");
        },
        computed: {
        	projects_data(){
        		return this.$store.getters.projects;
        	},
        
        },
        methods:{
			img_url(image){
        		return 'http://127.0.0.1:8000/uploads/projects/'+image;
        	}
        }
	}
</script>
<style>
  .bg_header{
    background:red;
  }
</style>