<template>
    <nav :class="cls[0]">
        <ul :class="cls[1]">
            <li v-for="item in data" :key="item.id"
                :class="cls[2]">
                <template v-if="!!isRouterLink">
                    <RouterLink :to="item.href" :class="item.cls">
                        {{ item.label }}
                    </RouterLink>
                </template>

                <template v-else-if="!!isAnchor">
                    <Anchor :data="item.anchor" :cls="[cls[3]]"/>
                </template>

                <template v-else-if="!!isPagination">
                    <Btn :data="btn[0]" :cls="['button', 'orange-btn']"/>
                        <span :class="cls[1]"> {{ activePage > 0 ?  activePage + ' / ' + totalPages : '' }}</span>
                    <Btn :data="btn[1]" :cls="['button', 'orange-btn']"/>
                </template>

            </li>
            <template v-if="!!isPagination">
                <li>
                    <Btn :data="btn[0]" :cls="['button', 'orange-btn']"/>
                </li>
                    <span :class="cls[1]"> {{ activePage > 0 ?  activePage + ' / ' + totalPages : '' }}</span>
                <li>
                    <Btn :data="btn[1]" :cls="['button', 'orange-btn']"/>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script setup>
    import Anchor from './Anchor.vue';

    import { RouterLink } from 'vue-router';
    import { computed } from 'vue';

    const props = defineProps({
        data: {
        type: Array,
        required: true
        },
        cls: {
            type: Array,
            required: false,
            default: () => [['nav-bar', 'flex-wrap-row-justify-space-between'],
                ['nav-list', 'flex-wrap-row-align-items-center'],
                ['nav-item'],
                ['nav-link']]
        }
    });

    const cls = props.cls;
    const data = props.data;
    
    //console.log("NavigationMenu loaded with data: ", data );
    const isAnchor = computed(() => {

        const anchorData = data.filter(item => item.type === 'anchor');
        return !!anchorData.length;
    });
    const isRouterLink = computed(() => {
        const routerData = data.filter(item => item.type === 'router');
        return !!routerData.length;
    });
    const isPagination = computed(() => {
        const paginationData = data.filter(item => item.type === 'pagination');
        return !!paginationData.length;
    });

    
</script>