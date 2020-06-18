<template>
  <div :class="'color' + number" class="cell">{{ number || ''}}</div>
</template>
<script>
export default {
  name: "GameCell",
  methods: {},
  props: {
    number: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
.color0 {
  background-color: #ecf0f1;
  color: #fff;
}

@keyframes color_change2 {
  from {
    background-color: #ecf0f1;
  }
  to {
    background-color: #1abc9c;
  }
}

.color2 {
  background-color: #1abc9c;
  color: #fff;
  animation-name: color_change2;
  animation-duration: 0.2s;
  animation-direction: alternate;
}

@keyframes color_change4 {
  from {
    background-color: #1abc9c;
  }
  to {
    background-color: #2ecc71;
  }
}

.color4 {
  background-color: #2ecc71;
  color: #fff;
  animation-name: color_change4;
  animation-duration: 1s;
  animation-direction: alternate;
}

@keyframes color_change8 {
  from {
    background: #2ecc71;
  }
  to {
    background-color: #3498db;
  }
}

.color8 {
  background-color: #3498db;
  color: #fff;
  animation-name: color_change8;
  animation-duration: 1s;
  animation-direction: alternate;
}

@keyframes color_change16 {
  from {
    background-color: #3498db;
  }
  to {
    background-color: #9b59b6;
  }
}

.color16 {
  background-color: #9b59b6;
  color: #fff;
  animation-name: color_change16;
  animation-duration: 1s;
  animation-direction: alternate;
}

@keyframes color_change32 {
  from {
    background-color: #9b59b6;
  }
  to {
    background-color: #34495e;
  }
}

.color32 {
  background-color: #34495e;
  color: #fff;
  animation-name: color_change32;
  animation-duration: 1s;
  animation-direction: alternate;
  font-size: 60px;
}

@keyframes color_change64 {
  from {
    background-color: #34495e;
  }
  to {
    background-color: #d2a50f;
  }
}

.color64 {
  background-color: #d2a50f;
  color: #fff;
  animation-name: color_change64;
  animation-duration: 1s;
  animation-direction: alternate;
}

@keyframes color_change128 {
  from {
    background-color: #d2a50f;
  }
  to {
    background-color: #e67e22;
  }
}

.color128 {
  background-color: #e67e22;
  color: #fff;
  animation-name: color_change128;
  animation-duration: 1s;
  animation-direction: alternate;
}

@keyframes color_change256 {
  from {
    background-color: #e67e22;
  }
  to {
    background-color: #e74c3c;
  }
}

.color256 {
  background-color: #e74c3c;
  color: #fff;
  animation-name: color_change256;
  animation-duration: 1s;
  animation-direction: alternate;
}

@keyframes color_change512 {
  from {
    background-color: #e74c3c;
  }
  to {
    background-color: #95a5a6;
  }
}

.color512 {
  background-color: #95a5a6;
  color: #fff;
  animation-name: color_change512;
  animation-duration: 1s;
  animation-direction: alternate;
}

@keyframes color_change1024 {
  from {
    background-color: #95a5a6;
  }
  to {
    background-color: #574b90;
  }
}

.color1024 {
  background-color: #574b90;
  color: #fff;
  animation-name: color_change1024;
  animation-duration: 1s;
  animation-direction: alternate;
}

@keyframes color_change2048 {
  from {
    background-color: #574b90;
  }
  to {
    background-color: #303952;
  }
}

.color2048 {
  background-color: #303952;
  color: #fff;
  animation-name: color_change2048;
  animation-duration: 1s;
  animation-direction: alternate;
}

.color4096 {
  background-color: #c44569;
  color: #fff;
}

.color8192 {
  background-color: #78e08f;
  color: #000000;
}

.cell {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 1%;
  font-size: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>