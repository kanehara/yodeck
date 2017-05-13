<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import 'medium-editor/dist/css/medium-editor.min.css';
  import 'medium-editor/dist/css/themes/beagle.min.css';

  export default {
    name: 'app',
  };
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
  }

  .row {
    display: flex;

    .one {
      flex-basis: percentage(1/12);
    }
    .two {
      flex-basis: percentage(2/12);
    }
    .three {
      flex-basis: percentage(3/12);
    }
    .four {
      flex-basis: percentage(4/12);
    }
    .five {
      flex-basis: percentage(5/12);
    }
    .six {
      flex-basis: percentage(6/12);
    }
    .seven {
      flex-basis: percentage(7/12);
    }
    .eight {
      flex-basis: percentage(8/12);
    }
    .nine {
      flex-basis: percentage(9/12);
    }
    .ten {
      flex-basis: percentage(10/12);
    }
    .eleven {
      flex-basis: percentage(11/12);
    }
    .twelve {
      flex-basis: percentage(12/12);
    }
  }
</style>
