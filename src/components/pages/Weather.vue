<template>
  <div>
      {{ teste }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const teste = ref('hello');

        return { teste }
    }
}
</script>

