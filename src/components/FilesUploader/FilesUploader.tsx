import React, { useRef, useState } from 'react';
import styles from './FilesUploader.module.scss';

export const FilesUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileList | null | undefined>();
  const refInput = useRef<HTMLInputElement>(null);

  const handleClickOnFilesUploader = () => {
    setUploadedFiles(refInput.current?.files);
    return refInput.current?.click();
  };

  return (
    <div className={styles.FilesUploader} onClick = {handleClickOnFilesUploader}>
      <p>Click here for uploading files</p>
      <input ref={refInput} type='file' multiple className={styles.FilesUploader_NativeInput}/>
      {uploadedFiles && Object.values(uploadedFiles).map((file, index) => <p key={index}>{file.name}</p>)}
    </div>
  );
}
