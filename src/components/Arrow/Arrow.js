import React  from 'react';
import s from '../FormTest'

function Arrow(props){



    return(

            <div className={s.circle}>
                <svg   width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#F2F4F5"/>
                </svg>
                <div className={s.vector}>
                    <svg  width="15" height="15" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.90002 1.42L8.49002 0.0100002L4.95002 3.54L1.41002 -3.7111e-07L2.37802e-05 1.41L4.24002 5.65C4.42739 5.83625 4.68084 5.94079 4.94502 5.94079C5.20921 5.94079 5.46266 5.83625 5.65002 5.65L9.90002 1.42Z" fill="#4F4F4F"/>
                    </svg>
                </div>
            </div>

    )
}
export default Arrow