import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik ,Field} from 'formik'
import { createNote, getNotes } from '../../../redux/actions/noteActions'
import { getCategories } from '../../../redux/actions/categoryActions'
import Swal from 'sweetalert2'
import './CreateNote.css'
import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react'


export default function CreateCard() {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  
  const{categories} = useSelector((state) => state)
  return (
    <>
      <Formik
        initialValues={{
          title: '',
          content: '',
          checked:[]
        }}

        validate={(values) => {
          const errors = {};
          if (values.content.length > 255) errors.content = 'the max of characters is 255';
          if (values.title.length > 60) errors.title = 'the max of characters is 60';
          if (values.title.length === 0) errors.title = 'it cant be empty';
          return errors
        }}

        onSubmit={ (values, actions) => {
          Swal.fire({
            title: 'Do you want to create the note?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              await dispatch(createNote(values))
              await dispatch(getNotes())
              history.push('/')
              Swal.fire('Created!', '', 'success')
            } else if (result.isDenied) {
              history.push('/')
              Swal.fire('Not Created', '', 'info')
            }
          })

        }}
      >
        {({ values,errors, handleSubmit, handleChange }) => (
          <form action="" onSubmit={handleSubmit} className='form '>
            <h1 className="form-title">Create Note</h1>
            <div className='form-btn'>
              <label htmlFor="">title</label><br />
              <input name='title' onChange={handleChange} value={values.title} type="text" placeholder='title...' />
              { errors.title && <div className="form-error">{errors.title}</div>}
            </div>
            <br />
            <div className='form-btn'>
              <label htmlFor="">content</label><br />
              <textarea name="content" onChange={handleChange} value={values.content} cols="30" rows="10" placeholder='the description is optional...' />
              <p className='text-sm'>{values.content.length}/255</p>
              { errors.content && <div className="form-error">{errors.content}</div>}
            </div>
            <div>
              <label htmlFor="" className="font-bold  border-black border-b-2 ">categories</label><br />
              <div role="group" aria-labelledby="checkbox-group" className="grid grid-cols-3">
                {categories.length && categories.map(cat => 
                  <label key={cat.id} className=" flex items-start ">
                    <i className="fa-solid fa-tag"></i>
                    <p className='font-bold'>{cat.name}</p>
                    <Field type="checkbox" name="checked" value={cat.name} />
                  </label>
                  )}
              </div>
            </div>
            <button className='form-submit-btm'>Create</button>
            <br />
            <Link to="/" className='form-submit-btm'>Cancel</Link>
          </form>
        )}
      </Formik>
    </>
  )
}
