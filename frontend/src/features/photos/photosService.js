const API_URL = "http://localhost:5000/api/photos";

// Uplaod and publish new photo
const publishPhoto = async (photo, token) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    body: JSON.stringify(photo),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 201) {
    const uploadedPhoto = await response.json();
    return uploadedPhoto;
  }
};

const photosService = {
  publishPhoto,
};

export default photosService;
