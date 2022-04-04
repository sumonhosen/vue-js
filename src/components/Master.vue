<template>
	<div>
    	<Header/>
      		<div class="wrapper">
      			<Sidebar/>
        		<slot></slot>
      		</div>
      	<Footer/>
    	</div>
	</template>

<script>

	import Header from '../components/layouts/Header.vue'
	import Sidebar from '../components/layouts/Sidebar.vue'
	import Footer from '../components/layouts/Footer.vue'



	export default {
	  name: 'App',
	  components: {
	    Header,
	    Sidebar,
	    Footer,
	  }
	}
</script>
<style>
  .bg_header{
    background:red;
  }
</style>