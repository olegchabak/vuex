<template>
	<div class="wrapper">
		<!--<header></header>-->
		<div class="wrapper-content">
			<section>
				<div class="container">
					<h1>Hello Vue!</h1>
					<img src="./assets/logo.png" alt="logo">
					<table>
						<tr>
							<td><input type="text" v-model="message"></td>
							<td><button class="btn btnPrimary" @click.prevent="setMessage">Update message</button></td>
							<td v-if="getMessage">{{getMessage}}</td>
						</tr>
					</table>
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
			}
		},
		computed: {
			getMessage() {
				return this.$store.getters.getMessage;
			}
		},
		methods: {
			setMessage() {
				this.$store.dispatch('setMessage', this.message);
			},
		},
		created() {
			// alternative getMessage
			this.message = this.$store.getters.getMessage;
		}
	}
</script>

<style>
</style>
