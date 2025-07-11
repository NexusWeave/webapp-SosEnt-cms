
<template>
    <template v-if="organization">
        <h2> {{ organization.team.title }}</h2>
        <section :class="organization.team.cls">
            <div v-for="person in team.contactCards" :class="person.cls" :key="person.id">
                <Figure :data="person.img" />
                <h2>{{ person.name }}</h2>
                <h3>{{ person.title }}</h3>
                <span v-for="contact in person.contactData" :key="contact.id" :class="contact.cls">
                 <Link :data="contact" />
                </span>
            </div>
        </section>
    </template>

    <template v-else>
        <section :class="data.cls">
        <h2 :class="data.cls">{{ data.title }}</h2>
        <p v-for="(ph, i) in data.paragraphs" :key="i">
            {{ ph }}</p>
        </section>
    </template>
</template>
<script setup>

    import { defineProps } from 'vue';

    import Figure from '@/components/media/Figure.vue';
    import Link from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: false
        }
    });
    const data = props.data;

    const organization = data.organization;
</script>