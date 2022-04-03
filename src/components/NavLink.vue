<template>
  <div id=¨link¨>
    <p>{{ linkname }}</p>
  </div>
</template>

<script>
export default {
name: "NavLink",
props: {
  linkname: String,
}
}
</script>

<style>
#link{
  color: #262aff;
  height: 100%;
  width: 125px;
}
p{
  font-family: "Poppins";
  font-weight: 600;
}
</style>