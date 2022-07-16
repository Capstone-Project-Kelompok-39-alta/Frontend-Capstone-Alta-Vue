<template>
  <div class="container-fluid">
    <div class="row min-vh-100">
      <div class="col-4 col-sm-3 d-flex">
        <div class="my-auto">
          <p class="text-light mt-6 mx-auto text-center" style="width: 140px; font-size: 32px">Welcome Back</p>
          <img class="img-fluid" src="../assets/login_welcome.png" alt="" />
        </div>
      </div>
      <div class="col-8 col-sm-9 d-flex">
        <div class="my-auto mx-auto w-50">
          <p class="text-dark text-center" style="font-size: 32px">Sign in to access Invoice</p>
          <form>
            <!-- Email input -->
            <div class="form-floating mb-4">
              <input style="border-radius: 32px" type="number" id="inputNip" v-model.number="id_pegawai" class="form-control" placeholder="Nomer Induk Pegawai" required />
              <label for="inputNip">Nomer Induk Pegawai</label>
            </div>

            <!-- Password input -->
            <div class="form-floating input-group mb-4">
              <input style="border-top-left-radius: 32px; border-bottom-left-radius: 32px" v-if="showPassword" type="text" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required />
              <input style="border-top-left-radius: 32px; border-bottom-left-radius: 32px" v-else type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required />
              <label for="inputPassword">Password</label>
              <div style="border-top-right-radius: 32px; border-bottom-right-radius: 32px; background: #ffffff" class="input-group-text">
                <i class="bi" :class="{ 'bi-eye-slash-fill': showPassword, 'bi-eye-fill': !showPassword }" @click="toggleShow"></i>
              </div>
            </div>

            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="d-flex justify-content-end">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <!-- Submit button -->
            <div class="d-grid gap-2 col-12 mx-auto">
              <button v-if="isLoading == false" style="border-radius: 32px" class="btn btn-primary btn-lg" type="button" @click="doLogin()">Sign In</button>
              <button v-if="isLoading == true" style="border-radius: 32px" class="btn btn-primary btn-lg" type="button">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
              <div class="mb-1" style="width: 100%; height: 13px; border-bottom: 1px solid black; text-align: center">
                <span style="font-size: 16px; background: #ffffff; padding: 0 10px"> Or </span>
              </div>
              <button class="btn btn-secondary text-dark btn-lg" style="border-radius: 32px" type="button" @click="toRegister()">Register</button>
            </div>
          </form>
          <div class="mt-2 fs-5">
            <p v-if="isStatus == 1" class="text-center text-login" style="color: #25a559">Login Berhasil</p>
            <p v-if="isStatus == 2" class="text-center text-login text-danger">Login Gagal</p>
            <p v-if="isStatus == 3" class="text-center text-login text-danger">Isi Field Dengan Benar</p>
          </div>
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
.text-login {
  font-weight: 600;
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
      password: "",
      id_pegawai: "",
      isStatus: 0,
      isLoading: false,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    // testLogin() {
    //   if (this.id_pegawai === "" && this.password === "") {
    //     alert("harus disini setidaknya 1");
    //   } else {
    //     alert("selamat masuk");
    //     window.location.reload();
    //   }
    // },
    async doLogin() {
      this.isLoading = true;
      if (this.id_pegawai === "" && this.password === "") {
        this.isStatus = 3;
        this.isLoading = false;
      } else {
        const result = await this.$store.dispatch("auth/login", {
          id_pegawai: this.id_pegawai,
          password: this.password,
        });
        if (result) {
          this.isStatus = 1;

          setTimeout(this.toDashboard, 3000);
        } else {
          this.isLoading = false;
          this.isStatus = 2;
        }
      }
    },
    toDashboard() {
      this.$router.push("/dashboard");
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
