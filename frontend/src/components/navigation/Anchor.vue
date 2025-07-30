<template>
    <a
        :href="data.href"
        :class="cls[0]"
        :target="isExternal() ? '_blank' : '_self'"
        :rel="isExternal() ? 'noopener noreferrer' : null"
        :data-external-link="isExternal()? 'true' : 'false' "
        :download="isMedia() == 'download' ? data.label + '.' + data.type[0] : null"
        >

        <template v-if="isMedia() === 'img'">
            <Figure :data="img" />
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
    const img = props.img ?? null;
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
        if (!data.type) return false;

        if (!Array.isArray(data.type)) {
            console.warn('Data type is not an array:', data.type, data);
            return false;
        }
        if (Array.isArray(data.type)) {
            
            switch (data.type[0]) {

                case media.files.find(type => type === data.type[0]):
                    return cls[cls.length - 1];

                case media.contact.find(type => type === data.type[0]):
                    return cls[cls.length - 1];

                case media.downloadFiles.find(type => type === data.type[0]):
                    return 'download';

                case img && media.images.find(type => type === data.img.type):
                    {
                        return 'img';
                    }
                    console.warn('Image type is not supported:', data.img.type, data);

                default:
                    console.log(data.img)
                    console.warn('Data type is illegal:', data.type, data);
                    return false;
            }   
        }
    };

    //console.log("Link component loaded with data: ", data, img);
</script>