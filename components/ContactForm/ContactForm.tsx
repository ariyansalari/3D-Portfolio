"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren:0.2
    },
  },
};
const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};
export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendEmail = (params:any) => {
    const toastId=toast.loading('Sending your message please wait...')
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMLATE_ID as string,
        params,

        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // you can not send more than 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
       toast.success(' I will get back to you soon thanks for your message <3',{
        id:toastId
       })
        },
        (error) => {
       toast.error('There was an error sending your message, please try agian later!',{
        id:toastId
       })

        }
      );
  };
  const onSubmit = (data:any) => {
    const templateParams = {
      to_name: "ariyansalari",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(data);
  };

  return (
    <>
    <Toaster richColors={true}/>
    
    <motion.form
       variants={container}
       initial="hidden"
       animate="show"
      className="max-w-md w-full flex flex-col itemx-center space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <motion.input
      variants={item}
        type="text"
        placeholder="name"
        {...register("name", { required: 'this field is required!' ,
            minLength:{
                value:3,
                message:"Name should be atleast 3 characters long."
            }
        })}
        className="w-full p-2  rounded-md shadow-lg text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.name && <span className="inline-block self-start text-accent">{errors.name.message as string}</span>}
      <motion.input
      variants={item}

        type="email"
        placeholder="email"
        {...register("email", { required: 'this field is required!' })}
        className="w-full p-2  rounded-md shadow-lg text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.email && <span className="inline-block self-start text-accent">{errors.email.message as string}</span>}

      <motion.textarea
      variants={item}
        placeholder="message"
        {...register("message", { maxLength: {
            value:500,
            message:"your messsage should be less than 500"
        }, minLength: {
            value:50,
            message:"your messsage should be more than 50"
        }, required: 'this field is required!' })}
        className="w-full p-2  rounded-md shadow-lg text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.message && <span className="inline-block self-start text-accent">{errors.message.message as string}</span>}

      <motion.input
      variants={item}

        value={"Cast your message!"}
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        type="submit"
      />
    </motion.form>
    </>
  );
};
