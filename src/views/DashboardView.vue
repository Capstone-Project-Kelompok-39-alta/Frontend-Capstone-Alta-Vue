<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarNav />
      <div class="col-lg-10 col-md-8 col-sm-8 ms-auto">
        <div class="row">
          <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highlight">
              <h3 class="mt-5 ms-5 fw-bold">Dashboard</h3>
            </div>

            <div class="p-2 bd-highlight">
              <img class="img-fluid mt-5" src="../assets/bell_vector.svg" alt="" />
            </div>
            <div class="p-2 bd-highlight">
              <img class="img-fluid mt-5 me-5" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" src="../assets/user_vector.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="row ms-5 mb-5">
          <div class="card-custom d-flex">
            <img class="img-fluid my-auto w-25" src="../assets/material-symbols_paid.svg" alt="" />
            <div class="flex-coloumn">
              <div class="mt-3 ms-3">Paid</div>
              <div class="mt-2 ms-3" style="font-weight: 700">65</div>
            </div>
            <div class="mt-5 ms-3 px-2 pb-4 bg-success my-auto text-white" style="height: 20px; border-radius: 16px">12 <img class="img-fluid my-auto" src="../assets/bi_arrow-down.svg" alt="" /></div>
          </div>
          <div class="card-custom d-flex">
            <img class="img-fluid my-auto w-25" src="../assets/bi_clock-fill.svg" alt="" />
            <div class="flex-coloumn">
              <div class="mt-3 ms-3">Unpaid</div>
              <div class="mt-2 ms-3" style="font-weight: 700">65</div>
            </div>
            <div class="mt-5 ms-2 px-2 pb-4 bg-success my-auto text-white" style="height: 20px; border-radius: 16px">12 <img class="img-fluid my-auto" src="../assets/bi_arrow-down.svg" alt="" /></div>
          </div>
          <div class="card-custom d-flex">
            <img class="img-fluid my-auto w-25" src="../assets/user_vector.svg" alt="" />
            <div class="flex-coloumn">
              <div class="mt-3 ms-3">Client</div>
              <div class="mt-2 ms-3" style="font-weight: 700">65</div>
            </div>
            <div class="mt-5 ms-3 px-2 pb-4 bg-success my-auto text-white" style="height: 20px; border-radius: 16px">12 <img class="img-fluid my-auto" src="../assets/bi_arrow-down.svg" alt="" /></div>
          </div>
        </div>
        <div class="bg-banner d-flex mb-5 ms-5 me-5">
          <div class="flex-coloumn my-auto">
            <div class="w-50 ms-5" style="font-size: 48px; color: #13532d; font-weight: 700">Make Your Invoice with Invoinesia</div>
            <div class="vstack">
              <form>
                <label for="inputFile" style="border-radius: 32px" class="ms-5 btn btn-primary btn-lg mt-2">
                  <input type="file" id="inputFile" accept=".csv" @change="importFile" />
                  Upload Your File
                </label>
              </form>
            </div>
          </div>
        </div>
        <div class="row ms-5 tutorial">
          <p class="fw-bold tutorial-header">Silakan ikuti langkah-langkah berikut untuk mengunggah data invoice Anda</p>
          <ol class="ps-4 tutorial-point">
            <li>Pastikan Anda sudah memiliki data Produk dan Client</li>
            <li>Pastikan File yang ingin diunggah memiliki ekstensi .csv dan ukuran tidak lebih dari 1 MB</li>
            <li>Pastikan data Anda sudah memiliki kolom No. Invoice, Kode Client, Tanggal Jatuh Tempo, Nama Client, Nama Produk, Harga Produk</li>
            <li>Format tanggal DD/MM/YYYY</li>
          </ol>
        </div>

        <!-- Modal -->
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
                  <div class="low-profile" v-for="(user, index) in user" :key="index">
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
                        <button class="btn btn-secondary mx-auto text-dark fw-bold text-start" data-bs-dismiss="modal" style="height: 70px; width: 90%" type="button" @click="doLogOut()">Sign out</button>
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
    return {};
  },
  methods: {
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
    getInvoices() {
      this.$store.dispatch("invoice/fetchListInvoice");
    },
    getUser() {
      this.$store.dispatch("user/checkUser");
    },
    async importFile(e) {
      let fileName = e.target.files[0];
      console.log(e);
      console.log(fileName);
      let csv = new FormData();
      csv.append("csv_file", fileName);
      const result = await this.$store.dispatch("invoice/inputInvoice", {
        csv_file: csv,
      });
      if (result) {
        alert("Input File Berhasil");
      } else {
        alert("Input File Gagal", this.errorMsg);
      }
    },
  },
  mounted() {
    this.getInvoices();
    this.getUser();
  },
  computed: {
    jwtToken() {
      return this.$store.state.auth.token;
    },
    user() {
      return this.$store.state.user.user;
    },
  },
};
</script>
<style scoped>
.tutorial {
  color: #808080;
}
.tutorial-header {
  font-size: 24px;
}
.tutorial-point {
  font-size: 20px;
}
input[type="file"] {
  display: none;
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

.data_cont {
  height: 200vh;
}
.card-custom {
  width: 191px;
  height: 95px;
  border-radius: 32px;
  background: #ffffff;
  border: 1px solid #25a559;
  margin-right: 32px;
}
</style>
