<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarNav />
      <div class="col-lg-10 col-md-8 col-sm-8 ms-auto">
        <div class="row">
          <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highlight">
              <h3 class="mt-5 ms-5"></h3>
            </div>
            <div class="p-2 bd-highlight">
              <img class="img-fluid mt-5" src="../assets/bell_vector.svg" alt="" />
            </div>
            <div class="p-2 bd-highlight">
              <img class="img-fluid mt-5 me-5" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" src="../assets/user_vector.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="card-custom d-flex mx-auto">
            <img class="img-fluid my-auto" src="../assets/ant-design_info-circle-filled.svg" alt="" />
            <div class="flex-coloumn">
              <div class="mt-3 ms-3 fw-bold">Nomor Induk Pegawai</div>
              <div class="mt-2 ms-3">You can sign in to your account using NIP</div>
            </div>
          </div>
        </div>
        <div>
          <div class="row ms-1 mb-2">
            <div class="fw-bold user-profile d-flex mx-auto" style="font-size: 32px">User Profile</div>
          </div>
          <div class="row mb-4">
            <div class="line-horizontal d-flex mx-auto"></div>
          </div>
          <div class="row justify-content-center">
            <div class="col-5 fw-bold">Nama</div>
            <div class="col-5 fw-bold">Email</div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-5">{{ user.name }}</div>
            <div class="col-5">{{ user.email }}</div>
          </div>

          <div class="row justify-content-center">
            <div class="col-5 fw-bold">Nomor Induk Pegawai</div>
            <div class="col-5 fw-bold">Password</div>
          </div>
          <div class="row justify-content-center">
            <div class="col-5">{{ user.id_pegawai }}</div>
            <div class="col-5">{{ truncate(user.password, 0) }}</div>
          </div>
          <div class="row">
            <div class="d-flex bd-highlight mb-3">
              <div class="ms-auto bd-highlight me-5">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal2" style="width: 150px" class="btn btn-primary radius32 me-3" @click="getDetail(user)">Edit Profile</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal3" style="width: 150px" class="btn btn-primary radius32" @click="getDetail(user)">Edit Password</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal Edit Profile-->
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title fw-bold" id="exampleModalLabel">User Profile</h5>
              </div>
              <div class="modal-body">
                <div class="card-modal d-flex mx-auto mb-5">
                  <img class="img-fluid my-auto ms-3" src="../assets/ant-design_info-circle-filled-orange.svg" alt="" />
                  <div class="flex-coloumn d-flex">
                    <div class="my-auto ms-3" style="font-size: 18px">Updating user information will <span class="fw-bold">change your verification status.</span></div>
                  </div>
                </div>
                <div class="d-flex">
                  <form class="mx-auto">
                    <div class="mb-3">
                      <label for="name" class="form-label fw-bold">Nama</label>
                      <input type="text" v-model="name" class="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                      <label for="nip" class="form-label fw-bold">Nomer Induk Pegawai</label>
                      <input type="number" v-model="nip" class="form-control" id="nip" aria-describedby="emailHelp" disabled />
                    </div>
                    <div class="mb-3">
                      <label for="inputEmail" class="form-label fw-bold">Email</label>
                      <input type="email" v-model="email" class="form-control" id="inputEmail" />
                    </div>
                    <div class="mb-3">
                      <label for="passwordLama" class="form-label fw-bold">Password</label>
                      <input type="password" v-model="passwordBefore" class="form-control" id="passwordLama" />
                    </div>

                    <div class="d-flex mb-5 mt-4">
                      <div class="mx-auto">
                        <button type="button" class="btn btn-secondary me-5" style="width: 205px" data-bs-dismiss="modal">Cancel</button
                        ><button type="button" class="btn btn-primary" style="width: 205px; border-radius: 32px" @click="editProfile(user)">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal edit password -->
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title fw-bold" id="exampleModalLabel">User Profile</h5>
              </div>
              <div class="modal-body">
                <div class="card-modal d-flex mx-auto mb-5">
                  <img class="img-fluid my-auto ms-3" src="../assets/ant-design_info-circle-filled-orange.svg" alt="" />
                  <div class="flex-coloumn d-flex">
                    <div class="my-auto ms-3" style="font-size: 18px">Updating user information will <span class="fw-bold">change your verification status.</span></div>
                  </div>
                </div>
                <div class="d-flex">
                  <form class="mx-auto">
                    <div class="mb-3">
                      <label for="passwordLama" class="form-label fw-bold">Password Lama</label>
                      <input type="password" v-model="passwordBefore" class="form-control" id="passwordLama" />
                    </div>

                    <div class="mb-3">
                      <label for="passwordLama" class="form-label fw-bold">Password Baru</label>
                      <input type="password" v-model="passwordAfter" class="form-control" id="passwordLama" />
                    </div>

                    <div class="mb-3">
                      <label for="passwordLama" class="form-label fw-bold">Password Konfirmasi</label>
                      <input type="password" v-model="passwordConfirm" class="form-control" id="passwordLama" />
                    </div>

                    <div class="d-flex mb-5 mt-4">
                      <div class="mx-auto">
                        <button type="button" class="btn btn-secondary me-5" style="width: 205px" data-bs-dismiss="modal">Cancel</button><button type="button" class="btn btn-primary" style="width: 205px; border-radius: 32px">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal User Detail-->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="container-fluid profile">
                  <div class="row">
                    <div class="top-profile">
                      <div class="d-flex"><div class="mx-auto fw-bold" style="font-size: 32px; margin-top: 80px">Profile</div></div>

                      <div class="d-flex flex-coloumn">
                        <img class="mx-auto" style="margin-top: 0px" src="../assets/carbon_user-avatar-filled.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="low-profile">
                    <div class="row">
                      <div class="text-center fw-bold" style="font-size: 24px">{{ user.name }}</div>
                    </div>
                    <div class="row">
                      <div class="text-center" style="font-size: 18px; font-weight: 400">{{ user.email }}</div>
                    </div>
                    <div class="row mt-4">
                      <div class="d-flex">
                        <button class="btn btn-secondary mx-auto text-dark fw-bold" data-bs-dismiss="modal" @click="manageAccount()" style="height: 70px; width: 90%" type="button">
                          <div class="row">
                            <div class="col-10 text-start">Manage Your Account</div>
                            <div class="col-2 text-end text-black"><i class="bi bi-chevron-right"></i></div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div class="row mt-4 mb-5">
                      <div class="d-flex">
                        <button class="btn btn-secondary mx-auto text-dark fw-bold text-start" style="height: 70px; width: 90%" type="button" data-bs-dismiss="modal" @click="doLogOut()">Sign out</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarNav from "@/components/SidebarNav.vue";
