<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Cook-n-Shop</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-2 mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <router-link class="nav-link" to="/plan">Plan</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" to="/recipes">Recipes</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="/grocery-list">Grocery List</a>
          </li>
          <li v-if="auth.isSignIn.value" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link class="dropdown-item" to="/setting"
                  >Setting</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button
                  class="button btn-danger"
                  tabindex="-1"
                  @click="auth.signOut"
                >
                  Log Out
                </button>
                >
              </li>
            </ul>
          </li>
          <li v-else>
            <button
              class="button btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#authModal"
            >
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <sign-in-modal />
</template>

<script>
import signInModal from "./modals/SignInModals.vue";

export default {
  name: "navigation-bar",
  components: {
    "sign-in-modal": signInModal
  },
  inject: ["auth"]
};
</script>
