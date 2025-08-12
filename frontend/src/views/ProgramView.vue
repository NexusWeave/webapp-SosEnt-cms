<template>
    <section v-if="!! !isLoggedIn">
        <Form :data="schema" />
    </section>
    <section v-if="!isLoggedIn">
        <section>
            <Btn v-for="btn in buttons" :key="btn.id" :data="btn" />
        </section>
        <section>
            <h2>Medlemsfordeler</h2>
            <p>Some text about the program</p>
        </section>

        <section v-if="!!isMedia" v-show="test">
            <h2>Sosent Dokument Arkiv</h2>
            <Media v-if="!!media" :data="media"
                filter="dokumenter"
                :cls="['media-container',
                'flex-wrap-row-justify-space-evenly',
                ['media-content', 'flex-column', 'component-theme']]"/>
        </section>
    </section>
</template>

<script setup>

    import { computed } from 'vue';
    import { generateHexID } from '@/utils/utils';
    import { mediaStore } from '@/stores/media-store.js';

    import Form from '@/components/form/Form.vue';
    import Media from '@/components/media/Media.vue';
    import Btn from '@/components/navigation/Button.vue';

    const schema = {
        name: 'membershipForm',
        title:'Medlemsfordeler',
        action: 'submitMembershipForm',
        description: 'Bli medlem i SoSEnT Norge',
        fields:
        [
            {
                type: 'password',
                id: generateHexID(),
                label: "Login for å se fordeler og dokument arkiv",
                placeholder: "Skriv inn passord",
                required: true
            }
        ],
        btn:
        [
            {
                type: 'submit',
                label: 'logg deg inn',
                class: 'btn btn-primary',
                action: () => {}
            },
        ]
    };
    const isLoggedIn = computed(() => {
        // Logic to determine if the user is logged in
        //if (formModel.password === 'sosent2025') return true;
        return false; // Placeholder, replace with actual logic
    });
    const test = false
    const buttons =
    [
        {
            label: 'Fordeler',
            action: () => {},
            cls: ['button'],
            id: generateHexID(),
        },
        {
            label: 'Arkiv',
            action: () => {},
            cls: ['button'],
            id: generateHexID(),
        },
    ];
    const media = mediaStore();
    const isMedia = computed(() => media.isLoaded);
</script>