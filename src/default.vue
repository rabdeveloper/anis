<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
  name: 'default'
}
</script>

<style>
 @import './assets/css/normalize.css';
 @import './assets/css/webflow.css';
 @import './assets/css/anistransport.webflow.css';
</style>

<style>
.hero {
  position: relative;
  height: 750px;
  background-image: url('../assets/img/bg-home.jpg');
  background-position: 50% 50%;
  background-size: cover;
}

</style>