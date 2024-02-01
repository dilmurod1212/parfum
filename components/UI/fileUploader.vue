<template>
  <div>
    <h4 class="text-start left-5 relative text-gray-500">Подробно</h4>
    <textarea
      v-model="description"
      type="text"
      maxlength="500"
      placeholder="Напишите подробное описание ошибки"
      class="font-medium min-h-[130px] text-base text-dark placeholder:text-gray-500 bg-gray-200 rounded-md flex-grow py-2.5 px-3 outline-none resize-none w-[90%] mt-2"
    ></textarea>

    <h4 class="text-start mt-1 left-5 relative text-gray-500">Загрузить фото</h4>
    <div
      v-if="!uploading"
      class="font-medium relative left-5 border-2 border-dashed border-red min-h-[130px] flex justify-center items-center text-base text-dark bg-red-200 rounded-md py-2.5 px-3 w-[90%] mt-2"
    >
      <div>
        <p class="text-gray-600">
          Перетащите изображение сюда или нажмите кнопку
          <span class="text-gray-400"> (jpg, png)</span>
        </p>
        <center>
          <form action="" class="w-[145px] overflow-hidden">
            <input
              type="file"
              :accept="accept"
              @change="uploadFunction"
              class="hover:file:cursor-pointer file:px-5 file:py-[10px] file:rounded-md file:text-sm file:bg-red file:text-white file:hover:bg-red-extra file:red-shadow file:border-none"
            />
          </form>
        </center>
      </div>
    </div>

    <div
      v-if="uploading"
      class="transition-200 mt-5 flex flex-wrap items-center justify-start gap-2 duration-500 ease-in-out w-[90%] relative left-5"
    >
      <div class="w-[31%]">
        <div class="w-[100px] h-[100px] relative rounded-md object-cover">
          <img
            :src="uploading"
            alt=""
            class="object-cover w-full h-full rounded-sm"
          />
          <button
            @click="deleteImg"
            class="right-[-9px] absolute top-[-9px] p-[1px] rounded-full flex items-center justify-center border-[2px] border-slate-300 bg-white"
          >
            <i class="icon-trash text-slate-400"></i>
          </button>
        </div>
      </div>
    </div>

    <button @click="submitForm">Submit</button>
  </div>
</template>

<script setup lang="ts">

import axios from 'axios';

interface Props {
  accept: {
    type: string;
    required: true;
  };
}

const description = ref('');
const uploading = ref('');

const deleteImg = () => {
  uploading.value = null;
};

const uploadFunction = (event) => {
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => {
      uploading.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const submitForm = async () => {
  try {
    const formData = new FormData();
    formData.append('description', description.value);
    if (uploading.value) {
      formData.append('image', uploading.value);
    }

    const response = await axios.post('your-server-endpoint', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Server response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

