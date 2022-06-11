import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  async function onSubmitForm(values: any) {
    let config = {
      method: 'post',
      url: `../api/sendForm`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    }

    console.log(values)

    try {
      const response = await axios(config)
      console.log(response)
      if (response.status == 200) {
        reset()
      }
    } catch (err) {}
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl">Contact Us</h2>
      <p className="my-4 max-w-2xl">
        If you have any queries about the tour, please contact Ben sellam (our
        Business Manager) via telephone at{' '}
        <a href="tel:+2126621225820" className="hover:underline">
          06621 225 820
        </a>{' '}
        (international ={' '}
        <a href="tel:+2126621225820" className="hover:underline">
          +212 6621 225 820
        </a>
        ) or via email ({' '}
        <a
          href="mailto:tangierguidedtour@gmail.com"
          className="hover:underline"
        >
          tangierguidedtour@gmail.com
        </a>
        ) or by completing the enquiry form below:
      </p>
      <div className="w-full max-w-2xl shadow">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label className="mb-1 inline-block font-[500]">Name</label>
            <input
              type="text"
              {...register('name', {
                required: {
                  value: true,
                  message: 'You must enter your name',
                },
              })}
              className={`block w-full rounded border border-gray-500 bg-slate-50 py-3 px-4 placeholder-gray-500 shadow focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-1/2 ${
                errors.name ? 'border-0 ring-1 ring-red-500' : null
              }`}
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.name?.message}
            </span>
          </div>
          <div>
            <label className="mb-1 inline-block font-[500]">Email</label>
            <input
              type="text"
              {...register('email', {
                required: {
                  value: true,
                  message: 'You must enter your email address',
                },
                minLength: {
                  value: 8,
                  message: 'This is not long enough to be an email',
                },
                maxLength: {
                  value: 120,
                  message: 'This is too long',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'This needs to be a valid email address',
                },
              })}
              className={`block w-full rounded border border-gray-500 bg-slate-50 py-3 px-4 placeholder-gray-500 shadow focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-1/2 ${
                errors.email ? 'border-0 ring-1 ring-red-500' : null
              }`}
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.email?.message}
            </span>
          </div>

          <div>
            <label className="mb-1 inline-block font-[500]">Message</label>
            <textarea
              rows={8}
              {...register('message', {
                required: {
                  value: true,
                  message: 'You need to enter your message',
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
                minLength: {
                  value: 50,
                  message: 'Your message must be longer than this!',
                },
              })}
              className={`block w-full rounded border border-gray-500 bg-slate-50 py-3 px-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                errors.message ? 'border-0 ring-1 ring-red-500' : null
              }`}
            ></textarea>
            <span className="py-2 text-sm text-red-400">
              {errors?.message?.message}
            </span>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center rounded border border-transparent bg-[#047857]
              py-3 px-6 text-base font-medium text-white shadow hover:bg-[#064e3b] focus:outline-none focus:ring-2"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
