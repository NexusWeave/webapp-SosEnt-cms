
<template>
    <template v-if="isMedia">
        
        <section :data-filetype="media.type" :class="cls[0]">
            <h2 class="title-h2"> {{ media.title }} </h2>

            <section :class="cls[1]">
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
        </section>
    </template>
    <template v-if="isConnections">
        <section v-if ="connection.isConnections"
                :class="['flex-column', 'connection-container']">
                <h2 class="title-h2">{{ connection.title }}</h2>
                <section :class="['flex-wrap-row-justify-space-evenly']" >
                    <section v-if ="isMembers"
                        :class="['flex-column', 'member-container']" >
                        <Table :data="members" :cls="[]" />
                    </section>
                    
                    <section v-if ="isPartners"
                        :class="['flex-wrap-row', 'partner-container']">
                        <div v-for="partner in partners.partners" :key="partner.id" 
                            :class="['partner-img']">
                            <Anchor :data="partner.anchor" :Cls="['partner-img']"/>
                        </div>
                    </section>
                </section>
            </section>
    </template>

</template>
<script setup>

    import { computed, defineProps, reactive, ref } from 'vue';
    import Date from '@/components/utils/Span.vue';
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

    const isConnections = computed(() => { return !!data.isConnections; });
        const connection = computed(() => 
        {
            if (!!isConnections.value)
            {
                return {
                    title: data.title,
                    members: data.members ?? [],
                    partners: data.partners ?? [],
                }
            }
        });
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

    const organization = data.organization;

    //console.warn('Section - Media Data:', media.value);
</script>