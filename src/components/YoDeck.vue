<template>
  <div id="main">
    <div class="row">
      <div class="three preview slides">
        <div v-for="slide in slides" class="preview slide">
          <Slide :content="slide.content" :isEditable=false></Slide>
        </div>
      </div>
      <div class="nine selected slide">
        <Slide :content="htmlMarkdown"></Slide>
        <textarea :value="rawMarkdown" @input="update" class="markdown editor"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  import Slide from '@/components/Slide';
  import _ from 'lodash';
  import marked from 'marked';

  export default {
    data() {
      return {
        slides: [
          { content: '<h1>slide1</h1>' },
          { content: 'slide2' },
          { content: 'slide3' },
          { content: 'slide4' },
          { content: 'slide5' },
          { content: 'slide6' },
          { content: 'slide7' },
        ],
        rawMarkdown: '',
      };
    },
    computed: {
      htmlMarkdown() {
        return marked(this.rawMarkdown, { sanitize: true });
      },
    },
    methods: {
      update: _.debounce(function (e) {
        this.rawMarkdown = e.target.value;
      }, 200),
    },
    components: {
      Slide,
    },
  };
</script>

<style lang="less" scoped>
  @mainPadding: 25px 50px;
  @height: 600px;
  @previewSlideHeight: 150px;

  #main {
    padding: @mainPadding;
  }

  .row {
    border: 1px solid gray;
  }

  .slides {
    &.preview {
      max-height: @height;
      overflow: scroll;
      border-right: 1px solid gray;
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
      border-bottom: 1px solid gray;
      border-left: none;
      border-right: none;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .markdown.editor {
    width: 80%;
    height: @height/2;
    resize: none;
    border-radius: 10px;
    padding: 10px;
  }
</style>
