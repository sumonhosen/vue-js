
<template>
	<div>
	  	<b-navbar class="mb-0" toggleable="lg" type="dark" variant="success">
	    	<b-navbar-brand class="text-center" to="/dashboard">Dashboard</b-navbar-brand>
	  	</b-navbar>
	</div>
</template>
<script>
	import {  BNavbar, BNavbarBrand } from 'bootstrap-vue'
	    export default {
	      	components: {
	        BNavbar,
	        BNavbarBrand
	      }
	    }
    </script>
    <style>
    	.navbar {
    		margin-bottom:0px;
    	}
    	.header_bg{
    		background:#1f523a;
    	}
    </style>