<template>
  <RouterView />
</template>

<script setup lang="ts"></script>

<style>
  * {
    box-sizing: border-box;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