export default {
  components: {
    SidebarNav,
  },
  data() {
    return {
      name: "",
      nip: "",
      id: "",
      email: "",
      passwordBefore: "",
      passwordAfter: "",
      passwordConfirm: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    async editProfile() {
      const result = await this.$store.dispatch("user/changeUser", {
        name: this.name,
        email: this.email,
        password: this.passwordBefore,
        id_pegawai: this.id_pegawai,
        id: this.id,
      });
      if (result) {
        alert("data berhasil di ubah");
        window.location.reload();
      } else {
        alert("data gagal diubah");
      }
    },

    getDetail(user) {
      console.log(user);
      this.name = user.name;
      this.nip = user.id_pegawai;
      this.email = user.email;
      this.id = user.id;
    },
    truncate(str, n) {
      return str.length > n ? str.substr(0, n - 1) + `******` : str;
    },
    manageAccount() {
      this.$router.push("/account");
    },
    async doLogOut() {
      const result = await this.$store.dispatch("auth/logout");

      if (result) {
        alert("Logout Sukses");
        this.$router.push("/");
      } else {
        this.errorText = this.$store.state.auth.info;
      }
    },
    getUser() {
      this.$store.dispatch("user/checkUser");
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style scoped>
.modal-size-custom {
  width: 900px !important;
}
input {
  border: none;
  border-bottom: 1px solid #000000;
}
form {
  width: 90%;
}
.radius32 {
  border-radius: 32px;
  width: 88px;
}
.line-horizontal {
  height: 1px;
  background-color: #25a559;
  width: 90%;
}
.img-fluid {
  max-width: 100%;
  height: auto !important;
}
.profile {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.modal-body {
  margin: 0;
  padding: 0;
}
.low-profile {
  margin-top: 60px;
}
.top-profile {
  height: 196px;
  background-color: #f1f1f1;
  width: 100% !important;
}
.btn-danger {
  background: #d32f2f !important;
  color: #ffffff;
  border-color: #d32f2f !important;
}
.btn-secondary {
  background: #fff !important;
  color: #25a559;
  border-color: #25a559 !important;
  border-radius: 32px;
}
.btn-secondary:hover {
  color: #25a559 !important;
}
.btn-primary {
  background: #25a559 !important;
  color: #fff;
  border-color: #25a559 !important;
}
.bg-banner {
  background: url(../assets/card-black.svg), #f1f1f1;
  height: 430px;
  border-radius: 32px;
}
.cell {
  overflow: auto;
}
h3 {
  font-weight: 700;
}
.data_cont {
  height: 200vh;
}
.user-profile {
  width: 90%;
}
.card-custom {
  width: 90%;
  height: 95px;
  border-radius: 32px;
  border: 2px solid #25a559;
  background: #f9f9f9;
}
.card-modal {
  border-radius: 32px;
  border: 2px solid #f57c00;
  background: #fff6e9;
  width: 90%;
  height: 80px;
}
</style>
