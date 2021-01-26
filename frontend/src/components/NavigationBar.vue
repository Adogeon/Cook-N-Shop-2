<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Cook-n-Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav me-2 mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link" href="/recipes">Recipes</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#">Search</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">User</a></li>
            <li><a class="dropdown-item" href="#">Favorite Recipe</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="nav-link" href="#" tabindex="-1">Log Out</a></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name:"navigation-bar"
}
</script>