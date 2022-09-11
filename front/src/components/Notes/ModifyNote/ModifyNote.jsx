import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik ,Field} from 'formik'
import { clearNoteById, getNoteById, modifyNote } from '../../../redux/actions/noteActions'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../CreateNote/CreateNote.css'
import { getCategories } from '../../../redux/actions/categoryActions'

export default function ModifyNote({ match }) {
  const { id } = match.params
  const dispatch = useDispatch();
  const history = useHistory();


  
 
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getNoteById(id));
    return dispatch(clearNoteById())
  }, [dispatch, id])

  const { categories, note } = useSelector((state) => state)
  
  let selfChecked = (note && note.Categories && note.Categories.map(n => n.name))

  return (
    <>
      {note.title &&
        <Formik
          initialValues={{
            title: note.title,
            content: note.content,
            checked: selfChecked,
          }}

          validate={(values) => {
            const errors = {};
            if (values.content.length > 255) errors.content = 'the max of characters is 255';
            if (values.title.length > 60) errors.title = 'the max of characters is 60';
            if (values.title.length === 0) errors.title = 'it cant be empty';
            return errors
          }}

          onSubmit={(values, actions) => {

            Swal.fire({
              title: 'Do you want to save the changes?',
              showDenyButton: true,
              confirmButtonText: 'Save',
              denyButtonText: `Don't save`,
            }).then(async (result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                await dispatch(modifyNote(id, values))
                if (note.isArchived === false) {
                  history.push('/')
                } else {
                  history.push('/archiveds')
                }
                Swal.fire('Saved!', '', 'success')
              } else if (result.isDenied) {
                if (note.isArchived === false) {
                  history.push('/')
                } else {
                  history.push('/archiveds')
                }
                Swal.fire('Changes are not saved', '', 'info')
              }
            })

          }}
        >
          {({ values,errors, handleSubmit, handleChange }) => (
            <form action="" onSubmit={handleSubmit} className='form '>
              <h1 className="form-title">Modify Note</h1>
              <div className='form-btn'>
                <label htmlFor="">title</label><br />
                <input name='title' onChange={handleChange} value={values.title} type="text" placeholder='titulo...' />
                { errors.title && <div className="form-error">{errors.title}</div>}
              </div>
              <br />
              <div className='form-btn'>
                <label htmlFor="">content </label><br />
                <textarea name="content" onChange={handleChange} value={values.content} cols="30" rows="10" placeholder='descripcion...' />
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
                  ,console.log(values.checked))}
              </div>
            </div>
              <button className='form-submit-btm'>Modify</button>
              <br />
              { note.isArchived === false ? <Link to="/" className='form-submit-btm'>Cancel</Link> : <Link to="/archiveds" className='form-submit-btm'>Cancel</Link>}
            </form>
          )}
        </Formik>}
    </>
  )
}
