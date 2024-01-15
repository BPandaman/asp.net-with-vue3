<template>
    <div id="overlay" v-on:click="clickEvent">
        <div id="content" v-on:click="stopEvent">
            <slot></slot>
            <br>
            <button v-on:click="clickEvent">close</button>
        </div>
    </div>
</template>
  
<script>
export default {
    methods: {
        clickEvent() {
            this.$emit('from-child');
        },
        stopEvent() {
            event.stopPropagation();
        },
    },
};
</script>

<style>
#content {
    z-index: 10;
    width: 50%;
    height: 100%;
    padding: 1em;
    background: #dea2a2;
}

#overlay {
    /*　要素を重ねた時の順番　*/

    z-index: 1;

    /*　画面全体を覆う設定　*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    /*　画面の中央に要素を表示させる設定　*/
    display: flex;
    align-items: center;
    justify-content: end;
}

</style>