<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <div class="sidebar p-3 mb-5" />
            </aside>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Products',
    data() {
        return {
            firstName: 'Mike',
        };
    },
};
</script>

<style scoped lang="scss">
@import '../../scss/components/light-component';
.sidebar {
  @include light-component;
  ul {
    li a:hover {
      background: $blue-component-link-hover;
    }
  }
}
</style>
