<template>
	<div class="wrapper">
		<!--<header></header>-->
		<div class="wrapper-content">
			<section>
				<div class="container">
					<h1>Hello Vue!</h1>
					<img src="./assets/logo.png" alt="logo">
					<hr>
					<p>{{message}}</p>
					<p>{{getMessage}}</p>
					<hr>
				</div>
			</section>
		</div>
		<!--<footer></footer>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: null,
				text: null
			}
		},
		computed: {
			getMessage() {
				return this.$store.getters.getMessage;
			}
		},
		created() {
			this.message = this.$store.getters.getMessage;
		}
	}
</script>

<style>
</style>
