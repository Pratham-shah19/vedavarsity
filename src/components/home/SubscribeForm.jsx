import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const fields = [
  {
    label: 'First Name',
    maxLength: 30,
    fieldName: 'firstName',
    type: 'text'
  },
  {
    label: 'Last Name',
    maxLength: 30,
    fieldName: 'lastName',
    type: 'text'
  },
  {
    label: 'Email',
    maxLength: 50,
    fieldName: 'email',
    type: 'email'
  }
  // {
  //   label: 'Phone',
  //   maxLength: 10,
  //   fieldName: 'phone',
  //   type: 'tel'
  // }
];

const SubscribeForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data, e) => {
    setLoading(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        attributes: {
          FIRSTNAME: data.firstName,
          LASTNAME: data.lastName,
          SMS: `+${data.code}${data.phone}`
        },
        listIds: [15],
        updateEnabled: false,
        email: data.email
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code == 400) {
          toast.error(data.message);
          setLoading(false);
        } else {
          toast.success('Successfully Subscribed');
          e.target.reset();
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error('Please check your network');
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 rounded-lg shadow-lg space-y-7 shadow-mist lg:p-9">
      <h3 className="text-xl font-bold text-primary lg:text-2xl">Subscribe to our magazine</h3>
      {fields.map((field) => (
        <label
          htmlFor={field.fieldName}
          className="block font-semibold capitalize"
          key={field.fieldName}>
          {field.label}
          <input
            type={field.type}
            name={field.fieldName}
            id={field.fieldName}
            placeholder={`Enter your ${field.label}`}
            className="block w-full p-2 mt-1 font-medium border-2 border-black rounded-md outline-none focus:border-primary "
            required
            maxLength={field.maxLength}
            {...register(field.fieldName)}
          />
        </label>
      ))}

      <label htmlFor="phone-admin" className="block font-semibold capitalize">
        Phone
        <div className="relative flex">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            +
          </div>
          <input
            name={'code'}
            id={'code'}
            required
            type="number"
            className="bg-0 inline-flex w-[22%] appearance-none items-center rounded-l-md border-2 border-r-0 border-black p-2 px-3 pl-7 text-sm font-medium text-gray-900 outline-none focus:border-primary "
            placeholder="Code"
            {...register('code')}
          />
          <input
            name={'phone'}
            id={'phone'}
            type="number"
            required
            className="flex-1 block w-full min-w-0 p-2 font-medium border-2 border-black rounded-none rounded-r-lg outline-none appearance-none focus:border-primary "
            placeholder="Enter your Mobile Number"
            {...register('phone')}
          />
        </div>
      </label>
      {/*TODO: implement Loader */}
      <button
        type="submit"
        className={`rounded-md bg-secondary py-2 px-8 font-semibold hover:bg-opacity-90 ${
          loading && 'animate-pulse'
        }`}
        disabled={loading}>
        {loading ? 'Sending...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default SubscribeForm;
