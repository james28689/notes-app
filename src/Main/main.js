import "./Main.css";

import Calendar from "../CalendarView/calendar";
import React, {useContext} from 'react';
import {Context} from '../store';
import { Editor } from '@tinymce/tinymce-react';

function Main({ children }) {

    const [state] = useContext(Context);

    return (
        <div id="Main">

            {state.selected === 0 &&
                <div>

                {/* <h2>
                Notes
                </h2>
                <p>This is the start of a design based off <a href="https://cdn.dribbble.com/users/65090/screenshots/14082104/media/8349b8ac58729f7ef4ae9b784081a824.png">this</a></p>
                <p>Use <a href="https://www.tiny.cloud/docs/quick-start/">this</a></p> */}
                


                <Editor
                    apiKey="nluqabfk7ksn0arrulvq7smk1c0c64dnvy3iazhg6ajabrhx"
                    initialValue={(state.openFile !== null) ? state.NotesData.find(x => x.id === state.openFile).content : "<h1>Welcome to Notes</h1><p>This is a rich text editor, with support for slash commands.</p><p>You can select a file in the file tree to view its content, or click on folders in the tree to collapse them."}
                    init={{
                        menubar: false,
                        skin_url: `/skins/ui/custom-dark`,
                        content_css: `/skins/content/custom-dark/content.min.css`,
                        icons: "thin",
                        content_style: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,700&display=swap');body { font-family: 'Montserrat', sans-serif; } h1,h2,h3,h4,h5,h6 { font-family: 'Montserrat', sans-serif; font-weight: 700; }",



                        external_plugins: {
                            slashcommands: `/slashcommands/plugin.js`
                        },


                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor slashcommands',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    }}
                />
                
                </div>
            }

            {state.selected === 1 &&
                <Calendar />
            }
        </div>
    )
}

export default Main;