<template>
    <section v-if="!! !isLoggedIn">
        <Form 
        :data="schema"
        :cls="['', '', '', '', '', '', '']"
        @formData="handleSubmit"
    />
    </section>
    <section v-if="isLoggedIn">
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

    import { computed, ref } from 'vue';
    import { generateHexID } from '@/utils/utils';
    import { mediaStore } from '@/stores/media-store.js';

    import Form from '@/components/form/Form.vue';
    import Media from '@/components/media/Media.vue';
    import Btn from '@/components/navigation/Button.vue';

    const schema = {
        name: 'programs',
        title:'Medlemsfordeler',
        description: 'Bli medlem i SoSEnT Norge',
        inputs:
        [
            {
                value:'',
                required: true,
                name: 'password',
                label: "Passord",
                type: 'password',
                id: generateHexID(),
                placeholder: "Skriv inn passord",
                
            },
        ],
        btn:
        [
            {
                type: 'submit',
                label: 'logg deg inn',
                class: ['btn','btn-primary'],
            },
        ]
    };
    const isLoggedIn = ref(false);
    const handleSubmit = (inputs) => {
        const value = inputs.filter(input => input.name === 'password')?.[0]?.value;
        console.warn("Form retrived with data: ", inputs, value);

        if (value === "x") isLoggedIn.value = !isLoggedIn.value;

    };

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