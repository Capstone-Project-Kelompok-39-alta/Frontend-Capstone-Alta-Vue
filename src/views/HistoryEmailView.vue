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
        <div class="row ms-5 mb-5 d-flex">
          <div class="card-dropdown fw-bold">
            <div>Date</div>

            <input class="datepicker" v-model="tanggal" id="date" type="date" placeholder="Tanggal" required />
          </div>
          <div class="card-dropdown fw-bold ms-3">
            <div>To</div>

            <input type="text" class="inputHistory" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="d-flex bd-highlight">
            <div class="me-auto p-2 bd-highlight">
              <p class="ms-5" style="font-size: 24px; font-weight: 700">All Email</p>
            </div>
          </div>
        </div>
        <div class="row">
          <table class="table ms-5" style="width: 90%">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Date</th>
                <th scope="col">Client</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PQ-1124D</td>
                <td>08/05/22</td>
                <td>Nama Client</td>
                <td>$242,55</td>
                <td>PDAM <button class="btn btn-secondary ms-5">Detail</button></td>
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
                        <button class="btn btn-secondary mx-auto text-dark fw-bold text-start" data-bs-dismiss="modal" style="height: 70px; width: 90%" type="button">Sign out</button>
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
</style>
