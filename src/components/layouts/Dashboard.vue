	<template>
	 <div>
		<Master>
			<div id="content">
	          <div class="container">
	          	<div class="row">
	          		<div class="col-md-3">
	          			<div class="shadow-none p-3 mb-5 bg-light rounded">
		          			<div style="width: 15rem;">
							  <div class="card-body">
							    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
							  </div>
							</div>
						</div>
	          		</div>
	          		<div class="col-md-3">
	          			<div class="card shadow-none p-3 mb-5 bg-light rounded" style="width: 15rem;">
						  <div class="card-body">   
						    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
						  </div>
						</div>
	          		</div>
	          		<div class="col-md-3">
	          			<div class="card shadow-none p-3 mb-5 bg-light rounded" style="width: 15rem;">
						  <div class="card-body">
						    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> 
						  </div>
						</div>
	          		</div>
	          		 <div class="col-md-3">
	          			<div class="card shadow-none p-3 mb-5 bg-light rounded" style="width: 15rem;">
						  <div class="card-body">
						    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
						  </div>
						</div>
	          		</div>
	          	</div>
	          </div>
			</div>
		</Master>
	  </div>
	</template>
	<script>

	import Master from '../components/Master.vue'

	export default {
	  name: 'App',
	  components: {
	    Master
	  }
	}
</script>