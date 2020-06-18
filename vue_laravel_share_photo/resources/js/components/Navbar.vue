<template>
  <nav class="navbar">
    <!-- navbar__brand -->
    <RouterLink class="navbar__brand" to="/">Vuesplash</RouterLink>
    <!-- /navbar__brand -->

    <!-- navbar__menu -->
    <div class="navbar__menu">
      <!-- navbar__item -->
      <div class="navbar__item">
        <button class="button">
          <i class="icon ion-md-add"></i>
          Submit a photo
        </button>
      </div>
      <!-- /navbar__item -->

      <!-- navbar__item -->
      <span class="navbar__item">username</span>
      <!-- /navbar__item -->

      <!-- navbar__item -->
      <div class="navbar__item">
        <RouterLink class="button button--link" to="/login">Login / Register</RouterLink>
      </div>
      <!-- /navbar__item -->
    </div>
    <!-- /navbar__menu -->
  </nav>
</template>