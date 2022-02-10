<template>
  <div class="hello">
    <h1>Bem vindo!</h1>
    <h2>Projeto sobre GoJS</h2>
    <hr />
    <p>
      Nesse projeto será abordado conceitos da biblioteca, além de exemplos
      ilustrativos.
    </p>
    <p>
      O projeto tem puramente como objetivo somente o aprendizado e não será
      comercializado de forma alguma.
    </p>
    <code>
    Todos os direitos são reservados aos dono da biblioteca.
    </code>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Welcome',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 100%;
  height: 100%;
  background: darkgrey;
  color: white;
}
</style>
