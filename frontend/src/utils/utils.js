import { ref } from 'vue';

export function generateHexID()
{    
    const ch = '0123456789abcdef';
    
    const result = ref('');
    
    const n = ch.length

    for (let i = 0; i < n; i++) {
        result.value += ch.charAt(Math.floor(Math.random() * n));
    }
    return result.value;
}