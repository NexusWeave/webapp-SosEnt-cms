<template>
    <a
        :href="data.href"
        :class="data.cls"
        :target="isExternal() ? '_blank' : '_self'"
        :rel="isExternal() ? 'noopener noreferrer' : null"
        :data-external-link="isExternal()? 'true' : 'false' "
        :download="isMedia() == 'download' ? 'SosEnT_'+ data.name.replace(/\s+/g, '_').toLowerCase() + '.' + data.type[0] : null"
        >

        <template v-if="isMedia() === 'img'">
            <Figure :data="img" />
        </template>

        <template v-else-if="isMedia() == 'icon'">
            <h3 v-if="media.files.find(type => type === data.type[0])":class="data.type[0]? data.type[0] : 'default'">
                <span class="icon" :aria-label="data.name"></span> 
                {{ data.label }}
            </h3>
            <span :class="data.type[0] ? data.type[0]:'default'" v-else>
                <span class="icon" :aria-label="data.name"></span> 
                {{ data.label }}
            </span>
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
    const img = data.img? data.img : null;
    
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
                    return 'icon';

                case media.contact.find(type => type === data.type[0]):
                    return 'icon';

                case media.downloadFiles.find(type => type === data.type[0]):
                    return 'download';

                case 'img':
                    if (media.images.find(type => type === data.img.type)) {
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