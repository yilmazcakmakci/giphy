<template>
    <div class="gif-container">
        <a v-for="gif in gifs" :key="gif.id" :href="gif.url" target="_blank">
            <img :src="gif.preview" alt="gif.title" />
        </a>
    </div>
</template>

<script>
export default {
    name: "Gifs",
    props: {
        gifs: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.gif-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}
img {
    width: 100%;
    height: 225px;
    display: inline-block;
}

button {
    background-color: $color-primary;
}
</style>