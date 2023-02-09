import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Moment from 'moment';
import { useNavigate } from 'react-router-dom';
const insertTime = new Date().getTime();
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const DetailsModal = ({ refetch, product }) => {
    // const currentDate = new Date();
    const formatDate = Moment().format('DD-MM-YYYY');
    const [closeModal, setCloseModal] = useState(false);

    // const handleBooking = event => {
    //     // setCloseModal(false)
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const productName = form.productName.value;
    //     const img = form.img.value;
    //     const email = form.email.value;
    //     const sellerName = form.sellerName.value;
    //     const date = form.date.value;
    //     const price = form.price.value;
    //     const phone = form.phone.value;
    //     const location = form.location.value;

    //     const booking = {
    //         name,
    //         email,
    //         productId: product._id,
    //         productName,
    //         img,
    //         date,
    //         sellerName,
    //         paid: false,
    //         phone,
    //         price,
    //         location,
    //         time,
    //         insertTime
    //     }

    //     fetch('https://cricket-lover-server-site-s-m-zubayer.vercel.app/bookings', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(booking)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged) {
    //                 // setBooking(null);
    //                 form.reset();
    //                 toast.success('Booking Confirmed Successfully');

    //             }
    //             else {
    //                 // setBooking(null);
    //                 toast.error(data.message);
    //             }

    //         })
    // }
    return (
        <>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className={`modal ${closeModal ? 'hidden' : 'visible'} `}>
                <div className="modal-box relative">
                    <label htmlFor="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">Booking Product: {product?.ProductName}</h3> */}
                    {/* <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'> */}
                    <div className="flex flex-col max-w-lg p-6 bg-white overflow-hidden rounded-lg shadow-md text-gray-700">
                        <div className="flex space-x-4 mb-3">

                            <div className="flex flex-col w-full">
                                <div className="flex justify-between relative">
                                    <h3 className="text-md font-semibold">{product?.productName}</h3>


                                    <p className="text-xs lg:text-sm">Post: {date}</p>
                                </div>
                                <div className="flex justify-between w-full">
                                    <p className="text-xs lg:text-sm">Location: {product?.location}</p>
                                </div>
                                <p className="text-sm text-left">Contact: {product?.phone}</p>

                            </div>
                        </div>
                        <div>
                            <img src={product?.image} alt="" className="object-cover rounded-lg w-full mb-4 h-56 " />
                            <h2 className="mb-1 text-xl font-semibold">{product?.productName}</h2>
                            <p className="text-sm text-gray-700">{product?.description}</p>
                        </div>
                        {/* <div className="flex justify-between w-full mt-3">
                            <p className="text-sm  text-left mr-3">Condition: {product?.condition}</p>
                            <p className="text-sm mr-3">Damage: {product?.quality}</p>
                        </div> */}
                        <div className="flex justify-between w-full mb-3">
                            {/* <p className="text-base  text-left mr-3">Original Price:{product?.originalPrice}$</p> */}
                            <p className="text-base font-semibold mr-3">Price: {product?.price}$</p>

                            <h3 className="flex font-semibold items-center">
                                Rating:
                                <div className="flex ml-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                                </div>
                            </h3>
                        </div>
                        {/* <p className="text-sm text-left mb-5">Reason: <span className="text-sm">{product?.sellReason}</span></p> */}

                    </div>

                    {/* <input name="productName" type="text" defaultValue={product?.productName} disabled placeholder="Item name" className="input w-full input-bordered" />
                        <input name="productName" type="text" defaultValue={product?.productName} disabled placeholder="Item name" className="input w-full input-bordered" />
                        <input name="sellerName" defaultValue={product?.name} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="img" type="text" defaultValue={product?.image} disabled placeholder="Product Img" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={product?.resalePrice} disabled placeholder="Price" className="input w-full input-bordered" />
                        <input name="date" type="text" defaultValue={formatDate} disabled placeholder="Booking date" className="input w-full input-bordered" />
                        <input name="time" type="text" defaultValue={time} disabled placeholder="Booking date" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br /> */}

                    {/* <input onClick={() => setCloseModal(closeModal)} className='btn btn-accent w-full' type="submit" value="Submit" /> */}
                    {/* </form> */}
                </div>
            </div>
        </>
    );
};

export default DetailsModal;