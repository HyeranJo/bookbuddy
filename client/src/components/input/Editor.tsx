import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
  ['link', 'image', 'video'],
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'background',
  'color',
  'link',
  'image',
  'video',
  'width',
];

function MyComponent() {
  const [value, setValue] = useState('');
  // console.log(value);
  const quillRef = useRef(null);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      let file;
      if (input.files) {
        file = input.files[0];
        console.log(file);
      }

      try {
        // const res = await imageApi({ img: file });
        // const imgUrl = res.data.imgUrl;
        let editor;
        if (quillRef.current) {
          editor = (quillRef.current as any).getEditor();
        }
        const range = editor.getSelection();
        // editor.insertEmbed(range.index, 'image', imgUrl);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  return (
    <ReactQuill
      theme="snow"
      onChange={setValue}
      placeholder="내용을 입력하세요"
      value={value || ''}
      modules={modules}
      formats={formats}
      ref={quillRef}
    />
  );
}

export default MyComponent;
