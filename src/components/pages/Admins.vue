<template>
	<div>
    	<Master>
	    	<div class="container">
	    		<div class="row">
	    			<div class="col-md-12 mt-2">
	    			   	<h5>Admins</h5>
				    	<div class="card border-light mt-3 shadow">
							<div class="card-header">  
						        <router-link to="/admin/add" class="btn btn-success btn-sm" style="float:right">
						        	<b-icon icon="plus-square-fill"></b-icon>&nbsp;Create new
						        </router-link>
						    </div>
						    <div class="card-body table-responsive">
						        <table class="table table-bordered table-sm" id="dataTable">
						            <thead>
						              <tr>
						                <th scope="col">#</th>
						                <th scope="col">Name</th>
						                <th scope="col">Email</th>
						                <th scope="col">Phone</th>
						                <th scope="col" class="text-center" >Action</th>
						              </tr>
						            </thead>
						            <tbody>
										<tr v-for="(admin,key) in admins_data" :key="key">
											<td>{{ key+1 }} </td>
											<td>{{ admin.first_name }}  {{ admin.last_name }}</td>
											<td>{{ admin.email }}</td>
											<td>{{ admin.mobile_number }}</td>
											<td>
											 <router-link :to='{name:"EditAdmin",params:{id:admin.id}}' class="btn btn-success btn-sm"><b-icon icon="pencil-square"></b-icon></router-link>		 
											 <button @click="deleteAdmin(admin.id)" type="button" class="btn btn-danger btn-sm"><b-icon icon="trash-fill"></b-icon></button>
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
	        this.$store.dispatch("getAdmins");
        },
        computed: {
        	admins_data(){
        		return this.$store.getters.admins;
        	}
        },
		methods:{
			deleteAdmin(id){
				if(confirm("Are you sure to delete this category ?")){
                	this.axios.delete(`http://localhost:8000/api/admins/delete/${id}`).then(response=>{
							if (response.data.status ==='success') {
								this.$toaster.error(response.data.message);
								this.$router.go();
							}
							else console.log(response)
						}).catch(error=>{
						console.log(error)
					})
            	}
			}
		}
	}
</script>
<style>
  .bg_header{
    background:red;
  }
</style>