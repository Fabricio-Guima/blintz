<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <span>Blintz</span>
      </router-link>

      <div class="menu-icons">
        <span><i class="color-active fas fa-building"></i></span>
        <span><i class="color fas fa-handshake"></i></span>
        <span><i class="color fas fa-magic"></i></span>
        <span><i class="color fas fa-bell"></i></span>
        <span><i class="color fas fa-cog"></i></span>
      </div>

      <div>
        <span>
          Bem vindo,
          <span style="font-weight: bold; margin-right: 16px"
            >usuario@email.com</span
          ></span
        >
        <i class="fas fa-sign-in-alt"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  width: 1000px;
  margin: 0 auto;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.color-active {
  font-size: 2rem;
}
.color {
  color: #aaaaaa;
  font-size: 2rem;
}

.logo {
  padding: 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-right: 64px;
}

.logo img {
  width: 90px;
}

.menu-icons span + span {
  margin-left: 32px;
}
</style>
