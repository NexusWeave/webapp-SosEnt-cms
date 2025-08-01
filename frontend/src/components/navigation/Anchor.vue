<template>
    <a
        :href="data.href"
        :class="cls[0]"
        :target="isExternal() ? '_blank' : '_self'"
        :rel="isExternal() ? 'noopener noreferrer' : null"
        :data-external-link="isExternal()? 'true' : 'false' "
        :download="isMedia() === 'download' ? data.label + '.' + data.type[0] : null"
        >

        <template v-if="isMedia() === 'img'">
            <Figure :data="img" :cls="img.cls" />
        </template>

        <template v-else-if="isMedia() == cls[cls.length - 1]">
            <h4 v-if="data.label" :class="cls[1]">
                <span :class="cls[cls.length - 1]" :aria-label="data.label"></span> 
                {{ data.label }}
            </h4>
        </template>

        <template v-else>
            {{ data.label }}
        </template>
        
    </a>

</template>

<script setup>

    import { defineProps } from 'vue';

    import Figure from '@/components/media/Figure.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        Cls: {
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
        images: ['jpg', 'jpeg', 'png', 'svg'],
        downloadFiles: ['docx', 'xlsx', 'csv'],
    }

    const data = props.data;
    const img = data.img ?? null;
    
    const classList = () => {

        const cls = props.Cls ? props.Cls : (Array.isArray(data.cls) ? data.cls : [data.cls]);
        cls.push('icon');

        return cls;
    };
    
    const cls = classList();
    
    const isExternal = () => {
        if (Array.isArray(data.type)) {
            return data.type.find(type => type === 'external');
            
        }
        else {
            return data.type === 'external';
        }
    };

    const isMedia = () => {

        if (!data.type && !img) return false;

        const search = data.type ? data.type[0] : img.type ?? null
        console.log("Search type:", search, "Data type:", data.type, "Image type:", img ? img.type : 'No image');

        const files = media.files.find(type => type === search);
        const images = media.images.find(type => type === search);
        const contact = media.contact.find(type => type === search);
        const download = media.downloadFiles.find(type => type === search);

        switch (search)
        {
            case files || contact:
                return cls[cls.length - 1];

            case download:
                return 'download';

            case images:
                return 'img';

            default:
                console.warn('Data type is illegal:', search, data);
                return false;
        }
    };

    //console.log("Link component loaded with data: ", data, img);
</script>