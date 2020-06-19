<template>
      <div class="grid-container">
      <div class="item-2">{{ display }}</div>
      <div class="item-3" v-on:click="clear()">C</div>
      <div class="item-1" v-on:click="compose('1')">1</div>
      <div class="item-1" v-on:click="compose('2')">2</div>
      <div class="item-1" v-on:click="compose('3')">3</div>
      <div class="item-1" v-on:click="compose('4')">4</div>
      <div class="item-1" v-on:click="compose('5')">5</div>
      <div class="item-1" v-on:click="compose('6')">6</div>
      <div class="item-1" v-on:click="compose('7')">7</div>
      <div class="item-1" v-on:click="compose('8')">8</div>
      <div class="item-1" v-on:click="compose('9')">9</div>
      <div class="item-1" v-on:click="compose('0')">0</div>
      <div class="item-1" v-on:click="compose(' + ')">+</div>
      <div class="item-1" v-on:click="compose(' - ')">-</div>
      <div class="item-1" v-on:click="compose(' * ')">x</div>
      <div class="item-1" v-on:click="compose(' / ')">/</div>
      <div class="item-4" v-on:click="evaluate()">=</div>
    </div>
</template>

<script>
export default {
  name: 'Calculator',
  data: () => {
    return {
      display: ""
    }
  },
  methods: {
    compose: function(n){
      this.display = this.display + n
    },
    evaluate: function(){
      this.display = eval(this.display)      
    },
    clear: function(){
      this.display = "";
  }
}

}
</script>

<style>
  .item-2{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>























