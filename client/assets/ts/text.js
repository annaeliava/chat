import 'medium-editor';

var editor = new MediumEditor('.editable', {
    toolbar: {
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false
    }
});

var editor = new MediumEditor('.editable', {
    toolbar: false
}); // to disable the toolbar

var editor = new MediumEditor('.editable', {
    placeholder: {
        text: 'Type your text',
        hideOnClick: true
    }
});

var editor = new MediumEditor('.editable', {
    placeholder: false
});

var editor = new MediumEditor('.editable', {
    keyboardCommands: {
        commands: [
            {
                command: 'bold',
                key: 'B',
                meta: true,
                shift: false,
                alt: false
            },
            {
                command: 'italic',
                key: 'I',
                meta: true,
                shift: false,
                alt: false
            },
            {
                command: 'underline',
                key: 'U',
                meta: true,
                shift: false,
                alt: false
            }
        ],
    }
});

var editor = new MediumEditor('.editable', {
    keyboardCommands: false
});