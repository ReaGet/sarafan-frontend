<template>
	<div class="main-search-container">
		<input type="text" class="main-search" placeholder="Искать у продавца">
	</div>
</template>

<script setup lang="ts">
import { SearchItem } from '../types/search'
</script>

<style lang="scss" scoped>
.main-search-container {
	margin-top: 15px;
	margin-bottom: 15px;
	width: 100%;
	position: relative;

	&::before {
		content: "";
		background-image: url("../assets/search-icon.svg");
		width: 16px;
		height: 16px;
		object-fit: contain;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 16px;
		z-index: 1;
	}
}

.main-search {
	width: 100%;
	border: none;
	outline: none;
	background: #F5F7FA;
	height: 40px;
	border-radius: 12px;
	padding-left: 46px;
	position: relative;
}
</style>