interface ChnageImgClass {
    decodedImage: string;
  }
  
  const changeImageToBase64 = function(this: ChnageImgClass, file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      // When the file reader has finished reading the file
      // Set the base64 representation of the image
      this.decodedImage = reader.result as string;
    };
    // Read the file as a data URL (base64 encoded)
    reader.readAsDataURL(file);
  };
  