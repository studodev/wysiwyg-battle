import { Bold, ClassicEditor, Essentials, Font, Italic, Paragraph } from "ckeditor5";
import 'ckeditor5/ckeditor5.css';

const ckeditorElement = document.getElementById("ckeditor");
ClassicEditor.create(ckeditorElement as HTMLElement, {
    plugins: [Essentials, Bold, Italic, Font, Paragraph],
    toolbar: [
        'undo', 'redo', '|', 'bold', 'italic', '|',
        'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
    ]
}).then(r => {
    console.log(r);
});
