<template>
    <a
        :class="cls[0]"
        :href="data.href"
        :aria-disabled="!!isDisabled()"
        :data-external-link="!!isExternal()"
        :target="isExternal() ? '_blank' : '_self'"
        :rel="isExternal() ? 'noopener noreferrer' : null"
        :download="isMedia() === 'download' ? data.label + '.' + data.type[0] : null"
        >

        <template v-if="isMedia() === 'img'">
            <Figure 
                :data="img"
                :cls="[cls[1]]"
            />
        </template>

        <template v-else-if="isMedia() == cls[cls.length - 1]">
            <Icon v-if="!!data.label"
                :label="data.label"
                :cls="[cls[1], cls[cls.length - 1]]"
            />
            <Icon v-else 
                :cls="[cls[1], cls[cls.length - 1]]"
            />
        </template>

        <template v-else>
                {{ data.label }}
        </template>
    </a>
</template>

<script setup>

    import { defineProps } from 'vue';

    import Icon from '@/components/media/Icon.vue';
    import Figure from '@/components/media/Figure.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        cls: {
            type: [String, Array],
            required: false,
        },
        img: {
            type: Object,
            required: false,
        }
    });

    const media = 
    {
        files: ['pdf'],
        contact: ['email', 'telephone'],
        images: ['jpg', 'jpeg', 'png', 'svg','webp'],
        downloadFiles: ['docx', 'xlsx', 'csv'],
    }

    const classList = () => {
        const cls = props.cls ? props.cls : (Array.isArray(data.cls) ? data.cls : [data.cls]);
        cls.push('icon');

        return cls;
    };

    const data = props.data;
    const cls = classList();
    const img = !!data.img ? data.img : null;
    
    const isExternal = () => {
        if (!data.type) return false;
        return Array.isArray(data.type) ? data.type.includes('external') : data.type === 'external';
    };

    const isDisabled = () => {
        if (!data.type) return false;
        return !!Array.isArray(data.type) ? data.type.includes('disabled') : !!data.type === 'disabled';
    };

    const isMedia = () => {

        if (!data.type && !img) return false;

        const search = Array.isArray(data.type) ? data.type[0] : data.type ? data.type : img.type ?? null

        const files = media.files.find(item => item === search);
        const images = media.images.find(item => item === search);
        const contact = media.contact.find(item => item === search);
        const download = media.downloadFiles.find(item => item === search);
        //console.log("Search type:", search, "Data type:", data.type, "Image type:", img ? img.type : 'No image');
        
        switch (search)
        {
            case files || contact:
                return cls[cls.length - 1];

            case download:
                return 'download';

            case images:
                return 'img';

            default:
                //console.warn('Data type is illegal:', search, data);
                return false;
        }
    };

    //console.log("Link component loaded with data: ", data, img);
</script>