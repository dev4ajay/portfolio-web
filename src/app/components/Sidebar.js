import Link from 'next/link';
import styles from './Sidebar.module.css';
import dev from "../../image/my-avatar.png"
import Image from 'next/image';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <section >
    <div className={styles.sidebar}>
      <div className={styles.avatar}>
        <Image src={dev} alt="Avatar" />
        <br/>
        <h2 className='title py-2 px-2'><a href='https://ajaypabriya.vercel.app/'>Ajay Kumar</a></h2>
        <br/>
        <p className='title py-2 px-2'> <a href='https://aspire-main.vercel.app/'>Frontend Developer</a></p>
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
