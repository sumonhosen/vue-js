<template>
	<div>
    	<Master>
	    	<div class="container">
	    		<div class="row">
		    		<div class="col-md-12 mt-2">
		    			<div class="card shadow-lg p-5  bg-white rounded">
		    			   	<h3>Features List</h3>
	
				    		<table class="table table-bordered">
							  <thead>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col">First</th>
							      <th scope="col">Last</th>
							      <th scope="col">Handle</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <th scope="row">1</th>
							      <td>Mark</td>
							      <td>Otto</td>
							      <td>@mdo</td>
							    </tr>
							    <tr>
							      <th scope="row">2</th>
							      <td>Jacob</td>
							      <td>Thornton</td>
							      <td>@fat</td>
							    </tr>
							    <tr>
							      <th scope="row">3</th>
							      <td>Larry</td>
							      <td>the Bird</td>
							      <td>@twitter</td>
							    </tr>
							  </tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
    	</Master>
	</div>
</template>

<script>

	import Master from '../../components/Master.vue'


	export default {
	  	name: 'App',
	  
	  	components: {
	    	Master
	  	},

	}
</script>
<style>
  .bg_header{
    background:red;
  }
</style>