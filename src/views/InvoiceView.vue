<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarNav />
      <div class="col-lg-10 col-md-8 col-sm-8 d-flex">
        <div class="my-auto mx-auto w-50">
          <p class="text-dark" style="font-size: 32px">Sign in to access Invoice</p>
          <form>
            <!-- Email input -->
            <div class="form-floating mb-4">
              <input style="border-radius: 32px" type="number" id="inputNip" class="form-control" placeholder="Nomer Induk Pegawai" />
              <label for="inputNip">Nomer Induk Pegawai</label>
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

            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="d-flex justify-content-end">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <!-- Submit button -->
            <div class="d-grid gap-2 col-12 mx-auto">
              <button style="border-radius: 32px" class="btn btn-primary btn-lg" type="button">Sign In</button>
              <div class="mb-1" style="width: 100%; height: 13px; border-bottom: 1px solid black; text-align: center">
                <span style="font-size: 16px; background: #ffffff; padding: 0 10px"> Or </span>
              </div>
              <button class="btn btn-secondary text-dark btn-lg" style="border-radius: 32px" type="button">Register</button>
            </div>
          </form>
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
