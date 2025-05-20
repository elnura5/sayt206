import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddAdmin() {
  return (
    
    <Formik
    
      initialValues={{ name: '', price: '', image: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required'),
        price: Yup.number()
          .required('Required'),
          image: Yup.string()
          .required('Required'),
  
      })}
      onSubmit={(values) => {
        fetch('http://localhost:3000/site' ,{
          method: 'POST',
          headers: {
      
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then(res => res.json())
          .then(res => console.log(res));
        
      }}
    >
      <Form>
        <label htmlFor="name"> Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="price">price</label>
        <Field name="price" type="text" />
        <ErrorMessage name="price" />

        <label htmlFor="image">image </label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default AddAdmin

