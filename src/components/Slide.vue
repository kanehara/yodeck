<template>
  <div ref="editable">
    {{ content }}
  </div>
</template>
<script>
  import MediumEditor from 'medium-editor';

  export default {
    props: ['content'],
    mounted() {
      /* eslint-disable no-new */
      new MediumEditor(this.$refs.editable);
    },
  };
</script>
