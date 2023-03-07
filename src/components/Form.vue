<template>
  <div>
    <form class="flex flex-row">

      <div class="flex flex-col gap-2">
        <label>Username</label>
        <label>Password</label>
        <label>Retype Password</label>
        <label>Email</label>
        <label>DOB</label>
        <label>Credit Card</label>
        <label>Post Code</label>
      </div>

      <div class="flex flex-col gap-2 ml-2">
        <input type="text" required>
        <input
          type="password"
          required minlength="8"
        >
        <input
          type="password"
          required minlength="8"
        >
        <input type="email" required>
        <input type="date">
        <input
          autocomplete="false"
          pattern="[0-9]{16,16}"
        >
        <input
          required
          pattern="[0-9]{4,4}"
          minlength="4"
          maxlength="4"
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
label, input {
  display: flex;
}

input {
    &:valid {background-color: green};
    &:invalid {background-color: red};
}
</style>
