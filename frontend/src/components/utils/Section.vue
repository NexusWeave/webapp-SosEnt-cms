
<template>
    <template v-if="isMedia">
        <section :class="[cls[0], cls[1]]" :data-filetype="media.type">
            <section v-for="media in media.media" :key="media.id"
                :class="cls[2]">
                <Anchor :data="media.anchor"
                    :Cls="[media.type, 'title-h4']" />
                <p>
                    <Date :data="media.date" :Cls="['meta-date', 'calendar']" />
                    <span>
                        {{ media.description }}
                    </span>
                </p>
            </section>
        </section>
    </template>

    <template v-if="isMembers">
        <section :class="['flex-column', 'member-container']" >
            <MembersCard v-if="connection.isMembers"
                :data="connection.members" :cls="['flex-column', 'member-container']"/>
        </section>
    </template>

    <template v-if="isPartners">
        <section :class="['flex-wrap-row', 'partner-container']">
            <div v-for="partner in connection.partners" :key="partner.id"
                :class="['partner-img']">
                <Anchor :data="partner.anchor" :Cls="['partner-img']"/>
            </div>
        </section>
    </template>
</template>
<script setup>

    import { computed, defineProps } from 'vue';

    import Date from '@/components/utils/Span.vue';
    import Table from '@/components/utils/Table.vue';
    import MembersCard from '@/components/utils/List.vue';
    import Anchor from '@/components/navigation/Anchor.vue';
    
    
    const props = defineProps({
        data: {
            type: Object,
            required: false
        },
        cls: {
            type: Array,
            required: false
        },
        filter: {
            type: String,
            required: false
        },
    });

    const data = props.data;
    const cls = props.cls ?? null;
    const isMembers = computed(() => { return !!data.isMembers; });

    const isPartners = computed(() => { return !!data.isPartners; });
    console.warn('Section - isMember:', data.isMembers, data);
    const connection = computed(() =>
    {
        console.warn('Section - Connection Data:', isMembers, data);
        if (isMembers.value)
        {
            console.warn('Section - Members Data:', data);
            const members = data.members;
            return {
                isMembers: isMembers.value,
                members: members,
            }
        }
        if (!!isPartners.value)
        {
            console.warn('Section - Partners Data:', data);
            const partners = data.partners;
            return {
                isPartners: isPartners.value,
                partners: partners,
            }
        }
    })

    const isMedia = computed(() => { return !!data.isLoaded; });
    const media = computed(() => 
    {
        if (!!isMedia.value)
        {
            const media = data.media;
            return {
                title: data.title,
                media: media,
            }
        }
     });


    console.warn('Section - Media Data:', media.value, connection.value, data.value);
</script>