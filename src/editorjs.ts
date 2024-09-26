import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";

new EditorJS({
    holder: 'editorjs',
    tools: {
        header: {
            class: Header,
            config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3],
            },
        },
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: 'http://localhost:8080',
                }
            }
        },
    },
    i18n: {
        messages: {
            toolNames: {
                "Text": "Texte",
            }
        },
    },
});
