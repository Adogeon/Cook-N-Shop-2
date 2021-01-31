<template>
  <div id="user" class="container">
    <div class = "row my-3 justify-content-between">
      <div id="info" class= "card col-lg-3 col-12 py-4 shadow">
        <div class = "row">
          <div class="col-12 py-3">
            <img src="https://picsum.photos/150" class="img-thumnail rounded-circle shadow-sm" alt="user-image">
            <p>User name</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6 justify-content-center">
            <div>Created </div>
            <div>3</div>
          </div>
          <div class="col-6 justify-content-center">
            <div>Favorites </div>
            <div>6</div>
          </div> 
        </div> 
      </div>
      <div class="card col-lg-8 col-12 text-center p-0">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "User",
};
</script>

<style scoped>
#info {
  min-width: 250px
}
</style>
