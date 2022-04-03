<template>
  <div>Dashboard page.
    <p>
      <router-link :to="{name: 'item', query: {item: 1}}">Item 1</router-link>
      <router-link :to="{name: 'item', query: {item: 2}}">Item 2</router-link>
    </p>
  </div>
</template>