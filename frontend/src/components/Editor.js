import React, { useState } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const Editor = () => {
  const [processed, setProcessed] = useState("");
  const myTheme = {
    // Theme object to extends default dark theme.
  };

  return (
    <div>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: 'img/sampleImage.jpg',
            name: 'SampleImage',
          },
          theme: myTheme,
          menu: ['shape', 'filter'],
          initMenu: 'filter',
          uiSize: {
            width: '1000px',
            height: '700px',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
    </div>
  )
}

export default Editor;