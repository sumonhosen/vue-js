<template> 
    <div>
        <Master>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card mt-2">
                            <div class="card-header"> 
                                <router-link to="/projects"  class="btn btn-success btn-sm"><b-icon icon="chevron-double-left"></b-icon> View All</router-link>
                                <router-link to="/projects/create" class="btn btn-info btn-sm"><b-icon icon="plus-square-fill"></b-icon>&nbsp;Create</router-link>
                                <router-link :to="{name:'ProjectEdit',params:{id:project_details.id}}" class="btn btn-primary btn-sm"><b-icon icon="pencil-square"></b-icon>&nbsp;Edit</router-link>
                                <button class="btn btn-sm btn-danger" @click="projectDelete(project_details.id)"><b-icon icon="trash-fill"></b-icon>&nbsp; Delete</button>         
                                <a href="" download class="btn btn-success btn-sm"><b-icon icon="cloud-download"></b-icon>&nbsp;Download file</a>
                            </div>
                        </div>
                        <div class="card border-light mt-3 shadow">
                            <div class="card-header">
                                <h5>Project Info</h5>
                            </div>
                            <div class="card-body">
                                <p class="mb-0"><b>Project Name:</b> {{ project_details.name }}</p>
                                <p class="mb-0"><b>Client Name: </b> {{ project_details.client_name }}</p>
                                <p class="mb-0"><b>Project Duration: {{ project_details.duration }} days</b></p>
                                <p><b>Client Location: {{ project_details.client_location }}</b></p>
                                <h5>Project Description</h5>
                                <p v-html="project_details.description"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-light mt-2 shadow">
                            <div class="card-header">
                                <h5>Create Section</h5>
                            </div>
                            <form action="javascript:void(0)" ref="section_form" @submit="sectionForm"  method="post" enctype="multipart/form-data">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label><b>Section Name</b>*</label>
                                        <input type="text" class="form-control" name="name" placeholder="Enter section" required>
                                    </div>
                                    <input type="hidden"  name="project_id" v-model="project_details.id">
                                    <div class="form-group">
                                        <label><b>Group*</b></label>
                                        <select name="group" class="form-control">
                                            <option value="Front End">Front End</option>
                                            <option value="Back End">Back End</option>
                                        </select>
                                    </div>
                                    <div class="item_group">
                                        <label class="m-1">
                                            <b>Items</b>
                                            <button class="btn btn-success btn-sm add_item" type="button" @click="add_items">
                                                <b-icon icon="plus-square-fill"></b-icon>
                                            </button>
                                        </label>
                                        <div class="sectoin_items mt-2"  v-for="(item,key) in items" :key="key">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input class="form-control" type="text"  placeholder="Item Name*" name="item[]" required>
                                                    <div class="input-group-append">
                                                        <span class="input-group-btn">
                                                            <button class="btn btn-danger input_group_btn remove_item" type="button" title="Remove Item" @click="removeItem(key)">
                                                            <b-icon icon="x"></b-icon></button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-success btn-block">Create</button>
                                    <small><b>NB: *</b> marked are required field.</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="card mt-4">
                    <div class="card-header">
                        <h4 class="d-inline-block">Back End</h4> 
                            <button data-toggle="modal" data-target="#BackOrderModal" class="btn btn-sm btn-success text-right check_btn">
                                Change Section Order
                            </button> 
                            <a href="http://127.0.0.1:8000/adminx/projects/check-uncheck/2/Back%20End/1" class="btn btn-info btn-sm float-right mr-2 check_btn">
                                <b-icon icon="check-all"></b-icon> Check All
                            </a> 
                            <a href="" class="btn btn-danger btn-sm float-right mr-2 check_btn">
                                 <b-icon icon="x"></b-icon> Uncheck All
                            </a>
                        </div>
                        <div class="card-body table-responsive" v-for="(back,key) in back_sections" :key="key">
                            <h5 class="d-inline-block">{{ back.name }}</h5> 
                            <button v-b-modal.modalBack data-toggle="modal" data-section="12" data-item="" data-target="#addItemModal" class="btn btn-success btn-sm add_item_modal_btn d-inline-block">
                               <b-icon icon="plus-square-fill"></b-icon>&nbsp; Add Sub Item
                            </button> 
                            <b-modal id="modalBack" title="Add Item Back" v-if="BackModalShow">
                                <label>
                                    <b>Items &nbsp;
                                    <button @click="addSectionItem" class="btn btn-success">
                                        <b-icon icon="plus-square-fill"></b-icon>
                                    </button>
                                    </b>
                                </label>
                                <form action="javascript:void(0)" ref="backsection_itemform" @submit="sectionItemBackSubmit(back.id)">
                                    <div class="form-group" v-for="(item,key) in section_items" :key="key">
                                        <div class="input-group">
                                        <input type="text" name="sec_items[]" v-model="item.name" placeholder="Item Name*" required="required" class="form-control m-2"> 
                                            <div class="input-group-append">
                                                <span class="input-group-btn">
                                                    <button type="button" title="Remove Item" class="btn btn-danger input_group_btn remove_item m-2" @click="removeSectionItem(key)"><b-icon icon="x"></b-icon></button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-success mt-2 text-right">Submit</button>
                                </form>
                            </b-modal>
                            <ul id="myTab" role="tablist" class="nav nav-tabs dev_tab mb-2">
                                <li class="nav-item">
                                    <a id="dev_1-tab" data-toggle="tab" href="#section_12_dev_1" role="tab" aria-controls="dev_1" aria-selected="true" class="nav-link active">Dev 1</a>
                                </li>
                                <li class="nav-item">
                                    <a id="dev_2-tab" data-toggle="tab" href="#section_12_dev_2" role="tab" aria-controls="dev_2" aria-selected="true" class="nav-link  disabled">Dev 2</a>
                                </li>
                                <li class="nav-item">
                                    <a id="qa-tab" data-toggle="tab" href="#section_12_qc" role="tab" aria-controls="qc" aria-selected="true" class="nav-link  disabled">QC</a>
                                </li> 
                                 <li class="nav-item">
                                    <a id="qa-tab" data-toggle="tab" href="#section_12_qa" role="tab" aria-controls="qa" aria-selected="true" class="nav-link  disabled">QA</a>
                                </li>
                            </ul>
                            <div id="myTabContent" class="tab-content">
                                <div id="section_12_dev_1" role="tabpanel" aria-labelledby="dev_1-tab" class="tab-pane fade show active">
                                  <table class="table table-sm table-bordered">
                                    <tbody>
                                        <tr class="table-warning" v-for="(section,key) in back.section_items" :key="key">
                                            <td rowspan="1" class="td_bg_normal" style="width: 50px;">
                                                <button data-toggle="modal" data-item="28" data-name="de2" data-delete="http://127.0.0.1:8000/adminx/projects/section-item/delete/28" data-target="#editItemModal" title="Edit Item" class="btn btn-sm btn-info edit_item_modal_btn">
                                                    <b-icon icon="pencil-square"></b-icon>&nbsp;
                                                </button> 
                                                <!-- <button title="Add Item" data-toggle="modal" data-section="12" data-item="28" data-target="#addItemModal" class="btn btn-sm btn-success add_item_modal_btn">
                                                   <b-icon icon="plus-square-fill"></b-icon>&nbsp;
                                                </button> -->
                                            </td> 
                                            <th colspan="2" rowspan="1">{{ section.name }}</th> 
                                            <td class="text-right" style="width: 30px;">
                                            <input type="checkbox" value="28" data-type="developer_1_status" class="item_checkbox"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="section_12_dev_2" role="tabpanel" aria-labelledby="dev_2-tab" class="tab-pane fade ">
                                <table class="table table-sm table-bordered">
                                    <tbody>
                                        <tr>
                                            <td rowspan="1" class="td_bg_normal" style="width: 90px;"></td> 
                                                <th colspan="2" rowspan="1">de2df</th> 
                                                <td class="text-right" style="width: 30px;">
                                                    <input type="checkbox" value="28" data-type="developer_2_status" disabled="disabled" class="item_checkbox">
                                                </td> 
                                                <td class="text-right" style="width: 45px;">
                                                    <i data-toggle="modal" data-item="28" data-target="#commentModal" data-type="developer_2_comment" aria-hidden="true" class="fas fa-comment comment_btn"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> 
                        <hr>
                    </div>
                </div>
    

                <div class="card mt-4">
                    <div class="card-header">
                        <h4 class="d-inline-block">Front End</h4>
                            <button data-toggle="modal" data-target="#BackOrderModal" class="btn btn-sm btn-success text-right check_btn">
                                Change Section Order
                            </button> 
                            <a href="http://127.0.0.1:8000/adminx/projects/check-uncheck/2/Back%20End/1" class="btn btn-info btn-sm float-right mr-2 check_btn">
                                <b-icon icon="check-all"></b-icon> Check All
                            </a> 
                            <a href="" class="btn btn-danger btn-sm float-right mr-2 check_btn">
                                 <b-icon icon="x"></b-icon> Uncheck All
                            </a>
                        </div>

                        <div class="card-body table-responsive" v-for="(front,key) in front_sections" :key="key">
                            <h5 class="d-inline-block">{{ front.name }}</h5> 
                        
                            <button v-b-modal.modalFront data-toggle="modal" data-section="12" data-item="" data-target="#addItemModal" class="btn btn-success btn-sm add_item_modal_btn d-inline-block">
                               <b-icon icon="plus-square-fill"></b-icon>&nbsp; Add Sub Item
                            </button> 
                            <b-modal id="modalFront" title="Add Item Front" v-if="FrontModalShow">
                                <label>
                                    <b>Items &nbsp;<button @click="addSectionItem" class="btn btn-success">
                                        <b-icon icon="plus-square-fill"></b-icon>
                                        </button>
                                    </b>
                                </label>
                                <form action="javascript:void(0)" ref="frontsection_itemform" @submit="sectionItemFrontSubmit(front.id)">
                                    <div class="form-group" v-for="(item,key) in section_items" :key="key">
                                        <div class="input-group">
                                        <input type="text" name="sec_items[]" v-model="item.name" placeholder="Item Name*" required="required" class="form-control m-2"> 
                                            <div class="input-group-append">
                                                <span class="input-group-btn">
                                                    <button type="button" title="Remove Item" class="btn btn-danger input_group_btn remove_item m-2" @click="removeSectionItem(key)"><b-icon icon="x"></b-icon></button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-success mt-2 text-right">Submit</button>
                                </form>
                            </b-modal>
                            <ul id="myTab" role="tablist" class="nav nav-tabs dev_tab mb-2">
                                <li class="nav-item">
                                    <a id="dev_1-tab" data-toggle="tab" href="#section_12_dev_1" role="tab" aria-controls="dev_1" aria-selected="true" class="nav-link active">Dev 1</a>
                                </li>
                                <li class="nav-item">
                                    <a id="dev_2-tab" data-toggle="tab" href="#section_12_dev_2" role="tab" aria-controls="dev_2" aria-selected="true" class="nav-link  disabled">Dev 2</a>
                                </li>
                                <li class="nav-item">
                                    <a id="qa-tab" data-toggle="tab" href="#section_12_qc" role="tab" aria-controls="qc" aria-selected="true" class="nav-link  disabled">QC</a>
                                </li> 
                                 <li class="nav-item">
                                    <a id="qa-tab" data-toggle="tab" href="#section_12_qa" role="tab" aria-controls="qa" aria-selected="true" class="nav-link  disabled">QA</a>
                                </li>
                            </ul>
                            <div id="myTabContent" class="tab-content">
                                <div id="section_12_dev_1" role="tabpanel" aria-labelledby="dev_1-tab" class="tab-pane fade show active">
                                  <table class="table table-sm table-bordered">
                                    <tbody>
                                        <tr class="table-warning" v-for="(section,key) in front.section_items" :key="key">
                                            <td rowspan="1" class="td_bg_normal" style="width: 50px;">
                                                <button v-b-modal.editModal data-toggle="modal" @click="formEdit(section.id)" title="Edit Item" class="btn btn-sm btn-info">
                                                    <b-icon icon="pencil-square"></b-icon>&nbsp;
                                                </button> 
                                                <b-modal hide-footer id="editModal"   title="Edit Item Front" v-if="FrontModalShow">
                                                    <form action="javascript:void(0)" ref="front_edit_form" @submit="FrontEditSubmit(section.id)">
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input type="text" name="sec_items[]" v-model="section.name" placeholder="Item Name*" required="required" class="form-control m-2"> 
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="btn btn-success mt-2 text-right">Submit</button>
                                                    </form>
                                                </b-modal>
                                            </td> 
                                            <th colspan="2" rowspan="1">{{ section.name }}</th> 
                                            <td class="text-right" style="width: 30px;">
                                            <input type="checkbox" value="28" data-type="developer_1_status" class="item_checkbox"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="section_12_dev_2" role="tabpanel" aria-labelledby="dev_2-tab" class="tab-pane fade ">
                                <table class="table table-sm table-bordered">
                                    <tbody>
                                        <tr>
                                            <td rowspan="1" class="td_bg_normal" style="width: 90px;"></td> 
                                            <th colspan="2" rowspan="1">de2df</th> 
                                            <td class="text-right" style="width: 30px;">
                                                <input type="checkbox" value="28" data-type="developer_2_status" disabled="disabled" class="item_checkbox">
                                            </td> 
                                            <td class="text-right" style="width: 45px;">
                                                <i data-toggle="modal" data-item="28" data-target="#commentModal" data-type="developer_2_comment" aria-hidden="true" class="fas fa-comment comment_btn"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> 
                        <hr>
                    </div>
                </div>
            </div>
        </Master>
    </div>
