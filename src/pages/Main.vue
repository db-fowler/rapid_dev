<template>
  <div>Main app
    <br>
    <br>
    <router-link :to="{name: 'dashboard'}">Dashboard</router-link>-
    <router-link :to="{name: 'item'}">Item</router-link>

    <router-view style="border: 1px solid #000; margin-top: 20px;"></router-view>
  </div>
</template>