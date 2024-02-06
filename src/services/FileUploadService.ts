import http from "../http-common";

const upload = (file: File, onUploadProgress: (progressEvent: any) => void): Promise<any> => {
  let formData = new FormData();
  console.log(formData);
  formData.append("image[]", file);

  return http.post("http://127.0.0.1:8000/api/v1/items/3/uploadImage", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      'Authorization': 'Bearer ' + '3STcsV0e5DvWC1jOMu16BU7r6xShhCxW0lXLqani56b11526'
    },
    onUploadProgress,
  });
};

const getFiles = () : Promise<any> => {
  return http.get("http://127.0.0.1:8000/storage/images");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