</template>

<script>
    import Master from '../../components/Master.vue'
    import Vue from 'vue'
    import Toaster from 'v-toaster'
    import {  BIcon,BModal } from 'bootstrap-vue'
    import VueAxios from 'vue-axios';
    import axios from 'axios';

    import 'v-toaster/dist/v-toaster.css'
    Vue.use(Toaster, {timeout: 5000})
    Vue.use(VueAxios, axios);
    export default {
        name: 'App',
        components:{
            Master,
            BIcon,
            BModal
        },
        data(){
            return{
                project_details:'',
                back_sections:'',
                front_sections:'',
                items: [{
                    item: ''
                }],
                section_items:[{
                    name:''
                }],
                  BackModalShow:true,
                  FrontModalShow:true,
            }
        },
        mounted(){
            this.showProjectDetails();
        },
        methods:{
            async projectDelete(id){
                if(confirm("Are you sure to delete this Project ?")){
                	this.axios.delete(`http://localhost:8000/api/projects/delete/${id}`).then(response=>{
							if (response.data.status ==='danger') {
								this.$toaster.error(response.data.message);
								this.$router.push({name:"Project"})
							}
							else console.log(response)
						}).catch(error=>{
						console.log(error)
					})
            	}

            },
            async sectionForm(){
                let data = new FormData(this.$refs.section_form);
                    this.axios.post('http://localhost:8000/api/projects/section/create',data)
                        .then(response => {
                            this.$refs.section_form.reset();
                                if (response.data.status ==='success') {
                                    this.$toaster.success(response.data.message);
                                    this.items.splice();
                                }
                                else console.log(response)
                            
                        })
            },
  
            async sectionItemBackSubmit(id){
                let data = new FormData();
                data.append('section_id',id);
                this.section_items.map(item=>data.append('sec_items[]',item.name));

                await axios.post(`http://localhost:8000/api/projects/section-item/create`,data).then(response => {
                    if (response.data.status ==='success') {
                            this.$toaster.success(response.data.message);  
                        if(this.BackModalShow==true){
                            this.BackModalShow=false
                        }
                    }  
                })
            },
            async sectionItemFrontSubmit(id){
                let data = new FormData();
                data.append('section_id',id);
                this.section_items.map(item=>data.append('sec_items[]',item.name));

                await axios.post(`http://localhost:8000/api/projects/section-item/create`,data).then(response => {
                    if (response.data.status ==='success') {
                            this.$toaster.success(response.data.message);  
                        if(this.FrontModalShow==true){
                            this.FrontModalShow=false
                        }
                    }  
                })
            },
            
            async FrontEditSubmit(id){
                alert(id);
            },
            async formEdit(id){
                alert(id);
            },
            async showProjectDetails(){
                await this.axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`).then(response=>{
                    this.project_details = response.data.project; 
                    this.back_sections = response.data.back_sections; 
                    this.front_sections = response.data.front_sections;   
                })
            },
            add_items(){
                this.items.push({ 
                    item: null
                })
            },
            addSectionItem(){
                this.section_items.push({ 
                    name: null
                })

            },
            removeSectionItem(index) {
                this.section_items.splice(index, 1)
            },
            removeItem(index) {
                this.items.splice(index, 1)
            },
        }
    }
</script>
<style>
  .bg_header{
    background:red;
  }
  .check_btn{
    float:right;
  }
  .dev_tab{
    float:right;
  }
</style>