import Quill from "quill";
import "quill/dist/quill.snow.css";

new Quill('#quill', {
    modules: {
        toolbar: ['bold', 'italic', { 'header': [1, 2, 3, false] }, 'image', 'link'],
    },
    theme: 'snow',
});
