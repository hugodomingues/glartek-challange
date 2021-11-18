<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active nav-link">
            <router-link to="/" class="nav-link"> Home </router-link>
          </li>
          <li class="nav-item active nav-link">
            <router-link to="/weather" class="nav-link"> Weather </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>
