import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
const toolbarOptions = [
  ['link', 'image', 'video'],
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
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

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };

  return (
    <ReactQuill
      theme="snow"
      onChange={setValue}
      placeholder="내용을 입력하세요"
      value={value || ''}
      modules={modules}
      formats={formats}
    />
  );
}

export default MyComponent;
