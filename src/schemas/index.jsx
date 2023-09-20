import * as Yup from 'yup';

const levels = ['Easy','Medium','Hard']
export const registerSchema = Yup.object({
    name:Yup.string().min(2).max(15).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    mobNumber:Yup.string().min(10).required("Please Enter Your Mobile Number"),
    levels:Yup.string().required("Please Difficulty Level").oneOf(levels)
})



// yup.object().shape({
//     select: yup.string().required()
//   });