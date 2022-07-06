<template>
  <div class="container-fluid">
    <div class="row min-vh-100">
      <div class="col-4 col-sm-3 d-flex">
        <div class="my-auto">
          <p class="text-light mt-6 mx-auto text-center" style="width: 140px; font-size: 32px">Create Account!</p>
          <img class="img-fluid" src="../assets/register-welcome.png" alt="" />
        </div>
      </div>
      <div class="col-8 col-sm-9 d-flex">
        <div class="my-auto mx-auto w-50">
          <p class="text-dark text-center" style="font-size: 32px">Get Your Free Account!</p>
          <br />
          <form>
            <!-- Name input -->
            <div class="form-floating mb-4">
              <input style="border-radius: 32px" v-model="name" type="text" id="inputNama" class="form-control" placeholder="Nama Lengkap" />
              <label for="inputNama">Nama Lengkap</label>
            </div>
            <!-- Id Input -->
            <div class="form-floating mb-4">
              <input style="border-radius: 32px" v-model.number="id_pegawai" type="number" id="inputNip" class="form-control" placeholder="Nomer Induk Pegawai" />
              <label for="inputNip">Nomor Induk Pegawai</label>
            </div>
            <!-- Email input -->
            <div class="form-floating mb-4">
              <input style="border-radius: 32px" v-model="email" type="text" id="inputEmail" class="form-control" placeholder="Email" />
              <label for="inputEmail">Email</label>
            </div>

            <!-- Password input -->
            <div class="form-floating input-group mb-4">
              <input style="border-top-left-radius: 32px; border-bottom-left-radius: 32px" v-if="showPassword" type="text" id="inputPassword" class="form-control" placeholder="Password" v-model="password" />
              <input style="border-top-left-radius: 32px; border-bottom-left-radius: 32px" v-else type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" />
              <label for="inputPassword">Password</label>
              <div style="border-top-right-radius: 32px; border-bottom-right-radius: 32px; background: #ffffff" class="input-group-text">
                <i class="bi" :class="{ 'bi-eye-slash-fill': showPassword, 'bi-eye-fill': !showPassword }" @click="toggleShow"></i>
              </div>
            </div>

            <!-- Submit button -->
            <div class="d-grid gap-2 col-12 mx-auto">
              <button style="border-radius: 32px" class="btn btn-primary btn-lg" type="button" @click="doRegister()">Register</button>
              <div class="mb-1" style="width: 100%; height: 13px; border-bottom: 1px solid black; text-align: center">
                <span style="font-size: 16px; background: #ffffff; padding: 0 10px"> Or </span>
              </div>
              <button class="btn btn-secondary text-dark btn-lg" style="border-radius: 32px" type="button" @click="toLogin()">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  /* height: 100%; */
}

.col-4 {
  background: #25a559;
}
.btn-primary {
  background: #25a559 !important;
  color: #fff;
  border-color: #25a559 !important;
}
.btn-secondary {
  background: #fff !important;
  color: #25a559;
  border-color: #25a559 !important;
}
</style>
<script>
export default {
  data() {
    return {
      showPassword: false,
      password: null,
      name: "",
      email: "",
      id_pegawai: null,
      errorText: "",
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    errorMsg() {
      return this.$store.state.auth.info;
    },
  },
  methods: {
    toLogin() {
      this.$router.push("/");
    },
    async doRegister() {
      const result = await this.$store.dispatch("auth/register", {
        name: this.name,
        email: this.email,
        password: this.password,
        id_pegawai: this.id_pegawai,
      });
      if (result) {
        alert("register berhasil");
        this.$router.push("/");
      } else {
        alert("Regist gagal", this.errorMsg);
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
