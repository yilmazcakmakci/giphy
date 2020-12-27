<template>
    <div class="header-container">
        <div :class="'header ' + contentType">
            <v-icon :name="header.icon" scale="1.5" />
            <h1> {{ header.title }} </h1>
        </div>

        <span class="count">
            {{ showingCount }}
        </span>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Header",
    computed: {
        ...mapGetters(["header", "showingCount", "contentType"]),
    },
};
</script>

<style lang="scss" scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 48px 0 64px;

    .header {
        display: flex;
        align-items: center;

        h1 {
            font-size: 20px;
            line-height: 24px;
            margin-left: 12px;
        }

        &.trending {
            color: $color-danger;
        }
        
        &.search {
            color: $color-search;
        }
    }

    .count {
        color: $color-text;
        font-size: 12px;
    }
}
</style>>
