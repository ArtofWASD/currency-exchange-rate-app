<template lang="">
<div id="v-model-select">
  <select v-model="selected" class="w-60">
    <option disabled value="">Выберите Валюту</option>
    <option>RUB</option>
    <option>USD</option>
    <option>EURO</option>
  </select>
</div>
</template>
<script>
export default {
    data() {
    return {
      selected: ''
    }
  }
}
</script>
