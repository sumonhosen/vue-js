<template>
	<div>
    	<Master>
	    	<div class="container">
		      <form action="javascript:void(0)" ref="admin_edit_form" @submit="editAdminFormSubmit" method="POST" enctype="multipart/form-data"  id="adminForm">
		    	<input type="hidden" v-model="admin_edit_datas.id" name="user_id">
				<div class="row">		
			        <div class="col-md-8">
			            <div class="card border-light mt-3 shadow">
			            	<h4>Edit Admins</h4>
			                <div class="card-body">
			                    <div class="row">
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Name*</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="admin_edit_datas.last_name" name="name" required placeholder="Enter name">
			                            </div>
			                        </div>
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Email*</b></label>
			                                <input type="email" class="form-control form-control-sm"  v-model="admin_edit_datas.email" name="email" placeholder="Enter email" required>
			                            </div>
			                        </div>
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Mobile Number*</b></label>
			                                <input type="number" class="form-control form-control-sm" v-model="admin_edit_datas.mobile_number" name="mobile_number" placeholder="Enter mobile number" required>
			                            </div>
			                        </div>
			                        <div class="col-md-4">
			                            <div class="form-group">
			                                <label><b>Designation*</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="admin_edit_datas.designation" name="designation" placeholder="Enter designation" required>
			                            </div>
			                        </div>
			                        <div class="col-md-8">
			                            <div class="form-group">
			                                <label><b>Street*</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="admin_edit_datas.street"  name="street" placeholder="Enter street" required>
			                            </div>
			                        </div>
			                        <div class="col-md-3">
			                            <div class="form-group">
			                                <label><b>Postal Code*</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="admin_edit_datas.zip"  name="zip" placeholder="Enter zip code" required>
			                            </div>
			                        </div>
			                        <div class="col-md-3">
			                            <div class="form-group">
			                                <label><b>City*</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="admin_edit_datas.city" name="city" placeholder="Enter city" required>
			                            </div>
			                        </div>
			                        <div class="col-md-3">
			                            <div class="form-group">
			                                <label><b>Province*</b></label>
			                                <select v-model="state" class="form-control form-control-sm state get_shipping" required name="state">
			                                    <option value="" selected disabled>Select Province</option>
			        							<option value="Alberta">Alberta</option>
												<option value="British Columbia">British Columbia</option>
												<option value="Manitoba">Manitoba</option>
												<option value="New Brunswick">New Brunswick</option>
												<option value="Newfoundland and Labrador">Newfoundland and Labrador</option> 
												<option value="Northwest Territories">Northwest Territories</option> 
												<option value="Nova Scotia">Nova Scotia</option> 
												<option value="Nunavut">Nunavut</option>
												<option value="Ontario">Ontario</option>
												<option value="Prince Edward Island">Prince Edward Island</option>
												<option value="Quebec">Quebec</option>
												<option value="Saskatchewan">Saskatchewan</option> 
												<option value="Yukon">Yukon</option>
            
			                                </select>
			                            </div>
			                        </div>
			                        <div class="col-md-3">
			                            <div class="form-group">
			                                <label><b>Country*</b></label>
			                                <input type="text" class="form-control form-control-sm" v-model="admin_edit_datas.country" name="country" required>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>

			        <div class="col-md-4">
			            <div class="card border-light mt-3 shadow">
			                <div class="card-body">
			                    <div class="row">
			                        <div class="col-md-12">
			                            <div class="text-center">
			                                <div class="img_group">
			                                    <img class="img-thumbnail uploaded_img" src="">

			                                    <div class="form-group text-center">
			                                        <label><b>Profile Picture</b></label>
			                                        <div class="custom-file text-left">
			                                            <input type="file" class="custom-file-input"  name="profile">
			                                            <label class="custom-file-label">Choose file...</label>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>

			                        <div class="col-md-6">
			                            <div class="form-group">
			                                <label><b>Password*</b></label>
			                                <input type="password" class="form-control form-control-sm" v-model="password" name="password" required>
			                            </div>
			                        </div>
			                        <div class="col-md-6">
			                            <div class="form-group">
			                                <label><b>Confirm Password*</b></label>
			                                <input type="password" class="form-control form-control-sm" v-model="password_confirmation" name="password_confirmation" required>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div class="card-footer">
			                    <button type="submit"  class="btn btn-success">
			                        Create
			                    </button>
			                    <br>
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
	import Vue from 'vue'
	import Toaster from 'v-toaster'

	import 'v-toaster/dist/v-toaster.css'
	Vue.use(Toaster, {timeout: 5000})


	export default {
	  	name: 'App',
	    components:{
	        Master,

	    },
	     data(){
	        return{
		            name:'',
		            email:'',
		            mobile_number:'',
		            designation:'',
		            street:'',
		            zip:'',
		            city:'',
		            state:'',
		            country:'',
		            profile: null,
		            password:'',
		            password_confirmation:'',
                    admin_edit_datas:''
	        }
	    },
        mounted(){
            this.showUpdateAdmin();
        },

   	 	methods: {
    			async editAdminFormSubmit(){
	    		 	let data = new FormData(this.$refs.admin_edit_form);
	    		 	await this.axios.post(`http://localhost:8000/api/admins/update/${this.$route.params.id}`,data)
	                    .then(response => {
			                    if (response.data.status ==='success') {
			                        this.$toaster.success(response.data.message);
			                    }
		                    	else console.log(response)
                			
	                    })
				},
                async showUpdateAdmin(){
                    await this.axios.get(`http://localhost:8000/api/admins/edit/${this.$route.params.id}`).then(response=>{
                        this.admin_edit_datas = response.data; 
                    })
                }
			},

	}
</script>
<style>
  .bg_header{
    background:red;
  }
</style>