'use client';
import { Formik, Form, Field } from 'formik';

interface SearchValues {
  mode: string;
  location: string;
}

export default function SearchForm() {
  function handleSearchFormik(values: SearchValues) {
    console.log('Searching for', values.mode, 'in', values.location);
    // router.push(`/search?mode=${values.mode}&loc=${values.location}`)
  }

  return (
    <Formik
      initialValues={{ mode: 'Buy', location: '' }}
      onSubmit={handleSearchFormik}
    >
      {({ values, setFieldValue }) => (
        <Form className="max-w-2xl mx-auto p-6 bg-gray-200 shadow rounded -mt-10 relative z-10">
          <div className="flex gap-6 mb-3">
            {['Buy', 'Rent', 'Sell'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFieldValue('mode', item)}
                className={`
                  pb-1 border-b-2 text-gray-700
                  ${values.mode === item
                    ? 'border-yellow-400 font-bold'
                    : 'border-transparent'}
                `}
              >
                {item}
              </button>
            ))}
          </div>

          <Field
            name="location"
            type="text"
            placeholder="Find Location..."
            className="border w-full p-2 rounded mb-3 text-gray-700"
          />

          <button
            type="submit"
            className="bg-yellow-400 px-4 py-2 w-full rounded text-white font-semibold"
          >
            Find
          </button>
        </Form>
      )}
    </Formik>
  );
}
