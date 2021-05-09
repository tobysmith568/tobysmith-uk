import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import styled from "styled-components";
import CustomEditor from "ckeditor5-custom-build/build/ckeditor";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  if (value === null) return null;

  return (
    <Wrapper>
      <CKEditor
        editor={CustomEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
