
<template>
  
</template>

<script setup>
import { ref } from 'vue';

const data = reactive (
  {
    news:
    [
      {
        id: 0,
        title: "Nyhet 1",
        date: "2023-10-01",
        image: "https://example.com/image1.jpg",
      },
      {
        id: 1,
        title: "Nyhet 2",
        date: "2023-10-02",
        image: "https://example.com/image2.jpg",
      },
      {
        id: 2,
        title: "Nyhet 3",
        date: "2023-10-03",
        image: "https://example.com/image3.jpg",
      },
    ],
    files:
    [
      {
        id: 0,
        title: "File 1",
        link: "https://example.com/file1.pdf",
      },
      {
        id: 1,
        title: "File 2",
        link: "https://example.com/file2.pdf",
      },
    ],
    content:
    [
      ""
    ],

    contactInfo:
    [
      {
        id: 0,
        image: "",
        name: "Rune. V. Kvarme",
        title: "General sekretær",
        phone: "",
        mail: "",
      },
      {
        id: 1,
        image: "",
        name: "Helle. V. Kvarme",
        title: "Styreleder",
        phone: "",
        mail: "",
      },
    ],

    partners:
    [
      {
        id: 0,
        image: "",
        name: "Partner 1",
        link: "https://example.com/partner1"
      },
      {
        id: 1,
        image: "",
        name: "Partner 2",
        link: "https://example.com/partner2"
      },
    ],
  
    members:
    [
      {
        id: 0,
        name: "Member 1",
        link: "https://example.com/member1"
      },
      {
        id: 1,
        name: "Member 2",
        link: "https://example.com/member2"
      },
    ],

  });

</script>
