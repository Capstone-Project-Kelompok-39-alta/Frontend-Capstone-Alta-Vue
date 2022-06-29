<template>
  <div class="col-lg-2 col-md-4 col-sm-4 min-vh-100 text-center position-fixed">
    <div class="mt-6 mx-auto">
      <ul class="text-start">
        <li class="mb-4">
          <router-link style="text-decoration: none" to="/dashboard"><i class="bi bi-house-door-fill"></i> Dashboard</router-link>
        </li>
        <li class="mb-4">
          <router-link style="text-decoration: none" to="/invoice"><i class="bi bi-receipt"></i> Invoices</router-link>
        </li>
        <li class="mb-4">
          <router-link style="text-decoration: none" to="/clients"><i class="bi bi-people-fill"></i> Clients</router-link>
        </li>
        <li class="mb-4">
          <router-link style="text-decoration: none" to="/transaction"><i class="bi bi-list-ul"></i> Transaction</router-link>
        </li>
        <li class="mb-4">
          <router-link style="text-decoration: none" to="/history"><i class="bi bi-chat-dots-fill"></i> History Email</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.cell {
  overflow: visible;
}
.col-lg-2 {
  background: #f9f9f9;
}
.mt-6 {
  margin-top: 100px;
}
ul {
  list-style-type: none;
}
li a {
  color: #aaaaaa;
}

li a.router-link-exact-active {
  background: #25a559;
  border-radius: 32px;
  padding-left: 10px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
}
</style>
