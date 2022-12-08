<template>
    <div class="row">
        <div class="col-12">
            <div class="mt-4">
                <loading v-show="loading" />
                <h5
                    v-show="!loading && products.length === 0"
                    class="ml-4"
                >
                    Whoopsie Daisy, no products found!
                </h5>
            </div>
        </div>
        <product-card
            v-for="product in products"
            v-show="!loading"
            :key="product['@id']"
            :product="product"
        />
    </div>
</template>

<script>
import ProductCard from '@/components/product-list/product-card';
import Loading from '@/components/loading';

export default {
    name: 'ProductList',
    components: { Loading, ProductCard },
    props: {
        products: {
            type: Array,
            required: true,
        },
        loading: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>

</style>
