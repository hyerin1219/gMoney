import * as yup from 'yup';



export const schema = yup.object({
    id: yup.string().required('아이디를 입력해주세요.'),

    number: yup.number().required('사업자번호를 입력해주세요.'),

    name: yup.string().required('상호를 입력해주세요.'),

    representative: yup.string().required('대표자를 입력해주세요.'),
    
    category: yup.string().required('사업자등록증의 업종을 기입하세요.'),

});
