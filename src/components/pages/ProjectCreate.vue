<template>
	<div>
    	<Master>
	    	<div class="container">
	    	 <form action="javascript:void(0)" ref="project_form" @submit="projectForm"  method="post" enctype="multipart/form-data">
	    		<div class="row">
	    			<div class="col-md-8 mt-2">
	    			   	<h5>Projects</h5>
				    	<div class="card border-light mt-3 shadow">
					      <div class="card border-light mt-3 shadow">
			                <div class="card-header">
			                    <router-link to="/projects" class="btn btn-success btn-sm">
			                   		<b-icon icon="chevron-double-left"></b-icon> View All
			                   	</router-link>
			                </div>
			                <div class="card-body">
			                    <div class="row">
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Project Name*</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="name" name="name" placeholder="Enter project name" required>
			                            </div>
			                        </div>
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Client Name</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="client_name" name="client_name" placeholder="Enter client name">
			                            </div>
			                        </div>
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Project Duration*</b>(Days)</label>
			                                <input type="number" class="form-control form-control-sm" v-model="duration" name="duration" placeholder="Enter proeject duration" required>
			                            </div>
			                        </div>
			                        <div class="col-12">
			                            <div class="form-group">
			                                <label><b>Client Location</b></label>
			                                <input type="text" class="form-control form-control-sm" name="client_location" v-model="client_location" placeholder="client_location">
			                            </div>
			                        </div>
			                        <div class="col-12">
			                            <div class="form-group">
			                                <label><b>Assign Permission</b></label>
			                                <select class="form-control" required name="user_id" v-for="(assign,key) in assigned" :key="key">
			                                    <option selected disabled>Select User</option>
			                                    <option :value="assign.id">{{ assign.first_name }}</option>
			                                </select>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="form-group">
			                        <label><b>Project Description</b></label>
			                        <textarea id="editor" class="form-control form-control-sm" v-model="description" name="description" cols="30" rows="3" required placeholder="Enter project description"></textarea>
			                    </div>
			                </div>
			            </div>
					</div>
				</div>
				<div class="col-md-4 mt-5">
		            <div class="card border-light shadow">
		                <div class="card-body">
		                    <div class="text-center">
		                        <div class="img_group">
		                            <img class="img-thumbnail uploaded_img" src="">
		                            <div class="form-group text-center">
		                                <label><b>Project Image</b></label>
		                                <div class="custom-file text-left">
		                                    <input type="file" class="custom-file-input image_upload" name="image" accept="image/*">
		                                    <label class="custom-file-label">Choose file...</label>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <hr>
		                    <div class="form-group">
		                        <label><b>Project File</b></label>
		                        <input type="file" name="file">
		                        <!-- <div class="custom-file text-left">
		                            <label class="custom-file-label">Choose file...</label>
		                        </div> -->
		                    </div>
		                </div>
		                <div class="card-footer">
		                    <button type="submit" class="btn btn-success btn-block">Create</button>
		                    <small><b>NB: *</b> marked are required field.</small>
		                </div>
	                 	</div>
	                 </div>
	               </div>
	            </form>
	        </div>
    	</Master>
	</div>
</template>

<script>

	import Master from '../../components/Master.vue'

	export default {
	  name: 'App',
	  components: {
	    Master,

	  },
	  data(){
	  	return{
	  		name:'',
	  		client_name:'',
	  		duration:'',
	  		client_location:'',
	  		user_id:'',
	  		description:'',
	  		image:'',
	  		file:'',
			assigned:''
	  	}
	  },
	  mounted(){
		  this.getAssinged();
	  },
	  methods:{
	  	async projectForm(){
	  		let data = new FormData(this.$refs.project_form);
		 	this.axios.post('http://localhost:8000/api/project/store',data)
            .then(response => {
            console.log(response);
                this.$refs.project_form.reset();
                    if (response.data.status ==='success') {
                        this.$toaster.success(response.data.message);
                    }
                	else console.log(response)
    			
            })
	  	},
		async getAssinged(){
			await this.axios.get('http://127.0.0.1:8000/api/projects/assign_users').then(response=>{
				this.assigned = response.data;
			})
		}
	  }
	}
</script>