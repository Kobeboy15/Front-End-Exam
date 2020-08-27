<template>
    <div class="pagination-container">
        <div v-for="(page, index) in maxPage+1" :key="`page-${index}`" class="indicator-container">
            <img
                v-if="index == currentPage" 
                src="../../assets/Ellipse_Selected.png" 
            />
            <img
                v-else
                @click="changePage(index)"
                src="../../assets/Ellipse.png" 
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',

        props: {
            currentPage: {
                type: Number,
                required: true,
            },
            maxPage: {
                type: Number,
                required: true,
            }
        },

        methods: {
            changePage(index) {
                this.$emit('switchPage', index);
            }
        }
    }
</script>

<style scoped>

    .pagination-container {
        display: flex;
    }

    .indicator-container {
        margin-bottom: 50px;
        padding: 0 5px;

        cursor: pointer;
    }

</style>