	<template>
		<div>
	    	<Master>
		    	<div class="container">
		    		<div class="row">
		    			<div class="col-md-12 mt-2">
		    			    <div class="card shadow-lg p-3 mb-2 bg-white rounded">
		    			   	<h4>Add Your Features</h4>
				    		<form>
								<div class="form-group m-2">
									<label><b>Feature Name</b></label>
									<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Account">
								</div>
								<div class="form-group m-2">
								    <label><b>Content</b></label>
								    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Account no.">
								</div>
								<div class="form-group m-2">
								    <label><b>Description</b></label>
								      <vue-editor v-model="content"></vue-editor>
								</div>
							  <button type="submit" class="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
    	</Master>
	</div>
</template>

<script>

	import Master from '../../components/Master.vue'
	import { VueEditor } from "vue2-editor";

	export default {
	  name: 'App',
	  components: {
	    Master,
	    VueEditor

	  }
	}


</script>
<style>
  .bg_header{
    background:red;
  }
</style>