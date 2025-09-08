<template>
    <h2 class="title-h2"> SosEnt Norge Meldlemsportal</h2>
    <section v-if="!isLoggedIn"
        :class="['login-container', 'flex-wrap-column-align-center-justify-space-evenly']">
        <Form 
        :data="schema"
        @formData="handleSubmit"
    />
    </section>
    <section v-if="isLoggedIn">
        <section class="flex-wrap-row-justify-center" >
            <Btn v-for="btn in buttons" :key="btn.id" :data="btn" :cls="['btn', 'orange-btn']" />
        </section>
        <section v-show="!!program">
            <h2 class="title-h2">Fordeler</h2>
            <section class="flex-wrap-column-align-center-justify-space-evenly">
            <p>Some text about the program</p>
            </section>
        </section>

        <section v-if="!!isMedia" v-show="!!archieve">
            <h2 class="title-h2">Dokument Arkiv</h2>
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

    const media = mediaStore();
    const isMedia = computed(() => media.isLoaded);

    const schema = {
        name: 'programs',
        title:'Innloggings skjema',
        description: 'Bli medlem i SoSEnT Norge',

        inputControl:
        [
            {
                
                value:'',
                required: true,
                name: 'password',
                type: 'password',
                id: 'password-field',
                placeholder: "Skriv inn passord",

                label:
                {
                    icon:true,
                    label: "Passord",
                },

                cls: ['login-label', 'login-input'],
                
            },
        ],
        btn:
        [
            {
                type: 'submit',
                label: 'logg deg inn',
                class: ['btn','orange-btn'],
            },
        ]
    };
    
    const program = ref(true);
    const archieve = ref(false);
    const isLoggedIn = ref(false);

    const handleSubmit = (inputs) => {
        const value = inputs.filter(input => input.name === 'password')?.[0]?.value;
        console.warn("Form retrived with data: ", inputs, value);

        if (value === "x") isLoggedIn.value = !isLoggedIn.value;

    };

    const buttons =
    [
        {
            label: 'Fordeler',
            id: generateHexID(),

            action: () => {
                program.value = true;
                archieve.value = false;
            },
        },
        {
            label: 'Dokumenter',
            id: generateHexID(),
            action: () => {
                program.value = false;
                archieve.value = true;
            },
        },
    ];

    
</script>