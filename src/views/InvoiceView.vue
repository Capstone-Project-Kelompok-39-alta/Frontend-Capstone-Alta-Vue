<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarNav />
      <div class="col-lg-10 col-md-8 col-sm-8 ms-auto">
        <div class="row">
          <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highlight">
              <h3 class="mt-5 ms-5">Invoice</h3>
            </div>

            <div class="p-2 bd-highlight">
              <img class="img-fluid mt-5" src="../assets/bell_vector.svg" alt="" />
            </div>
            <div class="p-2 bd-highlight">
              <img class="img-fluid mt-5 me-5" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" src="../assets/user_vector.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highlight">
              <p class="ms-5" style="font-size: 24px; font-weight: 700">All Invoice</p>
            </div>
          </div>
        </div>
        <div class="row ms-5 me-5">
          <table class="table" id="datatable">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">No Invoice</th>
                <th scope="col">Due Date</th>
                <th scope="col">Client Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(list, index) in listInvoices" :key="index">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ list.id }}</td>
                <td>{{ list.due_date }}</td>
                <td>{{ list.buyer_name }}</td>
                <td>{{ truncate(list.buyer_email, 5) }}</td>
                <td>{{ list.buyer_phone }}</td>
                <td>{{ list.total }}</td>
                <td>
                  <button class="btn btn-secondary" style="cursor: pointer">Detail</button>
                  <button class="btn btn-primary" style="border-radius: 32px" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="getDetail(list)">Send</button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- modal send email -->
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header d-flex header-email">
                  <h5 class="modal-title fw-bold mx-auto text-white" id="exampleModalLabel">Send Email</h5>
                </div>
                <div class="modal-body">
                  <div class="container-fluid profile">
                    <div class="d-flex">
                      <form class="mx-auto">
                        <div class="mb-3">
                          <label for="name" class="form-label fw-bold">To</label>
                          <input type="text" class="form-control" id="name" v-model="email" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="nip" class="form-label fw-bold">Subject</label>
                          <input type="text" class="form-control" id="nip" v-model="subject" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <label for="inputEmail" class="form-label fw-bold">Email</label>
                          <textarea type="text" class="form-control" id="inputEmail" rows="10" v-model="isi" />
                        </div>

                        <div class="d-flex mb-5 mt-4">
                          <div class="mx-auto">
                            <button type="button" class="btn btn-secondary me-5" style="width: 205px" data-bs-dismiss="modal">Cancel</button
                            ><button v-if="isLoading == false" type="button" class="btn btn-primary" style="width: 205px; border-radius: 32px" @click="sendEmail()">Send</button>
                            <button v-if="isLoading == true" type="button" class="btn btn-primary" style="width: 205px; border-radius: 32px">
                              <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- modal profil -->
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
                        <div class="text-center fw-bold" style="font-size: 24px">Kelompok 39</div>
                      </div>
                      <div class="row"><div class="text-center" style="font-size: 18px; font-weight: 400">Kelompok39@gmail.com</div></div>
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
  </div>
</template>
<script>
import SidebarNav from "@/components/SidebarNav.vue";
import $ from "jquery";
export default {
  components: {
    SidebarNav,
  },
  data() {
    return {
      id: "",
      name: "",
      email: "",
      subject: "Invoice Email",
      total: "",
      isi: "",
      isLoading: false,
    };
  },
  computed: {
    listInvoices() {
      return this.$store.state.invoice.lists;
    },

    errorMessage() {
      if (this.$store.state.invoice.error !== "") {
        return true;
      }
      return false;
    },
  },
  methods: {
    truncate(str, n) {
      return str.length > n ? str.substr(0, n - 1) + `...` : str;
    },
    getDetail(list) {
      this.id = list.id;
      this.email = list.buyer_email;
      this.total = list.total;
      let isiEmail = `Kepada Yth, \nBapak/Ibu Abang Agus\nBerikut terlampir Invoice #PQ-1124D sebesar Rp ${this.total}

                    No. Invoice : PQ-1124D
                    Jatuh Tempo : 27/05/22
                    Jumlah      : Rp. ${this.total}
                    No. Telp    : 02123456789\n\nMohon segera lakukan pembayaran sebelum tanggal jatuh tempo.\nJika ada pertanyaan, silahkan hubungi customer service kami.\nTerima kasih atas kepercayaan Anda terhadap kami.\n\nSalam Hormat,\nInvoinesia`;
      this.isi = isiEmail;
      console.log(isiEmail);
      console.log(list);
      console.log(this.isiEmail);
    },

    async sendEmail() {
      this.isLoading = true;
      const result = await this.$store.dispatch("email/sendEmail", {
        to: this.email,
        subject: this.subject,
        body: this.isi,
      });

      if (result) {
        alert("Email Berhasil terkirim");
      } else {
        alert("Email tidak terkirim");
      }
      this.isLoading = false;
    },
    manageAccount() {
      this.$router.push("/account");
    },
    getInvoices() {
      this.$store.dispatch("invoice/fetchListInvoice");
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
  },
  mounted() {
    this.getInvoices();
    $("#datatable").DataTable({
      lengthMenu: [
        [5, 10, 15],
        [5, 10, 15],
      ],
      // columnDefs: [
      //   {
      //     targets: ,
      //     render: $.fn.dataTable.render.ellipsis(17, true),
      //   },
      // ],
    });
  },
  created() {},
};
</script>
<style scoped>
.header-email {
  background: #25a559;
  height: 135px;
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
.btn-secondary:not(:hover) {
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
.card-custom {
  width: 191px;
  height: 95px;
  border-radius: 32px;
  background: #ffffff;
  border: 1px solid #25a559;
  margin-right: 32px;
}
</style>
