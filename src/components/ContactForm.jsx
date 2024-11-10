
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { IoIosSend } from 'react-icons/io';

const ContactForm = () => {
    const formRef = useRef();

    const sendMessage = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6j95g87', 'template_bo9vrce', formRef.current, '6SFcC3WU6Dw2VDq51')
            .then((result) => {
                console.log('Success', result.text);
                e.target.reset();
                toast.success("Thanks for Sending Your Message", {
                    position: "top-right"
                });
            }, (error) => {
                console.log('Failed', error.text);
            });

    }
    return (
        <div id="contact" className="bg-blue-800 py-10">
            <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-white text-3xl uppercase'>Send Your Thoughts</h1>
                </div>
                <div className="hero mt-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form ref={formRef} className="card-body" onSubmit={sendMessage}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name:</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email:</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email@gmail.com" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Message:</span>
                                    </label>
                                    <textarea name="message" type="text" placeholder="your message" className="input input-bordered" required></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn border-0 bg-blue-500 text-white hover:bg-blue-900" type='submit'>Send Message <IoIosSend className='text-white text-xl ' /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
