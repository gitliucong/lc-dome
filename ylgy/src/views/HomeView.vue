<template>
  <main class="map">
    <ul v-for="(item, index) in game" :key="index">
      <template v-for="(child, nextIndex) in game[index]" :key="child.id">
        <li
          :class="{ active: child.next.length == 0 }"
          v-if="child.status != null"
          :style="`transform: translate(calc( ${
            child.position.x * 52
          }px), calc( ${child.position.y * 52}px));`"
          @click="gether(index, nextIndex)"
        >
          <img :src="'./wsm00' + child.status + '.png'" />
          <div class="after"></div>
        </li>
      </template>
    </ul>

    <ol>
      <li v-for="item in field" :key="item.id">
        <img :src="'./wsm00' + item.status + '.png'" />
      </li>
    </ol>
  </main>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "",
  components: {},
  setup() {
    const data = reactive({
      game: [],
      field: [],
    });

    let itemArr = [21, 21, 21, 21, 21, 21, 21];

    let id = 1;
    let time = +new Date();
    for (let i = 0; i < 11; i++) {
      data.game.push([]);
      let temp = Math.floor(i % 2) ? 16 : 9;
      let row = Math.floor(i % 2) ? 4 : 3;
      for (let j = 0; j < temp; j++) {
        let random = Math.ceil(Math.random() * 7);
        if (itemArr[random - 1] > 0) {
          itemArr[random] -= 1;
          data.game[i].push({
            id: id,
            status: random,
            prent: [],
            next: [],
            position: {
              x: j % row,
              y: Math.floor(j / row),
            },
          });
        } else {
          j--;
        }
      }

      if (i - 1 > -1) {
        if (Math.floor(i % 2)) {
          let row = Math.sqrt(temp);
          let prentRow = Math.sqrt(Math.floor(i % 2) ? 9 : 16);
          for (let j = 0; j < row; j++) {
            if (j > 0) {
              for (let k = 0; k < row; k++) {
                if (k > 0) {
                  data.game[i - 1][prentRow * (j - 1) + (k - 1)].next.push(
                    row * j + k
                  );
                  data.game[i][row * j + k].prent.push(
                    prentRow * (j - 1) + (k - 1)
                  );
                }
                if (k < prentRow) {
                  data.game[i - 1][prentRow * (j - 1) + k].next.push(
                    row * j + k
                  );
                  data.game[i][row * j + k].prent.push(prentRow * (j - 1) + k);
                }
              }
            }
            if (j < prentRow) {
              for (let k = 0; k < row; k++) {
                if (k > 0) {
                  data.game[i - 1][prentRow * j + (k - 1)].next.push(
                    row * j + k
                  );
                  data.game[i][row * j + k].prent.push(prentRow * j + (k - 1));
                }
                if (k < prentRow) {
                  data.game[i - 1][prentRow * j + k].next.push(row * j + k);
                  data.game[i][row * j + k].prent.push(prentRow * j + k);
                }
              }
            }
          }
        } else {
          let row = Math.sqrt(temp);
          let prentRow = Math.sqrt(Math.floor(i % 2) ? 9 : 16);
          for (let j = 0; j < row; j++) {
            for (let k = 0; k < row; k++) {
              data.game[i - 1][prentRow * j + k].next.push(row * j + k);
              data.game[i][row * j + k].prent.push(prentRow * j + k);

              data.game[i - 1][prentRow * j + (k + 1)].next.push(row * j + k);
              data.game[i][row * j + k].prent.push(prentRow * j + (k + 1));

              data.game[i - 1][prentRow * (j + 1) + k].next.push(row * j + k);
              data.game[i][row * j + k].prent.push(prentRow * (j + 1) + k);

              data.game[i - 1][prentRow * (j + 1) + (k + 1)].next.push(
                row * j + k
              );
              data.game[i][row * j + k].prent.push(
                prentRow * (j + 1) + (k + 1)
              );
            }
          }
        }
      }
    }

    time = +new Date() - time;
    console.log(time);
    console.log(data.game);

    const gether = (i, j) => {
      if (data.game[i][j].next.length != 0 || data.field.length >= 7) return;

      for (let k = 0; k < data.game[i][j].prent.length; k++) {
        data.game[i - 1][data.game[i][j].prent[k]].next.splice(0, 1);
      }

      data.field.push(JSON.parse(JSON.stringify(data.game[i][j])));
      data.game[i][j].status = null;

      let status = data.field[data.field.length - 1].status;
      let index = [];
      for (let k = 0; k < data.field.length; k++) {
        if (data.field[k].status == status) {
          index.push(k);
        }
      }

      if (index.length >= 3) {
        for (let k = index.length - 1; k > -1; k--) {
          data.field.splice(index[k], 1);
        }
      }

      if (data.field.length >= 7) {
        setTimeout(() => {
          alert("游戏失败");
        }, 0);
      }
    };

    return {
      ...toRefs(data),
      gether,
    };
  },
};
</script>

<style scoped lang="scss">
.map {
  ul {
    position: relative;
    top: 0;
    left: 0;
    width: 0;
    height: 0;

    li {
      position: absolute;
      top: 0;
      left: 0;
      width: 52px;
      height: 52px;
      border: 1px solid black;
      border-radius: 8px;
      overflow: hidden;

      .after {
        position: absolute;
        top: 0;
        left: 0;
        width: 54px;
        height: 54px;
        background-color: rgba($color: #000000, $alpha: 0.3);
      }
    }

    li.active .after {
      background-color: rgba($color: #000000, $alpha: 0);
    }
  }

  ul:nth-child(2n + 1) {
    transform: translate(26px, 26px);
  }

  ol {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    width: 378px;
    height: 54px;
    border: 1px solid;
    border-radius: 8px;

    li {
      float: left;
      width: 52px;
      height: 52px;
      border: 1px solid black;
      border-radius: 8px;
      overflow: hidden;
    }
  }
}
</style>
