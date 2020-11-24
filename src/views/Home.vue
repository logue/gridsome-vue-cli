<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <GridsomeStaticExample />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GridsomeStaticExample from '@/components/GridsomeStaticExample.vue';

@Component({
  components: {
    GridsomeStaticExample,
  },
})
export default class Home extends Vue {}
</script>
