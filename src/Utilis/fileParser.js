export const FileParser = (file) => {
  return new Promise((resolve, rejecet) => {
    let fileRender = new FileReader();

    fileRender.readAsDataURL(file);
    fileRender.onload = () => resolve(fileRender.result);
  });
};
