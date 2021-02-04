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
          <li class="nav-item dropdown">
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
                <router-link class="nav-link" to="/logout" tabindex="-1"
                  >Log Out</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation-bar"
};
</script>
