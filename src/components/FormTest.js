import React from 'react';
import { Formik, Form, Field,ErrorMessage   } from 'formik';
import s from './FormTest.module.css'
import * as Yup from 'yup'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useDropzone} from 'react-dropzone';
import './Accor2/Accord2.css'
import Accord2 from '../components/Accor2/Accord2'

function FormTest () {
    const initialValues = {
        applicantName: '',
        applicantNumber: '',
        applicantEmail: '',
        applicantAgree:'',
        personName:'',
        personPosition:'',
        personPost:'',
        placeCrime:'',
        CrimeDate:null,
        proofdataCrime:'',
        checkboxProof:[],
        filecrime:'',
        agreed:''
    }
    const validationSchema = Yup.object({
        applicantName: Yup.string().required('Required'),
        applicantNumber: Yup.string().required('Required'),
        applicantEmail: Yup.string().required('Required'),
        applicantAgree: Yup.string().required('Required'),
        personName: Yup.string().required('Required'),
        personPosition: Yup.string().required('Required'),
        personPost: Yup.string().required('Required'),
        placeCrime: Yup.string().required('Required'),
        checkboxProof: Yup.array().required('Required'),
        agreed: Yup.array().required('Required'),
        proofdataCrime: Yup.string().required('Required'),
        CrimeDate: Yup.date()
            .required('Required')
            .nullable()
    })

    const onSubmit= values => {
        // console.log(values)
       alert(JSON.stringify(values, null, 2));
    }

    const radioOptions = [
        { key: 'Надаю згоду на обробку моїх персональних даних*', value: 'agree open' },
        { key: 'Надаю інформацію анонімно', value: 'agree anonim' },

    ]
    const radioOptions2 = [
        { key: 'Військова посадова особа*', value: 'position1' },
        { key: 'Працівник закладу, установи, підприємства, що належить до сфери управління МВС', value: 'position2' },
        { key: 'Поліцейський', value: 'position3' },
        { key: 'Державний службовець', value: 'position4' },

    ]
    const checkboxOptions = [
        { key: 'Так маю', value: 'option1' },
        { key: 'НІ не маю', value: 'option2' },
    ]
    const agreedoption = [

        { key: 'Ознайомлений(на) з інформацією щодо вимог до' +
                ' повідомлення про порушення вимог Закону України ' +
                '«Про запобігання корупції» та порядком їх розгляду»*', value: 'option3' },
    ]
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));


        return (

            <div>
                {        console.log('render')
                }
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}

                >
                    {formik =>(
                        <Form>
                            <h2 className={s.infoappl}>Інформація про особу заявника</h2>
                            <div >
                                <Field  className={s.nameAppl} placeholder="П.І.Б" id='applicantName' name='applicantName' />
                                <div className={s.error}> <ErrorMessage  name='applicantName' /> </div>

                                <Field className={s.mumberAppl} id="applicantNumber" name="applicantNumber" placeholder="Номер телефону" />
                                <span className={s.error}> <ErrorMessage  name='applicantName' /> </span>

                                <Field className={s.mumberAppl} type="email" id="applicantEmail"  name="applicantEmail"  placeholder="Електронна пошта" />
                                <span className={s.error}> <ErrorMessage  name='applicantName' /> </span>
                                <div className={s.divradiomain}>
                                    <Field name='applicantAgree' >
                                        {({ field }) => {
                                            return radioOptions.map(option => {
                                                return (
                                                    <div key={option.key} className={s.divradio}>
                                                        <input
                                                            className={s.radioboxes}
                                                            type='radio'
                                                            id={option.value}
                                                            {...field}
                                                            value={option.value}
                                                            checked={field.value === option.value}
                                                        />
                                                        <label className={s.radiolabel} htmlFor={option.value}>{option.key}</label>
                                                    </div>
                                                )
                                            })
                                        }}
                                    </Field>
                                </div>

                                <span className={s.error}> <ErrorMessage  name='applicantAgree' /> </span>
                            </div>
                            <div className={s.block2}>
                                <h2 className={`${s.infocrime} `}>Інформація про особу, яка вчинила корупційне або пов’язане з корупцією правопорушення* </h2>

                                <Field className={s.nameAppl} placeholder="П.І.Б" id='personName' name='personName' />
                                <div className={s.error}> <ErrorMessage  name='personName' /> </div>

                                <Field className={s.nameAppl} id="personPosition" name="personPosition" placeholder="Посада" />
                                <span className={s.error}> <ErrorMessage  name='personPosition' /> </span>
                                <Field name='personPost' >
                                    {({ field }) => {
                                        return radioOptions2.map(option => {
                                            return (
                                                <div className={s.divradio} key={option.key}>
                                                    <input
                                                        type='radio'
                                                        className={s.radioboxes}

                                                        id={option.value}
                                                        {...field}
                                                        value={option.value}
                                                        checked={field.value === option.value}
                                                    />
                                                    <label htmlFor={option.value}>{option.key}</label>
                                                </div>
                                            )
                                        })
                                    }}
                                </Field>
                            </div>

                            <h2 className={s.infocrime2} >Інформація про можливі факти корупційного або пов’язаного з корупцією правопорушення*</h2>

                            <div>
                                <Accord2 title="Вид можливого правопорушення"
                                         content="Види правопорушень — класифікаційні групи правопорушень за різними підставами розмежовуються між собою за ступенем суспільної шкідливості (небезпечності), за обєктами посягань, за субєктами, за розповсюдженням, за ознаками обєктивної і субєктивної сторони, а також за процедурами їх розгляду."
                                >

                                </Accord2>
                                <Accord2 title="Корупційне правопорушення"
                                         content="Корупційне правопорушення — діяння, що містить ознаки корупції, вчинене особою, зазначеною у частині першій статті 3 цього Закону, за яке законом встановлено кримінальну, дисциплінарну та/або цивільно-правову відповідальність.
                                           Корупційне правопорушення — діяння, що містить ознаки корупції, вчинене особою, зазначеною у частині першій статті 3 цього Закону, за яке законом встановлено кримінальну, дисциплінарну та/або цивільно-правову відповідальність.
                                           Корупційне правопорушення — діяння, що містить ознаки корупції, вчинене особою, зазначеною у частині першій статті 3 цього Закону, за яке законом встановлено кримінальну, дисциплінарну та/або цивільно-правову відповідальність.
                                           "
                                >

                                </Accord2>

                            </div>



                            <Field  className={s.nameAppl} placeholder="Місце здійсненого правопорушення" id='placeCrime' name='placeCrime' />
                            <div className={s.error}> <ErrorMessage  name='placeCrime' /> </div>

                            <div className={s.formcontrol}>
                                <span className={s.datecrime}>
                                    <label  htmlFor='CrimeDate'>Дата злочину</label>
                                </span>
                                <Field name='CrimeDate'>
                                    {({ form, field }) => {
                                        const { setFieldValue } = form
                                        const { value } = field
                                        return (
                                            <DateView

                                                className={s.crimedate}
                                                id="CrimeDate"
                                                {...field}
                                                selected={value}
                                                onChange={val => setFieldValue("CrimeDate", val)}
                                            />
                                        )
                                    }}
                                </Field>
                                <div className={s.error}> <ErrorMessage  name='CrimeDate' /> </div>
                            </div>

                            <h2> Підтверджуючі матеріали </h2>
                            <div>
                                <section >
                                    <div className={s.dropzone} {...getRootProps()}>
                                        < input name='filecrime' {...getInputProps()} />
                                        <p>Перетягніть необхідні файли або клікніть.</p>
                                        <p>Зображення, аудіофайли, doc або pdf (не більше 2мб)</p>
                                        <ul>{files}</ul>
                                    </div>
                                    {/*<aside>*/}
                                    {/*    <h4>Files</h4>*/}
                                    {/*    <ul>{files}</ul>*/}
                                    {/*    {console.log(files)}*/}
                                    {/*</aside>*/}
                                </section>

                            </div>

                            <h2 className={s.block3} >Чи маєте Ви переконання у достовірності наданої інформації?</h2>
                            <div>
                                <Field name='checkboxProof'>
                                    {({ field }) => {
                                        return checkboxOptions.map(option => {
                                            return (
                                                <div key={option.key} className={s.divradio}>
                                                    <React.Fragment >
                                                        <input
                                                            className={s.radioboxes}
                                                            type='checkbox'
                                                            id={option.value}
                                                            {...field}
                                                            value={option.value}
                                                            checked={field.value.includes(option.value) }
                                                        />
                                                        <label htmlFor={option.value}>{option.key}</label> <br/>
                                                    </React.Fragment>
                                                </div>

                                            )
                                        })
                                    }}
                                </Field>
                                <Field name='agreed'>
                                    {({ field }) => {
                                        return agreedoption.map(option => {
                                            return (
                                                <div key={option.key} className={s.divagreed}>
                                                    <React.Fragment >
                                                        <input
                                                            className={s.checkagreed}
                                                            type='checkbox'
                                                            id={option.value}
                                                            {...field}
                                                            value={option.value}
                                                            checked={field.value.includes(option.value) }
                                                        />
                                                        <label htmlFor={option.value}>{option.key}</label> <br/>
                                                    </React.Fragment>
                                                </div>

                                            )
                                        })
                                    }}
                                </Field>
                            </div>


                            <button className={s.button} type="submit">Надіслати</button>
                        </Form>
                    )  }
                </Formik>
            </div>



        );

}

export default FormTest;