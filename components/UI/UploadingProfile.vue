<template>
  <div>
      <div class="flex items-center justify-start gap-4">
           <div class="rounded-[50%] border-[2px] group cursor-pointer  border-slate-200 object-cover w-[100px] h-[100px] relative bg-slate-200">
                 <img 
                 v-if="!uploading"
                 src="/images/profile-user.png" alt=""
                 class="object-cover w-[120px] h-full rounded-[50%] opacity-50"
                 >
                 
                  <img
                  v-if="uploading"
                    :src="uploading"
                    alt=""
                    class="object-cover w-[120px] h-full rounded-[50%] opacity-100"
                />   

                 <button
                    @click="deleteImg"
                    class="p-[5px]  opacity-0 group-hover:opacity-100 transition-200 rounded-[50%] absolute top-[35%] left-[35%] flex items-center justify-center text-red text-xl bg-white"
                >
                    <i class="icon-trash text-red text-xl"></i>
                </button>

              
           </div>

             
            <div class="flex justify-between items-center gap-1 transition-400 duration-500 out-in text-gray-600 hover:text-red cursor-pointer">
            <form action="" class="w-[145px] overflow-hidden flex items-center justify-start">
            <i class="icon-edit-square"></i>
            <input
              type="file"
              :accept="accept"
              @change="uploadFunction"
              class="hover:file:cursor-pointer  file:py-[10px] file:rounded-md file:text-md file:bg-white file:text-gray-500  file:red-shadow file:border-none file:placeholder:Изменить фото"
            />
          </form>
            </div>
       </div>
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
