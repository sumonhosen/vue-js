<template>
	<div>
    	<Master>
	    	<div class="container">
	    	 <form action="javascript:void(0)" ref="edit_project_form" @submit="EditProjectForm(project_edit_data.id)"  method="post" enctype="multipart/form-data">
	    		<div class="row">
	    			<div class="col-md-8 mt-2">
	    			   	<h5>Projects Edit</h5>
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
			                                <input type="text" class="form-control form-control-sm" v-model="project_edit_data.name" name="name" placeholder="Enter project name" required>
			                            </div>
			                        </div>
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Client Name</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="project_edit_data.client_name" name="client_name" placeholder="Enter client name">
			                            </div>
			                        </div>
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Project Duration*</b>(Days)</label>
			                                <input type="number" class="form-control form-control-sm" v-model="project_edit_data.duration" name="duration" placeholder="Enter proeject duration" required>
			                            </div>
			                        </div>
			                        <div class="col-12">
			                            <div class="form-group">
			                                <label><b>Client Location</b></label>
			                                <input type="text" class="form-control form-control-sm" name="client_location" v-model="project_edit_data.client_location" placeholder="client_location">
			                            </div>
			                        </div>
			                        <div class="col-12">
			                            <div class="form-group">
			                                <label><b>Assign Permission</b></label>
			                                <select class="form-control" required name="user_id">
			                                    <option selected disabled>Select User</option>
			                                    <option value="1">Admin</option>
			                                </select>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="form-group">
			                        <label><b>Project Description</b></label>
			                        <textarea id="editor" class="form-control form-control-sm" v-model="project_edit_data.description" name="description" cols="30" rows="3" required placeholder="Enter project description"></textarea>
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
		                    <button type="submit" class="btn btn-success btn-block">Update</button>
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
                project_edit_data:''
            }
	    },
        mounted(){
            this.projectEditData();
        },
	    methods:{
            EditProjectForm(id){

                let data = new FormData(this.$refs.edit_project_form);
                this.axios.post(`http://localhost:8000/api/projects/update/${id}`,data).then(response => {
                        if (response.data.status ==='success') {
                            this.$toaster.success(response.data.message);
                            this.$router.push({name:"Project"})
                        }
                        else console.log(response)
            })
	  	},
        async  projectEditData(){
            await this.axios.get(`http://localhost:8000/api/projects/edit/${this.$route.params.id}`).then(response=>{
                this.project_edit_data = response.data; 
            })       
        }
	  }
	}
</script>