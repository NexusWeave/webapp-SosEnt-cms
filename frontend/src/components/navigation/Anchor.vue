<template>
    <a v-if ="data.href"
        :href="data.href"
        :class="data.cls"
        :data-external-link="isExternal()? 'true' : 'false' "
        :target="isExternal() ? '_blank' : '_self'"
        :rel="isExternal() ? 'noopener noreferrer' : null"
        :download="isMedia() == 'download' ? 'SosEnT_'+ data.name.replace(/\s+/g, '_').toLowerCase() + '.' + data.type[0] : null"
        >

         <template v-if="img && isMedia() == 'img'">
            <Img :data="img"/>
        </template>

        <template v-if="isMedia() =='file'">
            <h3 :class="data.type[0]">
                <span class="icon" :aria-label="data.name"></span> 
                {{ data.name }}
            </h3>
        </template>

        <template v-else>
            {{ data.name }}
        </template>
    </a>

</template>

<script setup>

    import Img from '@/components/media/Figure.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        }
    });

    const media = 
    {
        images: ['jpg', 'jpeg', 'png', 'svg'],
        files: ['pdf'],
        downloadFiles: ['docx', 'xlsx', 'csv'],
    }

    const data = props.data;
    const img = data.img? data.img : null;
    
    const isExternal = () => {
        if (Array.isArray(data.type)) {
            return data.type.find(type => type === 'external');
            
        }
        else {
            return data.type == 'external';
        }
    };

    console.log("Link component loaded with data: ", data, isExternal());
    
    const isMedia = () => {
        if (!data.type) return false;

        if (Array.isArray(data.type)) {
            switch (data.type[0]) {
                case media.files.find(type => type === data.type[0]):
                    return 'file';
                
                case media.downloadFiles.find(type => type === data.type[0]):
                    return 'download';

                case media.images.find(type => type === data.type[0]):
                    return 'img';

                default:
                    return false;
            }
            
        }
        else
        {
            switch (data.type)
            {
                case media.files.find(type => type === data.type):
                    return 'file';
                
                case media.downloadFiles.find(type => type === data.type):
                    return 'download';

                case media.images.find(type => type === data.type):
                    return 'img';

                default:
                    return false;
            }
        }
    };
</script>