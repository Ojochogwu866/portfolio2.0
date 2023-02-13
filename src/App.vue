<template>
  <div class="">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<style lang="scss">
#app {
  font-family: "Fira Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
