<template>
  <div ref="editable">
    {{ content }}
  </div>
</template>
<script>
  import MediumEditor from 'medium-editor';

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
    mounted() {
      if (this.isEditable) {
        /* eslint-disable no-new */
        new MediumEditor(this.$refs.editable);
      }
    },
  };
</script>
