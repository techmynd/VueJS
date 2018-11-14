<template>
	<div class="about">
		<h2>About Page</h2>
		<p>Hello {{ peopleName }}, Lorem ipsum dolor set amet ... </p>
	</div>
</template>

<script>
export default {
  name: 'aboutname',
  data(){
  	return {
  		peopleName: this.$route.params.name
  	}
  }
}
</script>

<style scoped>
</style>