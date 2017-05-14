<template>
  <div class="markdown html content">
    <div v-html="content"></div>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
      },
      isEditable: {
        default: true,
        type: Boolean,
      },
    },
  };
</script>

<style scoped>
  .markdown.html.content {
    text-align: left;
    padding: 25px;
  }
</style>
