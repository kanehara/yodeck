<template>
  <div>
    <div class="row">
      <div class="three slides">
        <div v-for="slide in slides">
          <Slide :content="slide.content"></Slide>
        </div>
      </div>
      <div class="nine selected slide">
        <Slide content="hello"></Slide>
      </div>
    </div>
  </div>
</template>

<script>
  import Slide from './Slide';

  export default {
    data() {
      return { slides: [{ content: 'slide1' }, { content: 'slide2' }] };
    },
    components: {
      Slide,
    },
  };
</script>

<style lang="less" scoped>
  .slides {
    background: lightblue;
  }

  .selected.slide {
    background: lightsteelblue;
  }
</style>
