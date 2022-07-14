<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarNav />
      <div class="col-lg-10 col-md-8 col-sm-8 ms-auto">
        <div class="row">
          <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highlight">
              <h3 class="mt-5 ms-5 fw-bold">Transaction</h3>
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
              <p class="ms-5" style="font-size: 24px; font-weight: 700">All Payment</p>
            </div>
          </div>
        </div>
        <div class="row ms-5 me-5">
          <table class="table" id="datatable">
            <thead>
              <tr>
                <th scope="col">No Client</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Payment Date</th>
                <th scope="col">No. Reference</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PQ-1124D</td>
                <td>08/05/22</td>
                <td>Nama Client</td>
                <td>$242,55</td>
                <td>PDAM</td>
                <td>098765</td>
                <td><button class="btn btn-secondary ms-5 px-3">Detail</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- modal -->
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
import $ from "jquery";
export default {
  components: {
    SidebarNav,
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    getUser() {
      this.$store.dispatch("user/checkUser");
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
  },
  mounted() {
    this.getUser();
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
};
</script>
<style scoped>
select {
  border: none;
}
.card-dropdown {
  width: 219px;
  height: 20px;
  font-size: 24px;
}
.card-custom {
  width: 191px;
  height: 95px;
  border-radius: 32px;
  background: #ffffff;

  margin-right: 32px;
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
</style>
