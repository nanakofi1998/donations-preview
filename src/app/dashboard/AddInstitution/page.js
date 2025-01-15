'use client';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { registerInstitution, reset } from "../../lib/features/institutions/institutionSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddInstitution = () => {
    const dispatch = useDispatch();

    const [institution_name, setName] = useState("");
    const [institution_email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");
    const [institution_phone, setPhone] = useState("");
    const [institution_certificate, setCertificate] = useState("");
    const [institution_license, setLicense] = useState("");
    const [contact_person, setContactPerson] = useState("");
    const [contact_person_email, setContactPersonEmail] = useState("");
    const [contact_person_phone, setContactPersonPhone] = useState("");
    const [contact_person_position, setContactPersonPosition] = useState("");

    const { isLoading, isError, isSuccess, message,institution } = useSelector((state) => state.institution);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            toast.success("Institution Created Successfully");
            setName('');
            setEmail('');
            setPassword('');
            setRePassword('');
            setPhone('');
            setCertificate('');
            setLicense('');
            setContactPerson('');
            setContactPersonEmail('');
            setContactPersonPhone('');
            setContactPersonPosition('');
        }
        dispatch(reset());
    }, [isError, isSuccess, message,institution, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== re_password) {
            toast.error("Passwords do not match");
        } else {
            const formData = new FormData();
            formData.append('institution_name', institution_name);
            formData.append('institution_email', institution_email);
            formData.append('password', password);
            formData.append('institution_phone', institution_phone);
            formData.append('institution_certificate', institution_certificate);
            formData.append('institution_license', institution_license);
            formData.append('contact_person', contact_person);
            formData.append('contact_person_email', contact_person_email);
            formData.append('contact_person_phone', contact_person_phone);
            formData.append('contact_person_position', contact_person_position);

            dispatch(registerInstitution(formData));
        }
    }

    return (
        <>
            <form id="createUserModal" tabIndex="-1" aria-hidden="true" className="p-4 w-full lg:m-auto max-w-full" onSubmit={handleSubmit}>
                <div className="relative w-full lg:w-[70vw] max-w-full mx-auto">
                    <div className="relative bg-white rounded-2xl shadow">
                        <div className="flex items-start justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Create An Institution
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-900">Institution Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Institution Name</label>
                                        <input type="text" value={institution_name} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setName(e.target.value)} placeholder="Institution Name" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Institution Phone Number</label>
                                        <input type="text" value={institution_phone} id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                        <input type="email" value={institution_email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Institution Email" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input type="password" value={password} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"  required/>
                                    </div>
                                    <div>
                                        <label htmlFor="re_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                        <input type="password" value={re_password} id="re_password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setRePassword(e.target.value)} placeholder="Confirm Password" required/>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="institution_license" className="block mb-2 text-sm font-medium text-gray-900">Upload Institution License</label>
                                            <input type="file" id="institution_license" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setLicense(e.target.files[0])} />
                                        </div>
                                        <div>
                                            <label htmlFor="institution_certificate" className="block mb-2 text-sm font-medium text-gray-900">Upload Institution Certificate</label>
                                            <input type="file" id="institution_certificate" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setCertificate(e.target.files[0])}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-900">Contact Person Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="contact_person" className="block mb-2 text-sm font-medium text-gray-900">Contact Person</label>
                                        <input type="text" value={contact_person} id="contact_person" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setContactPerson(e.target.value)} placeholder="Enter Contact Person Name" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="contact_person_email" className="block mb-2 text-sm font-medium text-gray-900">Contact Person Email</label>
                                        <input type="email" value={contact_person_email} id="contact_person_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setContactPersonEmail(e.target.value)} placeholder="Enter Contact Person Email" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="contact_person_phone" className="block mb-2 text-sm font-medium text-gray-900">Contact Person Phone</label>
                                        <input type="text" value={contact_person_phone} id="contact_person_phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setContactPersonPhone(e.target.value)} placeholder="Enter Contact Person Phone Number" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="contact_person_position" className="block mb-2 text-sm font-medium text-gray-900">Contact Person Position</label>
                                        <input type="text" value={contact_person_position} id="contact_person_position" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" onChange={(e) => setContactPersonPosition(e.target.value)} placeholder="Enter Contact Person Position" required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
                            <button type="submit" className="text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save All</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddInstitution;
