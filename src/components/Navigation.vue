<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" exact :to="{ name: 'home' }">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>
