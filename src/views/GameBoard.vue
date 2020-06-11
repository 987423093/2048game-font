<template>

  <v-touch class="wrapper" v-on:swipeleft="move('ArrowLeft')" v-on:swiperight="move('ArrowRight')"
    v-on:swipeup="move('ArrowUp')" v-on:swipedown="move('ArrowDown')">
    <div class="game">
      <div class="board">
        <GameCell :number="cell" v-for="(cell,key) in cells" :key="key"></GameCell>
      </div>
      <div class="tools">
        <h3 class="welcomeText" style="text-align: center;">Welcome to 2048!</h3>
        <div class="info">
          <p class="welcomeText">你的比分</p>
          <p class="welcomeText">当前得分: {{score}}</p>
          <p class="welcomeText">最高得分: {{highestScore}}</p>
        </div>
        <div class="recent">
          <p class="welcomeText">最近记录</p>
          <span class="recentScoreFont" v-for="(item, index) in recentScores" :key="item"
            :index="index">{{item}}<br></span>
        </div>
      </div>
    </div>
  </v-touch>
</template>

<script>
import GameCell from "./GameCell";

export default {
  name: "GameBoard",
  data () {
    return {
      cells: [],
      score: 0,
      highestScore: 0,
      recentScores: [],
      username: "",
      popup: 0,
      dateStr: ""
    };
  },
  methods: {

    showpopup () {
      this.popup = 1
    },
    closepopup () {
      this.popup = 0;
    },
    init () {
      this.cells = this.shuffle([
        2, 2, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
      ]);
    },
    shuffle (arr) {
      for (let i = 0; i <= arr.length - 1; i++) {
        let j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    },
    addCells () {
      let emptyCells = [];
      this.cells.forEach((cell, index) => {
        if (cell === 0) {
          emptyCells.push(index);
        }
      });
      if (emptyCells.length > 0) {
        let index = this.shuffle(emptyCells)[0];
        this.cells[index] = 2;
      } else {
        let turns = false;
        for (let i = 0; i < 16; i++) {
          if (this.checkTurns(i)) {
            console.log(i, this.cells[i], this.cells[i + 1], this.cells[i - 1], this.cells[i + 4], this.cells[i - 4])
            turns = true;
            break;
          }
        }
        for (let i = 0; i < 16; i++) {
          if (this.cells[i] == 0) {
            turns = true;
          }
        }
        if (!turns) {
          // debugger
          for (let i = 0; i < 16; i++) {
            console.log(this.cells[i]);
          }
          alert("Game Over!");
          if (this.highestScore < this.score) {
            this.highestScore = this.score
          }

          let date = new Date();
          this.dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " "
            + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
          this.axios.post('/rank/addHistoryRank', { nickName: sessionStorage.getItem("nickName"), score: this.score, createTime: this.dateStr })

          this.restart();
        }
      }
    },
    checkTurns (i) {
      let v = this.cells[i];
      return (
        (v === this.cells[i + 1] && i % 4 != 3) ||
        (v === this.cells[i - 1] && i % 4 != 0) ||
        v === this.cells[i + 4] ||
        v === this.cells[i - 4]
      );
    },
    onkeydown (e) {
      if (
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.code)
      ) {
        //console.log(e.code);
        this.move(e.code);
      }
    },
    move (direction) {
      //console.log('move' + direction)
      for (let k = 1; k <= 4; k++) {
        this[direction](k);
      }
      //   this.addBtnClass(direction);
      this.$forceUpdate();
      this.addCells();
      this.$forceUpdate();

    },
    restart () {
      var date = new Date();
      var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-"
        + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
      this.recentScores.push(time + " " + this.score);
      if (this.recentScores.length > 5) {
        this.recentScores.shift();
      }

      this.init()
      this.score = 0
    },
    //?
    addBtnClass (direction) {
      let btn = document.getElementById(direction);
      btn.className += " effect effect-before";
      setTimeout(() => (btn.className = ""), 200);
    },
    //左移
    ArrowLeft (k) {
      //   debugger;
      for (let i = 0; i <= 15; i++) {
        //前面一个数
        let index = i - 1;
        if (index < 0 || index > 15 || i % 4 == 0) {
          continue;
        }
        //4*4 可能移动数目为n-2 前面两次先移动
        if (k <= 2 || k == 4) {
          if (this.cells[index] === 0) {
            this.cells[index] = this.cells[i];
            this.cells[i] = 0;
          }
        }
        //第n-1次进行合并
        if (k == 3) {
          if (this.cells[i] == this.cells[index] && this.cells[i] != 0) {
            this.cells[index] += this.cells[i];
            this.cells[i] = 0;
            this.score += this.cells[index];
          }
        }
      }
      //最后合并一次对齐
    },
    //右移
    ArrowRight (k) {
      for (let i = 15; i >= 0; i--) {
        //右边一个数
        let index = i + 1;
        if (index < 0 || index > 15 || i % 4 == 3) {
          continue;
        }
        //4*4 可能移动数目为n-2 前面两次先移动
        if (k <= 2 || k == 4) {
          if (this.cells[index] === 0) {
            this.cells[index] = this.cells[i];
            this.cells[i] = 0;
          }
        }
        //第n-1次进行合并
        if (k == 3) {
          if (this.cells[i] == this.cells[index] && this.cells[i] != 0) {
            this.cells[index] += this.cells[i];
            this.cells[i] = 0;
            this.score += this.cells[index];
          }
        }
        //最后合并一次对齐
      }
    },
    //上移
    ArrowUp (k) {
      for (let i = 0; i <= 15; i++) {
        //上面一个数
        let index = i - 4;
        if (index < 0 || index > 15) {
          continue;
        }
        //4*4 可能移动数目为n-2 前面两次先移动
        if (k <= 2 || k == 4) {
          if (this.cells[index] === 0) {
            this.cells[index] = this.cells[i];
            this.cells[i] = 0;
          }
        }
        //第n-1次进行合并
        if (k == 3) {
          if (this.cells[i] == this.cells[index] && this.cells[i] != 0) {
            this.cells[index] += this.cells[i];
            this.cells[i] = 0;
            this.score += this.cells[index];
          }
        }
        //最后合并一次对齐
      }
    },
    //下移
    ArrowDown (k) {
      for (let i = 15; i >= 0; i--) {
        //下面一个数
        let index = i + 4;
        if (index < 0 || index > 15) {
          continue;
        }
        //4*4 可能移动数目为n-2 前面两次先移动
        if (k <= 2 || k == 4) {
          if (this.cells[index] === 0) {
            this.cells[index] = this.cells[i];
            this.cells[i] = 0;
          }
        }
        //第n-1次进行合并
        if (k == 3) {
          if (this.cells[i] == this.cells[index] && this.cells[i] != 0) {
            this.cells[index] += this.cells[i];
            this.cells[i] = 0;
            this.score += this.cells[index];
          }
        }
        //最后合并一次对齐
      }
    }
  },
  created () {
    this.init();
    window.addEventListener("keydown", this.onkeydown);
  },
  mounted () {

    // alert(this.$route.query.nickName)
    console.log("初始化数据")

  },
  components: {
    GameCell
  },
  props: {
    GameBoard: {}
  }
};
</script>

<style>
.game {
  display: inline;
  justify-content: center;
  align-items: center;
}

.board {
  display: flex;
  flex-wrap: wrap;
  width: 360px;
  height: 360px;
  background-color: #d0d6da;
  /* padding: 6px; */
  border-radius: 8px;
  margin-bottom: 10px;
}

.tools {
  height: 200px;
  width: 360px;
  padding: 6px;
  display: inline-block;
  /* margin: 10px; */
  background-color: #d0d6da;
  border-radius: 8px;
  position: relative;
  padding-top: 10px;
}
.recentScore {
  display: inline;
  color: #555;
}

.recentScoreFont {
  font-size: 10px;
}
.buttonsUp {
  display: flex;
  justify-content: center;
}

.welcomeText {
  color: #555;
}

.recordinfo {
}

.info {
  display: inline;
  float: left;
  width: 100px;
}
.recent {
  display: inline;
  float: right;
  width: 200px;
}

.btn {
  width: 100px;
  height: 100px;
  background: inherit;
  border: none;
  outline: none;
}
.btn img {
  width: 100%;
  height: 100%;
  margin: 5px;
  position: relative;
}

.restart {
  padding: 5px;
  background-color: #d0d6da;
}
</style>