const images = [
  { src: 'https://cdn.pidoras.xyz/assets/images/advertisements/ad1.png', link: 'https://nigex.xyz' },
  { src: 'https://cdn.pidoras.xyz/assets/images/advertisements/ad2.jpeg', link: 'https://nigex.xyz' },
  { src: 'https://cdn.pidoras.xyz/assets/images/advertisements/ad3.jpeg', link: 'https://nigex.xyz' },
  { src: 'https://cdn.pidoras.xyz/assets/images/advertisements/ad4.jpg', link: 'https://nigex.xyz' },
  { src: 'https://cdn.pidoras.xyz/assets/images/advertisements/ad5.jpeg', link: 'https://nigex.xyz' },
  { src: 'https://cdn.pidoras.xyz/assets/images/advertisements/ad6.jpg', link: 'https://nigex.xyz' },
  { src: 'https://cdn.pidoras.xyz/assets/images/advertisements/ad7.png', link: 'https://nigex.xyz/vklog' }
];
        
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = images[randomIndex];

document.getElementById('randomImage').src = selectedImage.src;
document.getElementById('randomImageLink').href = selectedImage.link;

// More ads soon
