
import * as yup from "yup";
export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required(`این فیلد الزامی است.`)
        .email("فرمت ایمیل وارد شده اشتباه است."),
    password: yup.string()
        .required(`این فیلد الزامی است.`),
})