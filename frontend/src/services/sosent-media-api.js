//  This file is an Api simulation of the SoSEnT web application project.
import { generateHexID } from '@/utils/utils.js';

// API simulation
const mediaContent = {
    media:
    [
    ],
}

export const fetchMedia = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(mediaContent.media);}, 10);
    })
}