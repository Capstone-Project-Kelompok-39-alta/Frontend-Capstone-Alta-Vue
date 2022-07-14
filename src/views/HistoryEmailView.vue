<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarNav />
      <div class="col-lg-10 col-md-8 col-sm-8 ms-auto">
        <div class="row">
          <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highlight">
              <h3 class="mt-5 ms-5 fw-bold">History Email</h3>
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
          <div class="d-flex bd-highlight">
            <div class="me-auto p-2 bd-highlight">
              <p class="ms-5" style="font-size: 24px; font-weight: 700">All Email</p>
            </div>
          </div>
        </div>
        <div class="row ms-5 me-5">
          <table class="table" id="datatable">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Subject Email</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(list, index) in history" :key="index">
                <td>{{ list.date }}</td>
                <td>{{ list.name }}</td>
                <td>{{ list.email }}</td>
                <td>{{ list.subject }}</td>
                <td>{{ list.status }}</td>
                <td><button class="btn btn-danger ms-5" id="delete" style="border-radius: 16px" @click="hapus(index)">Delete</button></td>
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
    return {
      isVisible: true,

      history: [
        {
          date: "14/07/22",
          name: "Rolando Brilianto",
          email: "brilroland@gmail.com",
          subject: "Invoice",
          status: "Failed",
        },
        {
          date: "14/07/22",
          name: "Rolandi Brilianto",
          email: "brilroland@gmail.com",
          subject: "Invoice",
          status: "Succesful",
        },
        {
          date: "14/07/22",
          name: "Rolande Brilianto",
          email: "brilroland@gmail.com",
          subject: "Invoice",
          status: "Failed",
        },
        {
          date: "14/07/22",
          name: "Rolandu Brilianto",
          email: "brilroland@gmail.com",
          subject: "Invoice",
          status: "Succesful",
        },
        {
          date: "14/07/22",
          name: "Rolanda Brilianto",
          email: "brilroland@gmail.com",
          subject: "Invoice",
          status: "Failed",
        },
        {
          date: "14/07/22",
          name: "Rolands Brilianto",
          email: "brilroland@gmail.com",
          subject: "Invoice",
          status: "Succesful",
        },
        {
          date: "14/07/22",
          name: "Rolandv Brilianto",
          email: "brilroland@gmail.com",
          subject: "Invoice",
          status: "Failed",
        },
        {
          date: "14/07/22",
          name: "Rolandty Brilianto",
          email: "brilroland@gmail.com",
          subject: "Invoice",
          status: "Succesful",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    hapus(index) {
      this.history.splice(index, 1);
    },
    manageAccount() {
      this.$router.push("/account");
    },
    async doLogOut() {
      const result = await this.$store.dispatch("auth/logout");

      if (result) {
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
    $("#datatable").DataTable({
      lengthMenu: [
        [5, 10, 15],
        [5, 10, 15],
      ],
    });
  },
};
</script>
<style scoped>
.card-dropdown {
  width: 219px;

  font-size: 24px;
}
input {
  background: #f1f1f1;
  border: none;
  border-radius: 16px !important;
  height: 88px;
}
.datepicker {
  padding-left: 10px;
}

.inputHistory {
  padding: 10px;
}
.btn-secondary {
  background: #fff !important;
  color: #25a559;
  border-color: #25a559 !important;
  border-radius: 32px;
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
</style>
