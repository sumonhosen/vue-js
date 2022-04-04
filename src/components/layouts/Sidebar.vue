<template>
    <nav id="sidebar">
      <ul class="list-unstyled components">
          <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b-icon icon="house-door"></b-icon>&nbsp;&nbsp;Dashboard</h6>
          <!--<li>
            <a href="#pageSubmenu" data-toggle="collapse"  aria-expanded="false" class="dropdown-toggle nav-link">Dashboard</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                    <a href="#">Page 1</a>
                </li>
                <li>
                    <a href="#">Page 2</a>
                </li>
                <li>
                    <a href="#">Page 3</a>
                </li>
            </ul>
          </li>-->
          <li>
              <router-link to="/projects" class="nav-item">
                  &nbsp;&nbsp;&nbsp;&nbsp;<b-icon icon="list"></b-icon>&nbsp;&nbsp;Projects
              </router-link>
          </li>
          <!--<li>
              <router-link to="/feature" class="nav-item">&nbsp;&nbsp;&nbsp;&nbsp;Add Features</router-link>
          </li>
          <li>
              <router-link to="/feature_list" class="nav-item">&nbsp;&nbsp;&nbsp;&nbsp;<b-icon icon="list
"></b-icon>&nbsp;&nbsp;Features List</router-link>
          </li>-->
          <li>
              <router-link to="/admins" class="nav-item">&nbsp;&nbsp;&nbsp;&nbsp; <b-icon icon="person-circle
"></b-icon>&nbsp;&nbsp;Admins</router-link>
          </li>
      </ul>
    </nav>
</template>
<script>
 import {  BIcon } from 'bootstrap-vue'
    export default {
      components: {
        BIcon
      }
    }
  

</script>
<style>
  /*
    DEMO STYLE
*/

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    background: #fafafa;
    }
p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}
.nav-link{
  color:black;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 230px;
    max-width: 230px;
    height:1300px;
    background: #315a47;
    color: #fff;
    transition: all 0.3s;
   
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  font-family: ui-rounded;
}

#sidebar ul p {
    color: #fff;
   
}

#sidebar ul li a {
    padding: 4px;
    font-size: 16px;
    color:white;
    text-decoration:none;
    display: block;
}

#sidebar ul li a:hover {
    color: #7386D5;
    background: #1212128c;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}

</style>

