import {
    Bold,
    ClassicEditor,
    Essentials,
    Italic,
    Paragraph,
    Heading,
    Image,
    ImageInsert, Link
} from "ckeditor5";
import coreTranslations from 'ckeditor5/translations/fr.js';
import 'ckeditor5/ckeditor5.css';

const ckeditorElement = document.getElementById("ckeditor");
ClassicEditor.create(ckeditorElement as HTMLElement, {
    plugins: [Essentials, Paragraph, Bold, Italic, Heading, Image, ImageInsert, Link],
    toolbar: ['bold', 'italic', '|', 'heading', '|', 'insertImage', 'link'],
    link: {
        decorators: {
            openInNewTab: {
                mode: 'manual',
                label: 'Open in a new tab',
                attributes: {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            }
        }
    },
    language: {
        ui: 'fr',
    },
    translations: [
        coreTranslations
    ],
}).then(r => {
    console.log(r);
});
