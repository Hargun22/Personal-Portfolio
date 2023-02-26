import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useForm, Resolver } from "react-hook-form";
import useWindowDimensions from "../hooks/useWindowDimensions";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Contact = ({ setSelectedPage }: ContactProps) => {
  const { height, width } = useWindowDimensions();
  const ref = useRef<HTMLElement>(null);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (e: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const scrollHandler = () => {
    const info = ref?.current?.getBoundingClientRect();
    const top = info?.top;

    if (top) {
      const absoluteTop = Math.abs(top);
      if (absoluteTop < height / 3) {
        setSelectedPage("contact");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section id="contact" ref={ref}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={variants}
        className="py-16 p-12 sm:p-16 md:p-24 flex flex-col justify-center"
      >
        <div className="justify-center">
          <h1 className="text-3xl xs:text-4xl md:text-6xl font-bold text-center">
            Get in touch!
          </h1>
        </div>
        <div className="flex flex-col justify-between sm:mt-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10"
          >
            <form
              target="_blank"
              onSubmit={(e) => onSubmit(e)}
              action="https://formsubmit.co/b41e23e5b7095541d624dcd6504de05e"
              method="POST"
              className="flex flex-col justify-center items-center text-white"
            >
              <input
                className="w-5/6 bg-slate-400/20 font-semibold p-3"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-red mt-3">
                  {errors.name.type === "required" && "This is required."}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 100 characters."}
                </p>
              )}
              <input
                className="w-5/6 bg-slate-400/20 font-semibold p-3 mt-10"
                type="text"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-3">
                  {errors.email.type === "required" && "This is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-5/6 bg-slate-400/20 font-semibold p-3 mt-10"
                rows={10}
                cols={50}
                placeholder="Enter your message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-3">
                  {errors.message.type === "required" && "This is required."}
                  {errors.message.type === "maxLength" &&
                    "Message too long. Max length is 2000 characters."}
                </p>
              )}
              <input type="hidden" name="_captcha" value="false"></input>
              <button
                type="submit"
                className="p-5 bg-blue rounded-full hover:bg-slate-400/20  transition duration-300 mt-10"
              >
                Send message!
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
