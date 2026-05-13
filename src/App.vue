<template>
  <router-view />
</template>

<script>
import { router } from './routes';

export default {
  name: 'App',
  setup() {
    return { router };
  }
}
</script>