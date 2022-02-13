<template>
  <div class="hello">
    <div>
      <h1>Bem vindo!</h1>
      <h2>Projeto sobre GoJS</h2>
    </div>
    <div>
      <p>
        Nesse projeto será abordado conceitos da biblioteca, além de exemplos
        ilustrativos.
      </p>
      <p>
        O projeto tem puramente como objetivo somente o aprendizado e não será
        comercializado de forma alguma.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Welcome',
});
</script>

<style scoped lang="scss">
.hello {
  width: 100%;
  height: 100%;
  background: darkgrey;
  color: white;
  display: grid;
  grid: repeat(2, 1fr) / 1fr 1fr;
  place-items: center;
}

h1 {
  color: black;
  font-size: 2.5rem;
}

h2 {
  font-size: 1.2rem;
}
</style>
