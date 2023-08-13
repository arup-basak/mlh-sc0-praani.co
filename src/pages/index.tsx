import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Heading from "@/components/Heading";
import Image from 'next/image';
import bgImg from "public/dogBG.png";
import catImg from 'public/cat.jpg';
import dogImg from 'public/dog.jpg';

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome To FURTASTIC</title>
      </Head>
      <section>
        <div
          style={{
            backgroundImage: `url(${bgImg.src})`,
            width: '100%',
            minHeight: '90vh',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.span
            className="bg-[#f07167] py-[2px]"
            initial={{
              y: 20,
              scale: 0.5,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
          >
            <Heading text="PRAANI" className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem]" />
          </motion.span>
        </div>
      </section>
      <section className="bg-[#fdfcdc]">
        <div className="w-full lg:w-7/12 text-lg lg:text-xl py-5 px-4 lg:px-8">
          <Heading 
          text="Emergency Aid for All!" className="my-2"/>
          <div className="py-2">
            Welcome to PetMed, where your pets&apos; health matters. Our services cater to cats, dogs, fish, and birds.
          </div>
          <div className="py-2">
            Got a pet emergency on your hands? Worry not! We&apos;ve got emergency ambulance services and hospital bookings based on your live location.
          </div>
          <div className="py-2">
            Dive into our services including hospitals, pathology, and a dedicated store. Sign up and access your profile to make the most of PetMed.
          </div>
        </div>
      </section>
      <section className="bg-[#fdfcdc]">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
          <div className="lg:mx-4 xl:mx-20">
            <Image
              src={dogImg}
              className="rounded-3xl"
              alt="doggy"
              layout="responsive"
              width={400}
              height={300}
            />
          </div>
          <div className="py-5 px-4 lg:px-8">
            <Heading text="Why Choose PetMed?" className="text-3xl pb-2" />
            <Heading text="Your Pets Deserve the Best!" className="text-4xl pb-4" />
            <div className="text-base lg:text-lg">
              Wave goodbye to pet health uncertainties! Our experienced vets, partnered healthcare companies, and glowing customer reviews will put your mind at ease.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
          <div className="py-5 px-4 lg:px-8">
            <Heading text="Got Questions? We’ve Got Answers!" className="text-4xl pb-2" />
            <div className="text-base lg:text-lg">
              Unleash your curiosity in our FAQs section, where we clear up your doubts and keep your pets happy and healthy.
            </div>
          </div>
          <div className="lg:mx-4 xl:mx-20">
            <Image
              src={catImg}
              className="rounded-3xl"
              alt="pussy cat"
              layout="responsive"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
