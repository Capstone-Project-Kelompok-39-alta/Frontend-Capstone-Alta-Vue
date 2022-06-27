<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarNav />
      <div class="col-lg-10 col-md-8 col-sm-8 ms-auto">
        <div class="row">
          <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highlight">
              <h3 class="mt-5 ms-5">Transaction</h3>
            </div>

            <div class="p-2 bd-highlight">
              <img class="img-fluid mt-5" src="../assets/bell_vector.svg" alt="" />
            </div>
            <div class="p-2 bd-highlight">
              <img class="img-fluid mt-5 me-5" src="../assets/user_vector.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="row ms-5 mb-5">
          <div class="card-custom d-flex">
            <div class="flex-coloumn">
              <div class="mt-3 ms-3">Last Day</div>
              <div class="mt-2 ms-3" style="font-weight: 700">65</div>
            </div>
          </div>
          <div class="card-custom d-flex">
            <img class="img-fluid my-auto w-25" src="../assets/material-symbols_paid.svg" alt="" />
            <div class="flex-coloumn">
              <div class="mt-3 ms-3">Transaction</div>
              <div class="mt-2 ms-3" style="font-weight: 700">65</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highlight">
              <p class="ms-5" style="font-size: 24px; font-weight: 700">Latest Payment</p>
            </div>
          </div>
        </div>
        <div class="row">
          <table class="table ms-5" style="width: 1160px">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">No</th>
                <th scope="col">Date</th>
                <th scope="col">Client</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>PQ-1124D</td>
                <td>08/05/22</td>
                <td>Nama Client</td>
                <td>Telkom</td>
                <td>$242,55</td> 
                <td><button class="btn btn-secondary">Detail</button></td>
              </tr>
            </tbody>
          </table>
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
.btn-danger {
  background: #d32f2f !important;
  color: #ffffff;
  border-color: #d32f2f !important;
}
.btn-secondary {
  background: #fff !important;
  color: #25a559;
  border-color: #25a559 !important;
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
.card-custom {
  width: 191px;
  height: 95px;
  border-radius: 32px;
  background: #ffffff;
  border: 1px solid #25a559;
  margin-right: 32px;
}
</style>