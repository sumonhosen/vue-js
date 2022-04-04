  <template>
    <div class="login-body">
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4">
        <b-card class="card_body">
        <div class="m-2">
          <form action="javascript:void(0)" ref="login_form" @submit="loginForm" method="POST" enctype="multipart/form-data">
            <h3>Sign In</h3>
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control" name="email" required/>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" required />
              </div>
              <div class="form-group mt-1">
                  <b-button variant="outline-success" type="submit">Sign In</b-button>
              </div>
            </form>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
 import {   BRow, BCol, BButton,BCard } from 'bootstrap-vue'
    export default {
      name: 'Login',
      components: {
        BRow,
        BCol,
        BButton,
        BCard
      },
      data() {
          return {
              log_info: {
                  username: "",
                  password: ""
              }
          }
      },
        methods: {
            loginForm() {
                let data = new FormData(this.$refs.login_form);
                console.log(data);
                console.log(12);
            }
        }
    }
</script>
<style>
  .login-body{
    background:#315a47;
    height:650px;
  }
  .card_body{
    margin-top:50px;
  }

</style>