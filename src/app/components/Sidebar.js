"use client"
import styles from './Sidebar.module.css';
import dev from "../../image/ajay pabriya.jpg"
import Image from 'next/image';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import React  ,{useState ,useRef} from 'react';
export default function Sidebar() {
  const [selectedImage, setSelectedImage] = useState(null); // State to store uploaded image
  const fileInputRef = useRef(null); // Ref to the file input element

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      setSelectedImage(file); // Set the selected file in state
    }
  };

  // Trigger file input click when image is clicked
  const handleImageClick = () => {
    fileInputRef.current.click(); // Programmatically trigger the input
  };

  return (
    <section >
    <div className={styles.sidebar}>
      <div className={styles.avatar}>
      <div onClick={handleImageClick} className="cursor-pointer">
        <Image
          src={selectedImage ? URL.createObjectURL(selectedImage) : dev}
          alt="Avatar"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      {/* Hidden file input, triggered by clicking on the image */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }} // Hide the input element
      />

    
        <br/>
        <h2 className='title py-2 px-2'><a href='https://ajaypabriya.vercel.app/'>Ajay Kumar</a></h2>
        <br/>
        <h2 className='title py-2 px-2  font-bolds' > Frontend Developer</h2>
        <br/>
        <h2 className='title py-2 px-2'><a href='https://drive.google.com/file/d/1GcRd5eDB49PGTm3okIe9_ImDV0aBgrpq/view?usp=sharing'> Download CV</a> </h2>
      </div>
  

    
      <div className={styles.contactInfo}>
        <div  className='flex gap-2'>
          <span  className='icon-phone'><MdOutlineMailOutline className='fonts'/></span>
        <span>Email: dev4ajaykumar@gmail.com</span>
        </div>
        <br/>
        <div  className='flex gap-2'>
          <span className='icon-phone'>
            <IoIosPhonePortrait className='fonts'/>
          </span>
          <span>Phone:</span>
        <span> +917404701513</span>
        </div>
        <br/>
        <div  className='flex gap-2'>
          <span className='icon-phone'>
            <IoLocationOutline className='fonts'/>
          </span>
          <span>Location:</span>
        <span> Hisar,Haryana</span>
        </div>
      </div>
    </div>
    </section>
  );
}
