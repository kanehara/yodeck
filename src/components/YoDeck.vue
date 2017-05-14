<template>
  <div>
    <div class="row">
      <div class="three preview slides">
        <div v-for="slide in slides" class="preview slide">
          <Slide :content="slide.content" :isEditable=false></Slide>
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
      return {
        slides: [
          { content: 'slide1' },
          { content: 'slide2' },
          { content: 'slide3' },
          { content: 'slide4' },
          { content: 'slide5' },
          { content: 'slide6' },
          { content: 'slide7' },
        ],
      };
    },
    components: {
      Slide,
    },
  };
</script>

<style lang="less" scoped>
  @height: 500px;
  @previewSlideHeight: 150px;

  .row {
    border: 1px solid gray;
  }

  .slides {
    &.preview {
      max-height: @height;
      overflow: scroll;
    }
  }

  .slide {
    &.selected {
      background: lightsteelblue;
      height: @height;
    }

    &.preview {
      background: lightblue;
      height: @previewSlideHeight;
      border: 1px solid gray;
      border-left: none;
      border-right: none;

      &:first-child {
        border-top: none;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>
